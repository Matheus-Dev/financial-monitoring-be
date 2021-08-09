# Fullstack Developer Challenge

Este projeto tem como objetivo a construção de uma API Rest para atender os seguintes requisitos:

Com base na estória de usuário a seguir, desenvolva o código necessário para atender aos
seguintes requisitos:

1. Expor uma API com método GET de um endpoint de lista de clientes inadimplentes;
2. Utilizar NodeJS como linguagem de backend;
3. Utilizar MongoDB como banco de dados;
4. Utilizar Docker para servir a aplicação localmente, com um container para a
aplicação NodeJS e outro para o banco de dados;
5. Utilizar HTML, CSS e Javascript para exibir a lista de clientes, (qualquer framework
de css/javascript pode ser utilizado, também pode ser feito Vanilla).

## Pré-Requisitos

Para que seja possível realizar a execução da aplicação, é necessário que a máquina tenha o Docker instalado.

## Execução do Projeto

Para subir a aplicação é necessário que seja executado o seguinte comando

```bash
docker-compose up api-dev
```

Tendo feito isso, será instanciado um container da API e o container do MongoDB. Na inicialização dos container, será executado um script que fará a inserção de dados no banco do MongoDB, para facilitar a execução do projeto
