import { StyleSheet } from "react-native/types_generated/index";
import { thema } from "../../styles/global.js";

export const styles = StyleSheet.create({
  modalbody: {
    flex: 1,
    backgroundColor: thema.colors.background,
    padding: 25,
    pattingTop: 50,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  btnSave: {
    backgroundColor: thema.colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  btnCancelar: {
    textAlign: "center",
    marginTop: 10,
    color: "#f00",
  },
});
