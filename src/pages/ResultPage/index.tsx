import React, { Component, ReactNode } from 'react'
import { View, Text } from 'react-native'


export class ResultPAge extends Component<any, any> {

        render(): ReactNode {
            const pagador = this.props.route.params

            return(
                <View>
                    <Text>Nome do contribuinte: {pagador.nome}</Text>
                    <Text>Imposto total a pagar: {pagador.totalAPagar.toFixed(2)}</Text>
                </View>
            )
        }
}