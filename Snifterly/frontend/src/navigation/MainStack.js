import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import PrimeraHome from '../screens/PrimeraHome.jsx'

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false,}}>
            
            <Stack.Screen
                name= 'PrimeraHome'
                component={ PrimeraHome }
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack