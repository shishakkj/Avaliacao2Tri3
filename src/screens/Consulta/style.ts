import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        paddingBottom: 10
    },
    input: {
        color: "#000",
        backgroundColor: "#eee",
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
        color: "#FFF",
    },
    consulta: {
        margin: 10,
        width: "70%",
        backgroundColor: "#FFF",
        borderRadius: 5,
        
    }
  });
  
export default styles;