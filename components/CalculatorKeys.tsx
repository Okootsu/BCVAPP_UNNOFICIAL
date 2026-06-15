import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

interface KeyProps {
    setFunction: React.Dispatch<React.SetStateAction<string>>;
    setResultClear: React.Dispatch<React.SetStateAction<string>>;
    onCalcule: () => void;
}

const CalculatorKeys = ({
    setFunction,
    onCalcule,
    setResultClear,
}: KeyProps) => {
    const handleKeyPress = (key: string) => {
        if (key === "AC") {
            setFunction("");
            setResultClear("Resultado: 0.00");
        } else if (key === "CALCULAR") {
            onCalcule();
        } else {
            setFunction((prev: string) => prev + key);
        }
    };

    const keys = [
        ["7", "8", "9"],
        ["4", "5", "6"],
        ["1", "2", "3"],
        ["AC", "0", "."],
    ];
    return (
        <View style={styles.Buttonscontainer}>
            {keys.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((key) => (
                        <TouchableOpacity
                            style={styles.button}
                            key={key}
                            onPress={() => handleKeyPress(key)}
                        >
                            <Text
                                style={[
                                    styles.text,
                                    key === "AC" && { color: "#dc2626" },
                                ]}
                            >
                                {key}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}
            <TouchableOpacity
                style={styles.calculateButton}
                onPress={() => handleKeyPress("CALCULAR")}
            >
                <Text style={styles.calculateText}>CALCULAR</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CalculatorKeys;

const styles = StyleSheet.create({
    Buttonscontainer: {
        width: "90%",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12,
    },
    button: {
        flex: 1,
        backgroundColor: "#e2e8f0",
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginHorizontal: 4,
        alignItems: "center",
        minWidth: 60,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#1e293b",
    },
    calculateButton: {
        backgroundColor: "rgb(0 40 120/0.95)",
        paddingVertical: 16,
        borderRadius: 8,
        marginTop: 16,
        alignItems: "center",
    },
    calculateText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
});
