import { StyleSheet, Text, View, StyleProp, ViewStyle } from "react-native";
import React from "react";

import FontAwesome from "@expo/vector-icons/FontAwesome";

interface ExchageMoneyPrimaryProps {
    value: string;
    date: string;
}

const ExchageMoneyPrimary = ({ value, date }: ExchageMoneyPrimaryProps) => {
    return (
        <View style={styles.card}>
            <Text style={styles.textStyle}>USD</Text>
            <View style={styles.moneyView}>
                <Text style={styles.textStyleSmall}>{value}</Text>
                <Text style={styles.textStyle}>BS</Text>
            </View>
            <View style={styles.dateView}>
                <FontAwesome name="calendar" size={24} color="white" />
                <Text style={styles.textStyle}>{date}</Text>
            </View>
        </View>
    );
};

export default ExchageMoneyPrimary;

const styles = StyleSheet.create({
    card: {
        backgroundColor: "rgb(0 40 120/0.95)",
        padding: 20,
        borderRadius: 16,
        width: "90%",
        elevation: 8,
    },
    moneyView: {
        flexDirection: "row",
        alignItems: "baseline",
        gap: 8,
    },
    dateView: { flexDirection: "row", alignItems: "center", gap: 8 },
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
    textStyleSmall: {
        fontSize: 32,
        fontWeight: "bold",
        marginVertical: 20,
        color: "white",
    },
});
