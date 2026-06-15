import {
    StyleSheet,
    Image,
    useColorScheme,
    ScrollView,
    Dimensions,
} from "react-native";
import { Text, View } from "@/components/Themed";

import DisclaimerCard from "@/components/DisclaimerCard";
import ExchangeMoneyCard from "@/components/ExchageMoneyPrimary";

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

const { width } = Dimensions.get("window");

export default function TabOneScreen() {
    // Jalamos las variables que creamos en el contexto
    const { data } = useTasa();

    const colorScheme = useColorScheme() ?? "light";
    const colores = Temas[colorScheme];

    return (
        <ScrollView
            style={{ backgroundColor: colores.fondo }}
            contentContainerStyle={styles.container}
        >
            <Text style={[styles.title, { backgroundColor: colores.tarjeta }]}>
                Tasa Cambiaria Banco Central de Venezuela
            </Text>
            <View style={styles.imageView}>
                <Image
                    source={require("../../assets/images/bcv-logo.png")}
                    style={{ width: width * 0.4, height: width * 0.4 }}
                />
            </View>
            <DisclaimerCard
                style={{
                    backgroundColor: colores.tarjeta,
                }}
            />
            <Text style={[styles.title, { backgroundColor: colores.tarjeta }]}>
                Tasa Principal
            </Text>

            <ExchangeMoneyCard
                value={data?.tasas?.Dolar.trim() || "0,00"}
                date={data?.fecha_valor || "No Disponible"}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        gap: 12,
        marginBottom: 25,
    },

    imageView: {
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 190,
        padding: 10,
        elevation: 8,
        alignContent: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        width: "90%",
        textAlign: "center",
        elevation: 8,
        borderColor: "#00000087",
        backgroundColor: "#ffffff",
    },
});
