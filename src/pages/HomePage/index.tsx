import React, { Component, ReactNode } from 'react'
import { HomeBody } from './view'
import api from '../../utils/api'

type State = { nome: string, ganhoanual: number }

export class HomePage extends Component<any, State> {

    constructor(props: any){
        super(props)
         this.state ={ nome: "", ganhoanual: 0}
    }

    public setNome(value: string): void{
        this.setState({ nome: value })
    }

    public setGanhoAnual(value: number): void{
        this.setState({ ganhoanual: value })
    }

    public async calcular(): Promise<void> {
        console.log("State: ", this.state)

        const ganho = this.state.ganhoanual
        const nome = this.state.nome

        const response = await api.get('/irpf/'+ ganho +'/'+ nome)
        const pagador = response.data
        this.props.navigation.navigate('result', pagador)
    }



    render(): ReactNode {
        return(
            <HomeBody actions={this} />
        )
    }
}

