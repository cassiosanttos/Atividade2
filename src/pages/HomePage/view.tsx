import React, { Component,ReactNode } from "react";
import { View, Text, TextInput, Button } from "react-native";
import {Container } from 'native-base'

export class HomeBody extends Component<any, any> {
    render(): ReactNode {
        const { actions } =  this.props

        return(

            <Container>
                <Text>Nome</Text>
                <TextInput 
                    keyboardType='name-phone-pad' 
                    onChangeText={ (value) => actions.setNome(value)}
                />

                <Text>Ganho Anual</Text>
                <TextInput 
                    keyboardType='numeric'
                    onChangeText={ (value) => actions.setGanhoAnual(Number(value))}
                />

                <Button onPress={() => actions.calcular()} title="Calcular" />
            </Container>


        )
    }

}