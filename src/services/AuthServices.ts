import { API } from "../utils"
import axios, {AxiosResponse} from 'axios';

class AuthService {
    constructor(
        private loginBaseUrl = 'https://192.168.3.42:8000/authentication_token'
    )
    {}

    async login(email: string, password: string){
        console.log(this.loginBaseUrl);
        
        try {
            return await fetch(this.loginBaseUrl, {
                method:'POST',
                headers: {
                    'Content-Type':	'application/json'
                },
                body: JSON.stringify({email, password})
            })
        } catch(error) {
            throw new Error("Error AuthService Login " + JSON.stringify({...error})); 
        }
    }

}

export const authService = new AuthService()
