import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";
import { useState } from "react";

export default function Agenda() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCPF] = useState("")
    const [nasc, setNasc] = useState("")
    const [endereco, setEndereco] = useState("")
    const [telefone, setTelefone] = useState("")

    function handleUserAdd() {
        console.log(
            "Nome completo: " + name
            +"\nCPF: " + cpf
            + "\nEmail: " + email
            + "\nData de nascimento: " + nasc
            + "\nEndereço: " + endereco
            + "\nTelefone: " + telefone
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Preencha os dados</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome completo"
                onChangeText={(e) => setName(e)}
                value={name}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(e) => setEmail(e)}
                value={email}
            />

            <TextInput
                style={styles.input}
                placeholder="CPF"
                onChangeText={(e) => setCPF(e)}
                value={cpf}
            />

            <TextInput
                style={styles.input}
                placeholder="Data de nascimento"
                onChangeText={(e) => setNasc(e)}
                value={nasc}
            />

            <TextInput
                style={styles.input}
                placeholder="Endereço"
                onChangeText={(e) => setEndereco(e)}
                value={endereco}
            />

            <TextInput
                style={styles.input}
                placeholder="Telefone"
                onChangeText={(e) => setTelefone(e)}
                value={telefone}
            />

            <TouchableOpacity style={styles.btn} onPress={handleUserAdd}>
                <Text style={styles.btnText}>Marcar consulta</Text>
            </TouchableOpacity>
        </View>
    )
}