import React, { ReactNode, Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { HomePage } from '../pages/HomePage'
import { ResultPAge } from '../pages/ResultPage'
import { ListBody } from '../pages/ListProduct/view'

export default class Routes extends Component {
    render(): ReactNode {
        const StackNavigator = createStackNavigator()


        return(
            <NavigationContainer>
                <StackNavigator.Navigator>

                <StackNavigator.Screen 
                    name={''}
                    component={ListBody}
                    options={{
                        title: 'Lista'
                    }}
                />


                    <StackNavigator.Screen 
                        name={'home'} 
                        component={HomePage} 
                        options={{
                            title: 'Novo Cálculo' ,
                            // headerStyle: {
                            //     backgroundColor: '#f4511e'
                            // },
                            // headerTintColor: '#fff'
                        }}  
                    />
                    <StackNavigator.Screen
                        name={'result'} 
                        component={ResultPAge} 
                        options={{
                            title: 'Resultado'
                        }}
                     />

                </StackNavigator.Navigator>
            </NavigationContainer>
        )
    }
}





