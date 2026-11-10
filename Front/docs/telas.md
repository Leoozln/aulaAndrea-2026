# Telas

Documentação das telas do Front, com a rota, a funcionalidade e a situação de cada uma.

Situações possíveis: **Concluída**, **Em andamento** e **A fazer**.

| Tela | Rota | Arquivo | Funcionalidade | Situação |
|------|------|---------|----------------|----------|
| Home | `/` | `src/pages/Home/Home.jsx` | Página inicial do sistema. Exibe o texto de boas-vindas e os botões "Saiba Mais" e "Clique aqui". | Em andamento |
| Pessoas | `/pessoas` | `src/pages/Pessoas/Pessoas.jsx` | Gerenciar o cadastro de pessoas (listar, cadastrar, editar e excluir) usando a API `/pessoas` do Back. | Concluída |
| Cargos | `/cargos` | `src/pages/Cargos/Cargos.jsx` | Gerenciar o cadastro de cargos (listar, cadastrar, editar e excluir) usando a API `/cargos` do Back. | Em andamento |

## Detalhes

### Home
- **Feito:** página criada e acessível pela rota `/` e pelo link "Início" do menu.
- **Falta:** definir o conteúdo final da página e a ação dos botões.

### Pessoas
- **Feito:**
  - Página criada e acessível pela rota `/pessoas` e pelo link "Pessoas" do menu.
  - **Listar:** exibe as pessoas cadastradas no banco, buscando os dados em `GET /pessoas`.
  - **Cadastrar:** digitar o nome no campo e clicar em "Cadastrar" (`POST /pessoas`).
  - **Editar:** clicar em "Editar" ao lado da pessoa, alterar o nome no campo e clicar em "Salvar" (`PUT /pessoas/:id`).
  - **Excluir:** clicar em "Excluir" ao lado da pessoa (`DELETE /pessoas/:id`).
  - O endereço do Back vem de `src/services/api.js`.

### Cargos
- **Feito:** página criada e acessível pela rota `/cargos` e pelo link "Cargos" do menu.
- **Falta:** listagem e formulário de cargos integrados com o Back. A API `/cargos` já está pronta no Back.
