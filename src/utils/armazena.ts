import { AsyncStorage } from 'react-native'

class Repositorio {

    
    public save(produto: any): void {
        this.getLista().then(lista => {
            lista.push(produto)
            AsyncStorage.setItem('produtos', JSON.stringify(lista))
        })
    }
    

    public async getLista(): Promise<any[]> {
        const textoJson = await AsyncStorage.getItem('produtos')

        if(textoJson){

            return JSON.parse(textoJson)
        }else{
            return new Array<any>()
        }


    }

}