import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { theme } from "./src/styles/global";

import Addtask from "./src/components/AddTask";
import EditTask from "./src/components/EditTask";
import SearchBar from "./src/components/SearchBar";
import TaskCard from "./src/components/TaskCard";
import style from "./src/components/AddTask/style";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [addVisible, setAddVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const AddTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now().toString() }]);
    setAddVisible(false);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
    setEditVisible(false);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={style.container}>
      <Text style={style.header}>Todo List</Text>
      <SearchBar value={searchText} onChange={setSearchText} />
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard task={item} onDelete={deleteTask} onEdit={openEdit} />
        )}
      />
      <TouchableOpacity
        style={style.button}
        onPress={() => setAddVisible(true)}
      >
        <Text style={style.adicionar}>+</Text>
      </TouchableOpacity>
      <Addtask
        visible={addVisible}
        onClose={() => setAddVisible(false)}
        onAdd={AddTask}
      />
      
        <EditTask
          visible={editVisible}
          taskData={selectedTask}
          onSave={updateTask}
          onClose={() => setEditVisible(false)}
          
        />
      
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: theme.colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});