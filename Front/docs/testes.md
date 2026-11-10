# Testes

Registro dos testes feitos no Front.

| Data | Teste | Como foi feito | Resultado |
|------|-------|----------------|-----------|
| 10/11/2026 | Build do projeto | `npm run build` | Passou |
| 10/11/2026 | Navegação para Pessoas | Clicar no link "Pessoas" do menu | Endereço mudou para `/pessoas` e a tela Pessoas foi exibida sem recarregar a página |
| 10/11/2026 | Navegação para Cargos | Clicar no link "Cargos" do menu | Endereço mudou para `/cargos` e a tela Cargos foi exibida sem recarregar a página |
| 10/11/2026 | Listagem de pessoas | Com o Back e o Front rodando, abrir a tela Pessoas | A tela exibiu "Pessoas cadastradas" com as pessoas do banco, sem erros de CORS no console |

## Como testar

1. Iniciar o Back (precisa do PostgreSQL rodando):

   ```bash
   cd Back
   npm install
   node index.js
   ```

2. Em outro terminal, instalar as dependências e iniciar o Front:

   ```bash
   cd Front
   npm install
   npm run dev
   ```

3. Abrir o endereço exibido no terminal (por padrão, `http://localhost:5173`).
4. Clicar nos links do menu e conferir se a tela correta aparece.
5. Na tela Pessoas, conferir se as pessoas cadastradas no banco aparecem na lista.
