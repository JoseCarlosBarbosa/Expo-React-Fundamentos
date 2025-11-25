import { StyleSheet } from "react-native";

const utils = StyleSheet.create({
  containerTarefa: {
    backgroundColor: "Blue",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  textXl: {
    fontSize: 20,
  },
  textBold: {
    fontWeight: "bold",
  },
  textRed500: {
    color: "#f56565",
  },
  divCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});

export const {
  textXl,
  textBold,
  textRed500,
  divCenter,
  container,
  containerTarefa,
} = utils;
