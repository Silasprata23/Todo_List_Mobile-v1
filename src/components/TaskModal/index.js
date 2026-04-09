import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./style.js";
import { use } from "react";

export default function taskModal({ visible, onclose, onSave, taskToEdit }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    startData: "",
    endData: "",
    priority: "",
  });
  useEffect(() => {
    if (taskToEdit) setForm(taskToEdit);
    else
      setForm({
        title: "",
        description: "",
        startData: "",
        endData: "",
        priority: "",
      });
  }, [taskToEdit, visible]);

  return (
    <Modal visible={visible} animation="slide">
      <View style={styles.modalbody}>
        <Text style={styles.label}>
          {taskToEdit ? "Editar tarefa" : "nova tarefa"}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Título"
          value={form.title}
          onChange={(v) =>
            setForm({
              ...form,
              title,
            })
          }
        />

        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={form.description}
          onChange={(v) =>
            setForm({
              ...form,
              description: v,
            })
          }
        />

        <TextInput
          style={styles.input}
          placeholder="Data de início"
          value={form.startData}
          onChangeText={(v) =>
            setForm({
              ...form,
              startData: v,
            })
          }
        />

        <TextInput
          style={styles.input}
          placeholder="Data de fim: DD/MM"
          value={form.endData}
          onChangeText={(v) =>
            setForm({
              ...form,
              endData: v,
            })
          }
        />

        <TextInput
          style={styles.input}
          placeholder="Prioridade: baixa, média ou alta"
          value={form.priority}
          onChangeText={(v) =>
            setForm({
              ...form,
              priority: v,
            })
          }
        />

        <TouchableOpacity style={styles.btnsave}
        onPress={() => onSave(form)}>

            <Text style={styles.btntext}>
                Salvar Tarefa
            </Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={onclose}>
            <text style={styles.btnCancelar}>
                Cancelar
            </text>
        </TouchableOpacity>



      </View>
    </Modal>
  );
}
