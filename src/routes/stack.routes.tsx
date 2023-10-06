import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import Home from '../screens/Home';
import Consulta from '../screens/Consulta';
import Agenda from '../screens/Agenda';
import React from 'react';

export function StackRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >

            <Screen
                name='Home'
                options={{
                    title: 'Home',
                    headerShown: false
                }}
                component={Home}
            />

            <Screen
                name='Agenda'
                options={{
                    title: 'Agenda',
                    headerShown: false
                }}
                component={Agenda}
            />

            <Screen
                name='Consulta'
                options={{
                    title: 'Consulta',
                    headerShown: false
                }}
                component={Consulta}
            />


            

        </Navigator>
    )
}