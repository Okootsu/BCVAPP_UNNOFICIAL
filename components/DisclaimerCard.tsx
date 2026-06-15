import React from "react";
import {
    StyleProp,
    StyleSheet,
    View,
    ViewStyle,
    useColorScheme,
} from "react-native";
import { Text } from "@/components/Themed";

import AntDesign from "@expo/vector-icons/AntDesign";

interface DisclaimerCardProps {
    style?: StyleProp<ViewStyle>;
}

const DisclaimerCard = ({ style }: DisclaimerCardProps) => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === "dark";
    return (
        <View style={[styles.card, style]}>
            <View style={styles.header}>
                <AntDesign
                    name="info-circle"
                    size={24}
                    color={isDarkMode ? "white" : "black"}
                />
                <Text style={styles.headerText}>Aviso de Responsabilidad</Text>
            </View>
            <View>
                <Text style={styles.message}>
                    Este software fue desarrollado como ejercicio académico. No
                    representa ni está asociado al Banco Central de Venezuela,
                    ni cuenta con promoción oficial alguna.
                </Text>
            </View>
        </View>
    );
};

export default DisclaimerCard;

const styles = StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 16,
        width: "90%",
        borderWidth: 1,
        borderColor: "#00000087",
        backgroundColor: "#ffffff",
        elevation: 6,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginBottom: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    message: {
        fontSize: 14,
        lineHeight: 25,
        textAlign: "justify",
    },
});
