# Testes

Registro dos testes feitos no Front.

| Data | Teste | Como foi feito | Resultado |
|------|-------|----------------|-----------|
| 10/11/2026 | Build do projeto | `npm run build` | Passou |
| 10/11/2026 | Navegação para Pessoas | Clicar no link "Pessoas" do menu | Endereço mudou para `/pessoas` e a tela Pessoas foi exibida sem recarregar a página |
| 10/11/2026 | Navegação para Cargos | Clicar no link "Cargos" do menu | Endereço mudou para `/cargos` e a tela Cargos foi exibida sem recarregar a página |

## Como testar

1. Instalar as dependências e iniciar o Front:

   ```bash
   cd Front
   npm install
   npm run dev
   ```

2. Abrir o endereço exibido no terminal (por padrão, `http://localhost:5173`).
3. Clicar nos links do menu e conferir se a tela correta aparece.
