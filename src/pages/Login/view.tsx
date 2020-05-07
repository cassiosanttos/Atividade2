import React, { Component,ReactNode } from "react";
import { View, Text, TextInput, Button } from "react-native";
import {Container } from 'native-base'

export class TelaLogin extends Component<any, any> {
    render(): ReactNode {
        const { actions } =  this.props

        return(
            <Container>
                <Component>
                <Text>Login</Text>
                <TextInput 
                    keyboardType='name-phone-pad'
                    onChangeText={ (value) => actions.setLogin(value)}
                />

                <Text>Senha</Text>
                <TextInput 
                    keyboardType='visible-password'
                    onChangeText={ (value) => actions.setPassword(value)}
                />

                </Component>
            </Container>
        )
    }
}