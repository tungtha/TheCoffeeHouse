import axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.thecoffeehouse.com/api/',
    timeout: 60000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});
//https://api.thecoffeehouse.com/api/v2/menu
//https://api.thecoffeehouse.com/api/verify_mobile
export const getProductList = () => instance.get('v2/menu')
export const getAllStore = () => instance.get('get_all_store')

export const Login = (params) => instance.post('verify_mobile', params)

