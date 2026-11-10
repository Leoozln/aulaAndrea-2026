# Componentes

Catálogo dos componentes reutilizáveis do Front e da responsabilidade de cada um.

Cada componente fica em sua própria pasta, em `src/components/`, com o arquivo `.jsx` e o seu `.css`.

| Componente | Arquivo | Responsabilidade |
|------------|---------|------------------|
| Header | `src/components/Header/Header.jsx` | Exibir o título e a navegação principal |
| Footer | `src/components/Footer/Footer.jsx` | Exibir informações no rodapé |
| Botao | `src/components/Botao/Botao.jsx` | Padronizar os botões reutilizáveis |

## Detalhes

### Header
- Exibe o título "Sistema de pessoas e cargos".
- Exibe o menu de navegação com os links **Início** (`/`), **Pessoas** (`/pessoas`) e **Cargos** (`/cargos`), usando o `Link` do `react-router-dom`.
- Aparece em todas as telas.

### Footer
- Exibe o texto do rodapé.
- Aparece em todas as telas.

### Botao
- Recebe a propriedade `titulo`, que é o texto exibido no botão.
- Exemplo de uso:

```jsx
<Botao titulo="Clique aqui" />
```
