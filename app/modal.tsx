import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Image, Dimensions } from "react-native";
import { Stack } from "expo-router";
import { Linking } from "react-native";

import { Text, View } from "@/components/Themed";

const { width } = Dimensions.get("window");

export default function ModalScreen() {
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: "Informacion del Desarrollador",
                }}
            />
            <Text style={styles.title}>Desarrollador</Text>
            <Text style={styles.title}>Okootsu</Text>

            <Image
                source={require("@/assets/images/pfp.jpg")}
                style={{
                    width: width * 0.8,
                    height: width * 0.8,
                    margin: 30,
                    borderRadius: 8,
                }}
            />

            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
