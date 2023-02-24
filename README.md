Mailer Configuration:

  Reference Document: https://notiz.dev/blog/send-emails-with-nestjs

Step 1: Add following dependencies
  yarn add @nestjs-modules/mailer nodemailer handlebars
  yarn @types/nodemailer -D (dev dependency)

Step 2: 
  2.1: Create mail module and service
    nest g module mail
    nest g service mail
  
  2.2: Create template folder inside mail module folder and create .hbs file for template 
  

Step 3: Add following compiler options to nest-cli.json
  "compilerOptions": {
    "assets": [{ "include": "mail/templates/**/*", "outDir": "dist/" }],
    "watchAssets": true
  }


Step: 4 Import mail module in module where you want to use and make use of send mail service to send emails