import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

interface PickerProps {
    selectedValue: string;
    onValueChange: (value: string) => void;
}

const Select = ({ selectedValue, onValueChange }: PickerProps) => {
    return (
        <View style={styles.container}>
            <Picker
                mode="dialog"
                style={{ color: "black" }}
                selectedValue={selectedValue}
                onValueChange={(itemValue) => onValueChange(itemValue)}
                dropdownIconColor={"black"}
            >
                <Picker.Item label="🇺🇸 Dolar" value="Dolar" />
                <Picker.Item label="🇻🇪 Bolivar" value="Bolivar" />
                <Picker.Item label="🇪🇺 Euro" value="Euro" />
                <Picker.Item label="🇨🇳 Yuan" value="Yuan" />
                <Picker.Item label="🇹🇷 Lira" value="Lira" />
                <Picker.Item label="🇷🇺 Rublo" value="Rublo" />
            </Picker>
        </View>
    );
};

export default Select;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#00000087",
    },
});
