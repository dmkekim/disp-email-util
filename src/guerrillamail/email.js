import axios from "axios"
import { constants } from "../utils/constants.js"

class EmailManagement {

    getEmailList(token) {
        const emailList = axios.get(`${constants.baseUrl}?f=get_email_list&offset=0&sid_token=${token}`).then(response => {
            return response
        })
        return emailList
    }

    checkEmail(token) {
        const email = axios.get(`${constants.baseUrl}?f=check_email&seq=0&sid_token=${token}`).then(response => {
            return response
        })
        return email
    }

    fetchEmail(token, emailId) {
        const emailContent = axios.get(`${constants.baseUrl}?f=fetch_email&email_id=${emailId}&sid_token=${token}`).then(response => {
            return response
        })
        return emailContent
    }
}

export const manageEmails = new EmailManagement() 