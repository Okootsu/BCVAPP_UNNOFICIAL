import { StyleSheet, useColorScheme, ScrollView } from "react-native";
import { Text, View } from "@/components/Themed";

import { useState } from "react";

import Display from "@/components/DisplayCalculator";
import CalculatorKeys from "@/components/CalculatorKeys";
import SelectPicker from "@/components/Picker";

import { useTasa } from "@/context/tasaContext";

const Temas = {
    light: {
        fondo: "#f4f4f4",
        tarjeta: "#ffffff",
        texto: "#000000",
        borde: "#d1d1d1",
    },
    dark: {
        fondo: "#121346",
        tarjeta: "rgb(0 40 120/0.95)",
        texto: "#ffffff",
        borde: "#444444",
    },
};

export default function TabTreeScreen() {
    const colorScheme = useColorScheme() ?? "light";
    const colores = Temas[colorScheme];

    const [amount, setAmount] = useState("");
    const [fromCurrency, setFromCurrency] = useState("Dolar");
    const [toCurrency, setToCurrency] = useState("Bolivar");
    const [result, setResult] = useState("Resultado: 0,00");

    const { data } = useTasa();

    const CalcularConversion = () => {
        // 1. Convertimos el monto del display de string a número decimal
        // Reemplazamos comas por puntos en lo que el usuario haya tecleado
        const montoLimpio = amount.replace(",", ".");
        const monto = parseFloat(montoLimpio);

        if (isNaN(monto) || !data) return;

        const origen = fromCurrency;
        const destino = toCurrency;

        // Si el origen y el destino son idénticos, no hay nada que calcular
        if (origen === destino) {
            setResult(
                `Resultado: ${monto.toFixed(2)} ${toCurrency.toUpperCase()}`,
            );
            return;
        }

        // 3. Helper corregido para limpiar formatos de la API
        const obtenerTasaEnVES = (moneda: string): number => {
            if (moneda === "Bolivar") return 1;

            const clave = moneda as keyof typeof data.tasas;
            const tasaRaw = data.tasas[clave]; // Esto es el string que viene de la API (ej: "45,6828")

            // Pasamos la coma a punto para que JavaScript la reconozca como decimal válido
            const tasaLimpia = tasaRaw.replace(",", ".");

            return parseFloat(tasaLimpia);
        };

        const tasaOrigenVES = obtenerTasaEnVES(origen);
        const tasaDestinoVES = obtenerTasaEnVES(destino);

        // 4. LA MATEMÁTICA INTERNA (Tu algoritmo viejo optimizado)
        let conversionFinal = 0;

        if (destino === "Bolivar") {
            // Ejemplo: Dólar a Bolívar -> Monto * Precio del Dólar
            conversionFinal = monto * tasaOrigenVES;
        } else if (origen === "Bolivar") {
            // Ejemplo: Bolívar a Dólar -> Monto / Precio del Dólar
            conversionFinal = monto / tasaDestinoVES;
        } else {
            // Ejemplo: Dólar a Euro -> Usa el Bolívar como puente intermedio
            const tasaCruze = tasaOrigenVES / tasaDestinoVES;
            conversionFinal = monto * tasaCruze;
        }

        // 5. FORMATEAR AL ESTILO VENEZOLANO (Puntos para miles, comas para decimales)
        const formateador = new Intl.NumberFormat("es-VE", {
            minimumFractionDigits: 4,
            maximumFractionDigits: 5,
        });

        setResult(
            `Resultado: ${formateador.format(conversionFinal)} ${toCurrency}`,
        );
    };

    return (
        <ScrollView
            contentContainerStyle={[
                styles.container,
                { backgroundColor: colores.fondo },
            ]}
        >
            <View style={styles.selectConatiner}>
                <Text style={styles.title}>Moneda de origen</Text>
                <SelectPicker
                    selectedValue={fromCurrency}
                    onValueChange={setFromCurrency}
                />
                <Text style={styles.title}>Moneda de destino</Text>
                <SelectPicker
                    selectedValue={toCurrency}
                    onValueChange={setToCurrency}
                />
            </View>

            <Display number={amount} result={result} />
            <CalculatorKeys
                setFunction={setAmount}
                onCalcule={CalcularConversion}
                setResultClear={setResult}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "space-between",
        gap: 35,
        paddingVertical: 20,
        paddingBottom: 20,
    },
    selectConatiner: {
        elevation: 8,
        borderColor: "#00000087",
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        gap: 8,
        width: "90%",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
    },
});
