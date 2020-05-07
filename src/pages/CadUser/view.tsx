import React, { Component,ReactNode } from "react";
import { View, Text, TextInput, Button } from "react-native";
import {Container } from 'native-base'

export class TelaCadastro extends Component<any, any> {
    render(): ReactNode {
        const { actions } =  this.props

        return(

            <Container>
                <Text>Nome</Text>
                <TextInput 
                    keyboardType='name-phone-pad' 
                    onChangeText={ (value) => actions.setNome(value)}
                />

                 <Text>Endereco </Text>
                <TextInput 
                    keyboardType='name-phone-pad' 
                    onChangeText={ (value) => actions.setEndereco(value)}
                />

                <Text>Idade</Text>
                <TextInput 
                    keyboardType='numeric'
                    onChangeText={ (value) => actions.setIdade(Number(value))}
                />

                <Text>E-mail</Text>
                <TextInput 
                    keyboardType='email-address' 
                    onChangeText={ (value) => actions.setEmail(value)}
                />

                <Text>Senha</Text>
                <TextInput 
                    keyboardType='visible-password' 
                    onChangeText={ (value) => actions.setSenha(value)}
                />

                <Button onPress={() => actions.CadUser()} title="Cadastrar" />
            </Container>


        )
    }

}