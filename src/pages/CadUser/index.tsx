import REact, { Component, ReactNode } from 'react'
import api from '../../utils/api'
import { TelaCadastro } from './view'


type State = { endereco: string, idade: string, email: string,  usuario: string, senha: string}
export class CadUser extends Component<any,any> {

    constructor(props:any) {
        super(props)
        this.state ={usuario: "", senha: "", }
    }

    public setEndereco(value: string): void{
        this.setState({ endereco: value })
    }

    public setIdade(value: string){
        this.setState({ idade: value })
    }
    public setEmail(value: string): void{
        this.setState({ email: value })
    }

    public setNome(value: string): void{
        this.setState({ usuario: value })
    }

    public setSenha(value: string){
        this.setState({ senha: value })
    }
    


    public async cadUser(usuario: string, senha: string): Promise<void>{
        const user = this.state.usuario
        const pass = this.state.senha
        const end = this.state.endereco
        const mail = this.state.email
        const idad = this.state.idade

        const body = { address: end, age: idad, email: mail, name: user, userPassword: pass}
        const response = await api.get('user/customer/add'+ body)
    }

    render(): ReactNode {
        return(
            <TelaCadastro actions={this} />
        )
    }

}//Fim da classe export CadUser