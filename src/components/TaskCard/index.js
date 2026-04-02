import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

import {theme} from "../../styles/global"

export default  function  taskCard({item, onDelete, onEdit}) {
    const priorityColor = theme.colors.primary[item.priority] || theme.colors.textSub;


    return(
        <View style={[styles.card, { borderLeftColor: priorityColor }]}>
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>
                    {item.title}
                </Text>
                <Text style={styles.desc}>
                    {item.description}
                </Text>
                <Text style={[styles.badge, { color: priorityColor }]}> ● { item.priority }
                </Text>
                <Text style={styles.date}>
                    { item.start } - { item.end }
                </Text>
            </View>

            <View style={styles.actions}>
                <TouchableOpacity onPress = { onEdit }>
                    <Text style={styles.icon}></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = { onDelete }>
                    <Text style={styles.icon}></Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}