import { View, StyleSheet, Image, Button, Text, TouchableOpacity, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styles from "./style";

export default function Consulta() {
    const navigation = useNavigation();
    
const lista = [
    {
        nome: "Fulano da Silva Júnior",
        email: "fulaninhogameplays@gmail.com",
        cpf: "123.456.789-10",
        nasc: "28/09/2005",
        endereco: "Servidão de sei lá onde, 866",
        telefone: "(48) 91234-5678",
        valor: "300"
    },
    {
        nome: "Beltrano da Costa",
        email: "beltranocosta@gmail.com",
        cpf: "109.876.543-21",
        nasc: "25/08/2010",
        endereco: "Rua dos Meus Manos, 45",
        telefone: "(48) 98745-7851",
        valor: "300"
    },
    {
        nome: "Pedro de Paula Santos",
        email: "pedrinhosantinho@gmail.com",
        cpf: "657.098.234-87",
        nasc: "24/07/1999",
        endereco: "Avenida dos Coqueiros",
        telefone: "(48) 93450-6541",
        valor: "300"
    },
    {
        nome: "Paulo Roberto Vidal",
        email: "paulovidal@gmail.com",
        cpf: "023.456.456-35",
        nasc: "31/04/2006",
        endereco: "Rua Paulinho Gameplays",
        telefone: "(48) 94587-8265",
        valor: "300"
    },
    {
        nome: "Paola da Silva Santos Nogueira",
        email: "paola_nogueira@estudante.sesisenai.org.br",
        cpf: "456.625.941-58",
        nasc: "06/03/2004",
        endereco: "Servidão Nogueira Neves",
        telefone: "(48) 93465-2145",
        valor: "300"
    }
]


    return (
    <View>
        <Text></Text>
        <FlatList
        data = {lista}
        renderItem={(
        ({item}) =>
        (
            <View style={styles.consulta}>
                <Text>Nome: {item.nome}</Text>
                <Text>Email: {item.email}</Text>
                <Text>CPF: {item.cpf}</Text>
                <Text>Data de nascimento: {item.nasc}</Text>
                <Text>Endereço: {item.endereco}</Text>
                <Text>Telefone: {item.telefone}</Text>
                <Text>Valor: {item.valor}</Text>
            </View>
        )
        )} ></FlatList>
    </View>
  );
}