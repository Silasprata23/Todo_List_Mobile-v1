import { StyleSheet } from "react-native";
import { theme } from "../../styles/global.js";

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        padding: 30,
        backgroundColor: theme.colors.background,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 10,
        borderRadius: 8,
        
    },
    button: {
        backgroundColor: theme.colors.primary,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    }
})