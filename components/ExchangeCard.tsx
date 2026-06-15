import {
    StyleSheet,
    View,
    Image,
    StyleProp,
    ViewStyle,
    TextStyle,
    Dimensions,
} from "react-native";
import { Text } from "@/components/Themed";
import React from "react";

import { useTasa } from "@/context/tasaContext";

interface ExchangeCardProp {
    style?: StyleProp<TextStyle | ViewStyle>;
}

const { width } = Dimensions.get("window");

export default function ExchangeCard({ style }: ExchangeCardProp) {
    const { data } = useTasa();

    return (
        <View style={styles.card}>
            <View style={styles.imageView}>
                <Image
                    source={require("../assets/images/bcv.jpg")}
                    style={{
                        width: width * 0.7,
                        height: width * 0.46,
                    }}
                />
            </View>

            <Text style={[styles.description, style as StyleProp<TextStyle>]}>
                {data?.info_adicional || "No hay información disponible."}
            </Text>
            <View style={styles.ratesList}>
                {data?.tasas &&
                    Object.entries(data.tasas).map(([currency, value]) => (
                        <View
                            key={currency}
                            style={[styles.row, style as StyleProp<ViewStyle>]}
                        >
                            <Text style={styles.coins}>{currency}:</Text>

                            <Text style={styles.coins}>{value}</Text>
                        </View>
                    ))}
            </View>
            <View style={styles.dateView}>
                <Text style={styles.date}>Fecha de Vigencia</Text>
                <Text style={styles.date}>
                    {data?.fecha_valor || "No Disponible"}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 30,
        padding: 30,
        justifyContent: "space-between",
        gap: 25,
    },
    imageView: {
        padding: 5,
        borderColor: "#00000087",
        borderWidth: 1,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        elevation: 8,
    },
    description: {
        fontSize: 14,
        textAlign: "justify",
        padding: 16,
        borderRadius: 16,
        elevation: 6,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#00000087",
    },
    ratesList: {
        gap: 15,
    },
    coins: {
        fontWeight: "bold",
    },
    dateView: { alignItems: "center" },
    date: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#00000087",
        borderRadius: 8,
        padding: 10,
        backgroundColor: "#ffffff",
        elevation: 6,
    },
});
