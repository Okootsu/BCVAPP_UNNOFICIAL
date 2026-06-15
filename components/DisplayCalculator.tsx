import { StyleSheet } from "react-native";
import React from "react";
import { Text, View } from "@/components/Themed";

interface DisplayAmountProps {
    number: string;
    result: string;
}

const DisplayCalculator = ({ number, result }: DisplayAmountProps) => {
    return (
        <View style={styles.display}>
            <Text style={styles.displayText}>{number || "0"}</Text>
            <Text style={styles.resultText}>{result}</Text>
        </View>
    );
};

export default DisplayCalculator;

const styles = StyleSheet.create({
    display: {
        alignItems: "flex-end",
        borderColor: "rgb(0 40 120/0.95)",
        borderWidth: 2,
        borderRadius: 16,
        padding: 20,
        width: "90%",
        backgroundColor: "white",
    },
    displayText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "rgb(0 40 120/0.95)",
    },
    resultText: {
        fontSize: 15,
        marginTop: 10,
        fontWeight: "bold",
        color: "black",
    },
});
