<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>
<h3 align="center">
  Backend da aplicação goBarber, construido para atender a demanda de salões de barbearia e cabeleleiro, mostrando e realizando agendamentos, além de realizar envio de emails para informação dos prestadores de serviçõs em relação a agendamentos realizados para cada profissional.
  
 Backend of the goBarber application, built to meet the demand of barber and hairdresser salons, showing and making appointments, in addition to sending emails to inform service providers regarding appointments made for each professional.
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/HenriqueVazquez/goBaberBackend?color=blue">
  
  <a href="www.linkedin.com/in/henrique-vazquez">
    <img alt="Made by Henrique Vazquez" src="https://img.shields.io/badge/made%20by-Henrique%20Vazquez-blue">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue">

  <a href="https://github.com/HenriqueVazquez/goBaberBackend/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/HenriqueVazquez/Desafio-2---inicio-fastfeet?style=social">
  </a>
</p>

<p>Termino do backend do GoBarber!</p>


  
## Tecnologias :rocket:

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [Jsonwebtoken](https://jwt.io/introduction/)
- [Sequelize](https://sequelize.org/)
- [Yup](https://github.com/jquense/yup)
- [express](https://github.com/expressjs/express)
- [eslint](https://eslint.org/)
- [prettier](https://eslint.org/)
- [nodemon](http://nodemon.io/)
- [sucrase](https://github.com/alangpierce/sucrase#readme)
- [MongoDB](https://www.mongodb.com/)
- [Sentry](https://sentry.io/)
- [Multer](https://github.com/expressjs/multer)
- [Redis](https://redis.io/)
- [Bee-queue](https://github.com/bee-queue/bee-queue)
- [Nodemailer](https://nodemailer.com/about/)
- [handlebars](https://handlebarsjs.com/)
- [youch](https://github.com/poppinss/youch)
- [Date-fns](https://date-fns.org/)
- [insomnia](https://insomnia.rest/download)



## Instalação, execução e desenvolvimento  🤔

Importe o arquivo `Insomnia_2022-03-02.json` no Insomnia ou clique no botão [Run in Insomnia](#insomniaButton)

<p align="center" id="insomniaButton">
  <a href="https://insomnia.rest/run/?label=Gobarber-backend&uri=https%3A%2F%2Fgithub.com%2FHenriqueVazquez%2FgoBaberBackend%2Fblob%2Fmain%2FInsomnia_2022-03-02.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
  </p>
  
  ### Pré-requisitos

**Faça um clone desse repositório**

###  Backend 🍳

- A partir da raiz do projeto`;
- Execute `yarn` para instalar as dependências;
- [Instale o docker](https://docs.docker.com/)
- Execute `docker run --name database -e POSTGRES_PASSWORD=doker -p 5432:5432 -d postgres` para montar o banco conforme o projeto, (Se precisar troque a porta conforme o seu ambiente);
- Execute `yarn sequelize db:migrate` para executar as migrations;
- Execute `yarn sequelize db:seed:all` para executar a seed;
- Execute `yarn start` para iniciar o servidor;

## Como contribuir🤔

- **Faça um fork deste repositório**

```bash
# Fork via GitHub official command line
# Caso não tenha o GitHub CLI, realize o fork pelo site.

$ gh repo fork HenriqueVazquez/goBaberBackend
```

```bash
# Clone o seu fork
$ git clone url-do-seu-fork && cd gobarber

# Crie uma branch com sua feature
$ git checkout -b minha-feature

# Faça o commit das suas alterações
$ git commit -m 'feat: Minha nova feature'

# Faça o push para a sua branch
$ git push origin minha-feature
```

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.



<p align="center">
Feito por <a href="https://www.linkedin.com/in/henrique-vazquez-11905ab6" target="_blank"> Henrique Vazquez</a> :wink:
  </p>
