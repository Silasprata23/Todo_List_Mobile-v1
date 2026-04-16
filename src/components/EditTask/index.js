import React, {useEffect, useState} from "react";
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import style from "./style.js";



export default function EditTask({ visible, onClose, taskData, onSave }) {
    const [currentTask, setCurrentTask] = useState(taskData);

    useEffect(() => {
        setCurrentTask(taskData);
    }, [taskData]);

    return
    (
        <Modal visible={visible} animationType='fade'>
            <View style={style.modal}>
                <Text style={style.titulo}>Editar Tarefa</Text>
                <TextInput
                    value={currentTask?.title}
                    style={style.input}
                    onChangeText={t => setCurrentTask({...currentTask, title: t})}
                />
                
                <TextInput
                    value={currentTask?.description}
                    style={style.input}
                    onChangeText={t => setCurrentTask({...currentTask, description: t})}
                />

                <TouchableOpacity style={style.button} onPress={() => onSave(currentTask)}>
                    <Text>Atualizar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button}  onPress={onClose}>
                    <Text>Voltar</Text>
                    
                </TouchableOpacity>
            </View>
        </Modal>
    )
}