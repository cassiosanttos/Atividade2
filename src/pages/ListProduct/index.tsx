import React, { Component, ReactNode } from 'react'
import { Container, Content, List, Item } from 'native-base'
import { View, FlatList, Text, StyleSheet} from 'react-native'
import api from '../../utils/api'
import { ListBody } from './view'



export default class ProductList extends Component <any, any> {

    constructor(props: any) {
        super(props)
        this.state ={
            lista: []
        }
    }

    public async lerProdutos(): Promise<void> {
        const response =  await api.get('/product/list')
        const res = response.data
        fetch('/product/list')
        .then(list => list.json() )
        .then(list => {
            this.setState({
                data: list.resultado
            })
        })
    }


    componentDidMount() {

        this.lerProdutos()

    }

    render(): ReactNode {
        return(
            <ListBody actions={this} />

        )
    }



}