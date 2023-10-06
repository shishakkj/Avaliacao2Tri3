import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./style";

export default function Home() {
    const navigation = useNavigation(); 

    function abrirAgenda(){
        navigation.navigate('Agenda')
    }
     function abrirConsulta(){
        navigation.navigate('Consulta')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Consultório do balacobaco</Text>

            <TouchableOpacity style={styles.btn} onPress= {abrirAgenda}>
                <Text style={styles.btnText}>Agendamento</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress= {abrirConsulta}>
                <Text style={styles.btnText}>Consultas</Text>
            </TouchableOpacity>

        </View>
        
    )
}
