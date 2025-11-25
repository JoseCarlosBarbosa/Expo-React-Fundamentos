import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonForm: {
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  sendButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  error: { color: "red", fontSize: 12 },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  textWhite: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#ffffffff",
  },
  textBold: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  textBlack: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#000000ff",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#000000ff",
    padding: 15,

    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 60,
  },
  conatinerMain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  capitulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  numeroMega: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 24,
    backgroundColor: "black",
    color: "white",
    borderRadius: 40,
    height: 50,
    width: 50,
    marginHorizontal: 10,
    marginVertical: 10,
  },

  containerMega1: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  containerMega5: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerMega2: {
    marginTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
  },

  containerMega3: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  toast: {
    position: "absolute",
    bottom: 40,
    backgroundColor: "#000000ff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "center",
    zIndex: 999,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 100,
  },

  titleMega1: {
    fontSize: 22,
    padding: 10,
    textAlign: "center",
  },
  containerTarefas: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  textoTarefas: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
});
