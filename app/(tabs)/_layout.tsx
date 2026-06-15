import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack, Tabs } from "expo-router";
import { Pressable, ActivityIndicator, StyleSheet, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Text, View } from "@/components/Themed";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

import { TasaProvider } from "@/context/tasaContext";

import { useTasa } from "@/context/tasaContext";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

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

function NavigacionTabs() {
    const colorScheme = useColorScheme();

    const colorTema = useColorScheme() ?? "light";

    const colores = Temas[colorTema];
    const { data, loading, error, fetchData } = useTasa();

    // 1. CASO DE ESPERA: Si está cargando, mostramos la animación
    if (loading) {
        return (
            <View
                style={[
                    styles.centerContainer,
                    { backgroundColor: colores.fondo },
                ]}
            >
                {/* El indicador de carga animado de React Native */}
                <ActivityIndicator size="large" color="#38BDF8" />
                <Text style={styles.loadingText}>
                    Cargando tasas oficiales...
                </Text>
                <Text style={styles.subtext}>
                    El servidor gratuito de Render puede tardar unos segundos en
                    despertar.
                </Text>
            </View>
        );
    }

    // 2. CASO DE ERROR: Si falló la API, no dejamos que la app explote (error || !data)
    if (error || !data) {
        return (
            <View
                style={[
                    styles.centerContainer,
                    { backgroundColor: colores.fondo },
                ]}
            >
                <Text style={styles.errorText}>⚠️ Oops! Algo salió mal</Text>
                <Text style={styles.subtext}>
                    {error || "No hay datos disponibles."}
                </Text>
                {/* Botón para que el usuario intente conectar otra vez manualmente */}
                <Button
                    title="Reintentar"
                    onPress={fetchData}
                    color="#0A2F75"
                />
            </View>
        );
    }

    return (
        <TasaProvider>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                    // Disable the static render of the header on web
                    // to prevent a hydration error in React Navigation v6.
                    headerShown: useClientOnlyValue(false, true),
                    tabBarStyle: {
                        backgroundColor:
                            Colors[colorScheme ?? "light"].tabColorBar,
                    },
                    headerStyle: {
                        backgroundColor:
                            Colors[colorScheme ?? "light"].tabColorBar,
                    },
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        headerTitle: "Bienvenido",
                        title: "Inicio",
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon name="home" color={color} />
                        ),
                        headerRight: () => (
                            <Link href="/modal" asChild>
                                <Pressable>
                                    {({ pressed }) => (
                                        <FontAwesome
                                            name="info-circle"
                                            size={25}
                                            color={
                                                Colors[colorScheme ?? "light"]
                                                    .text
                                            }
                                            style={{
                                                marginRight: 15,
                                                opacity: pressed ? 0.5 : 1,
                                            }}
                                        />
                                    )}
                                </Pressable>
                            </Link>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="two"
                    options={{
                        title: "Tasas de Cambio",
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon name="dollar" color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="tree"
                    options={{
                        title: "Calculadora",
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon name="calculator" color={color} />
                        ),
                    }}
                />
            </Tabs>
        </TasaProvider>
    );
}

export default function TabLayout() {
    return (
        <TasaProvider>
            <StatusBar style="auto" />
            <NavigacionTabs />
        </TasaProvider>
    );
}

const styles = StyleSheet.create({
    centerContainer: {
        flex: 1,

        justifyContent: "center",
        alignItems: "center",
        padding: 30,
    },
    loadingText: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 15,
    },
    errorText: {
        color: "#EF4444", // Rojo para errores
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtext: {
        color: "#94A3B8",
        fontSize: 14,
        textAlign: "center",
        marginTop: 5,
        marginBottom: 20,
    },
});
