import REact, { Component, ReactNode } from 'react'
import api from '../../utils/api'


type State = { login: string, senha: string,}
export class Login extends Component<any,any> {

    constructor(props:any) {
        super(props)
        this.state ={login: "", senha: "", }
    }

    public setLogin(value: string): void{
        this.setState({ login: value })
    }

    public setPassword(value: string){
        this.setState({ senha: value })
    }
    


    public async Login(login: string, senha: string): Promise<void>{
        const user = this.state.login
        const pass = this.state.senha

        const body = { login: user, password: pass}
        const response = await api.get('user/login'+ body)
    }

}
