# Disposable email account

## Description
This package enables you to simplify your automation test script. It provides creation of custom/random email account, access your inbox, and get content of an email.

## Install
To install:
```bash
pip install foobar
```

## Usage
```bash

import { emailUtil } from "disp-email-util";

emailUtil.setEmailAccount(email).then(accountDetails => {
    // Your code here
})

emailUtil.getListOfEmails(token).then(list => {
    // Your code here
})

emailUtil.getEmailContent(token, emailId).then(content => {
    // Your code here
})

```

## Methods/Functions
-   setEmailAccount : this creates a temporary email account. A random email user is assigned if email user is not provided, e.g. if email user is "foo", it will create an email account foo@guerrillamailblock.com
-   getListOfEmails : retrieves list of emails in your inbox. It requires token as parameter which you can get from setEmailAccount.
-   getEmailContent : get the email metadata and content. To read email content, it is recommended to use DOM parsers to process its content.

## References
-   [Guerrillamail](https://www.guerrillamail.com/) 
-   [API reference](https://docs.google.com/document/d/1Qw5KQP1j57BPTDmms5nspe-QAjNEsNg8cQHpAAycYNM/edit?hl=en)