import React, { Component,ReactNode } from "react";
import { View, Text, TextInput, Button } from "react-native";
import {Container, Content } from 'native-base'
import { FlatList} from 'react-native'

export class ListBody extends Component<any, any> {

    render(): ReactNode {
        return(

            <Container>
                <Content>
                        <FlatList 
                            data= {this.state.data}
                            renderItem = {({item}) => (
                                <View>
                                    <Text>{item.id}</Text>
                                    <Text>{item.name}</Text>
                                    <Text>{item.price}</Text>
                                    <Text>{item.amount}</Text>
                                    <Text>{item.factory}</Text>
                                </View>
                            )}
                            keyExtractor = { item => item.id }
                        />
                </Content>
            </Container>

        )
    }

}
