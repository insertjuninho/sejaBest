# CRUD API

### Aplicação desenvolvida com NodeJS, ExpressJS e Firebase

É uma aplicação de carta de natal, onde será possível realizar um cadastro de um usuário 

### Ajustes e melhorias

-[X] CRUD:(Create, release("Select"), Update e delete)

## Iniciando o projeto LOCAL
- Clone o repositório
- Dentro da pasta com o projeto clonado rode o comando

```
    npm install -D

```
--- Depois da instalação, rode o comando dentro de SRC 

```
nodemon index

```
## Usando o projeto Via Heroku
link: https://apicrudrest.herokuapp.com/

## Routes


    router.post('/create',   controller.create);
    payload para criar as carta de natal: { "titulo":"titulo", "conteudo":"conteudo"}
    
    Retorna todas as cartas cadastradas no banco
    router.get('/full',     controller.full);
    
    router.put('/update',    controller.update);
    payload de exemplo: {"id":"ido", "titulo":"titulo", "conteudo":"conteudo"}
    
    router.delete('/delete/:id', controller.delete);
    Só passar o ID como parametro na parâmetro

## Banco

Estou usando o Firebase

### Libs utilizadas

* body-parser,
* cors,
* express,
* dotenv,
* firebase-admin

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/35452628" width="100px;" alt="Foto do Alexandre Junior no GitHub"/><br>
        <sub>
          <b>Alexandre Junior</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
