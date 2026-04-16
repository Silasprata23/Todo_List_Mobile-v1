import { TextInput, View } from "react-native";
import { styles } from "./style";

export default function SearchBar({ value, onChangeText }) {
    return (

       <View>

            <TextInput
                style={styles.input}
                placeholder="Pesquisar por titulo"
                value={value}
                onChangeText={onChangeText}
                />

         </View>
    )
}