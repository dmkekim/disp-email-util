import { manageEmailAccount } from "./src/guerrillamail/account.js"
import { manageEmails } from "./src/guerrillamail/email.js"

class MailUtil {
    /**
     * Returns a Promise.
     * Pass an email user with maximum of 74 characters, e.g. foo, to create the temporary email foo@sharklasers.com.
     * If no email account is passed, a random email will be generated.
     * 
     * An object containing the email address and a token will be returned.
     */
    setEmailAccount(email) {
        const emailUser = String(email).length > 74 ? String(email).substring(0, 74) : String(email)
        const emailAccount = manageEmailAccount.createEmailAccount(emailUser).then(account => {
            return account
        })
        return emailAccount
    }

    /**
     * Gets the list of emails.
     */
    getListOfEmails(token) {
        const listOfEmails = manageEmails.getEmailList(token).then(list => {
            return list.data.list
        })

        return listOfEmails
    }

    /**
     * Fetch the email
     */
    getEmailContent(token, emailId) {
        const emailContent = manageEmails.fetchEmail(token, emailId).then(content => {
            return content.data
        })

        return emailContent
    }
}

export const emailUtil = new MailUtil()
