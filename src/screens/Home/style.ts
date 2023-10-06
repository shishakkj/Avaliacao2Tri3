import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        paddingBottom: 10,
        fontSize: 30,
        margin: 10,
        textAlign: 'center'
    },
    input: {
        color: "#000",
        backgroundColor: "#FFF",
        borderRadius: 5,
        fontWeight: "200",
        width: "60%",
        padding: 10,
        margin: 10
    },
    btn: {
        backgroundColor: "#F00",
        fontSize: 14,
        width: "60%",
        margin: 10,
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
    },
    btnText: {
        color: "white",
    }
  });
  
export default styles;