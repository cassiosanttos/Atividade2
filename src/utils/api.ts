import axios from 'axios'

const api = axios.create({
    baseURL: 'https://example-ecommerce.herokuapp.com'
})

export default api 