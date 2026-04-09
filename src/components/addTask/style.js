import { StyleSheet } from "react-native";
import {thema } from "../../styles/global";

export default StyleSheet.create({
    modal: {
        flex: 1,
        padding: 30,
        backgroundColor: thema.colors.background
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20
    },
    input: {
        backgroundColor: "#fff",
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 15,
       borderWidth: 1
    },
    button: {
        backgroundColor: thema.colors.primary,
        padding: 15,
        borderRadius: 10,
        alignItems: "center"
    },
    txtCancelar: {
        color: '#f00',
        textAlign: 'center',
    }
});