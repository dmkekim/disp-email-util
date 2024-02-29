import axios from "axios";
import { constants } from "../utils/constants.js";

class ManageAccount {
    emailAccount;

    createEmailAccount(email) {
        if(email) {
            this.emailAccount = createCustomEmailAccount(email)
        } else {
            this.emailAccount = createRandomEmailAccount()
        }
        return this.emailAccount
    }
}

function createCustomEmailAccount(email) {
    const token = createRandomEmailAccount().then(emailObject => {
        return emailObject.token
    })

    const customEmail = axios.post(`${constants.baseUrl}?f=set_email_user&email_user=${email}&lang=en&sid_token=${token}`)
        .then(response => {
            return {
                emailAddress: response.data.email_addr,
                token: response.data.sid_token
            }
        })  
    
    return customEmail
}

function createRandomEmailAccount() {
    const emailAccountObject = axios.get(`${constants.baseUrl}?f=get_email_address`)
    const emailAddressObject = emailAccountObject.then(response => {
        return {
            emailAddress: response.data.email_addr,
            token: response.data.sid_token
        }
    })

    return emailAddressObject
}

export const manageEmailAccount = new ManageAccount()