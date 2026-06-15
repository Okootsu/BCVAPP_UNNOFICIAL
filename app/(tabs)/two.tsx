import { StyleSheet, useColorScheme, ScrollView } from "react-native";
import { Text, View } from "@/components/Themed";

import ExchangeRateCard from "@/components/ExchangeCard";

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

export default function TabTwoScreen() {
    const colorScheme = useColorScheme() ?? "light";
    const colores = Temas[colorScheme];
    const isDarkMode = colorScheme === "dark";
    return (
        <ScrollView
            contentContainerStyle={[
                styles.container,
                { backgroundColor: colores.fondo },
            ]}
        >
            <ExchangeRateCard style={{ backgroundColor: colores.tarjeta }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
