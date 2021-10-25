# Backend


## Model

### Entidade
Utilizou-se as anotações do Hibernate para criar as entidades e gerar as tabelas do banco de dados, localizadas no pacote __java/model/entity__. 

!

### Acesso ao objeto de dados
Criou-se métodos para realizar as operações de inserir, deletar, editar e listar, localizada no pacote __java/model/dao__.
Para assegurar que a conexão com banco funciona adequadamente, bem como suas operações, criou-se pequenos testes localizados em __test/dao__.

## Controller
Criou-se as rotas mapeadas para as operações do CRUD somente relacionadas à entidade __Cliente__. Possui as funcionalidades de listar, adicionar, deletar e editar.
