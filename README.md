# MailScheduler

A MailScheduler API which was used for a customers project, exposes an API which can be addressed to schedule emails at date and time (ISO 8601).
It uses node-schedule and nodemailer for scheduling the mail.

## Deployment

To deploy this project run

```bash
  npm start
```

Copy the .env.example to .env with

```bash
  cp .env.example .env
```

and fill the necessary information.

**It is highly recommended to run this with SSL/TLS, as you transfer sensitive information.**

## API Reference

#### Schedule email at provided date

```http
  POST /schedule
```


| Body parameter | Type     | Description                                                                                    |
|:---------------| :------- |:-----------------------------------------------------------------------------------------------|
| `secret`       | `string` | Required (if USE_SECRET is enabled in .env, recommended if you use MAIL_URL from config)       |
| `date`         | `string` | Date in ISO 8601                                                                               |
| `mail_url`     | `string` | Mail URL to use for sending the email (Optional). If not provided, MAIL_URL from .env is used. |
| `email_to`     | `string` | Recipient email address                                                                        |
| `email_from`   | `string` | Sender email address                                                                           |
| `subject`      | `string` | Subject of email                                                                               |
| `cc`           | `string` | CC (optional)                                                                                  |
| `bcc`          | `string` | BCC (optional)                                                                                 |
| `email_body`   | `string` | Email body                                                                                     |
