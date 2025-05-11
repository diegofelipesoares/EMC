# Calculadora de IMC - React + TypeScript + Vite

Este projeto é uma aplicação web desenvolvida em **React** com **TypeScript** e configurada com o **Vite** para oferecer uma experiência de desenvolvimento rápida e eficiente. A aplicação permite calcular o Índice de Massa Corporal (IMC) com base na altura e peso fornecidos pelo usuário, exibindo o resultado com uma classificação detalhada.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Vite**: Ferramenta de build rápida e moderna para projetos front-end.
- **CSS Modules**: Para estilização modular e escopo de classes CSS.
- **ESLint**: Ferramenta de linting para manter a qualidade do código.
- **SWC**: Compilador rápido para JavaScript/TypeScript, usado para Fast Refresh.

## Funcionalidades

- **Cálculo do IMC**: O usuário insere sua altura e peso, e o sistema calcula o IMC com base na fórmula padrão.
- **Classificação do IMC**: O resultado é exibido com uma mensagem indicando a classificação (ex.: Peso baixo, Peso adequado, Sobrepeso, etc.).
- **Validação de Entrada**: Verifica se os campos foram preenchidos corretamente antes de realizar o cálculo.
- **Interface Responsiva**: Layout adaptável para diferentes tamanhos de tela.

## Estrutura do Projeto

A estrutura do projeto foi organizada para facilitar a escalabilidade e manutenção:

```
/src
  /assets         # Arquivos estáticos (imagens, ícones, etc.)
  /components     # Componentes reutilizáveis
    /Header       # Componente de cabeçalho
    /Formulario   # Componente principal para cálculo do IMC
  /styles         # Estilos globais e variáveis CSS
  App.tsx         # Componente raiz da aplicação
  main.tsx        # Ponto de entrada do React
/public
  index.html      # Arquivo HTML principal
```

## Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

### Pré-requisitos

- Node.js (versão 16 ou superior)
- Gerenciador de pacotes (npm ou yarn)

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Abra o navegador e acesse:
   ```
   http://localhost:5173
   ```

## Configuração de Lint e Formatação

O projeto utiliza **ESLint** para garantir a qualidade do código e **Prettier** para formatação consistente. As configurações podem ser ajustadas nos arquivos `.eslintrc` e `.prettierrc`.

### Comandos úteis:

- Verificar problemas de lint:
  ```bash
  npm run lint
  ```

- Corrigir problemas automaticamente:
  ```bash
  npm run lint:fix
  ```

## Personalização

### Alterar o título da página
O título da aba do navegador pode ser alterado no arquivo `public/index.html`:
```html
<title>Calculadora de IMC</title>
```

### Substituir o ícone da página
Para alterar o favicon, substitua o arquivo `public/favicon.ico` pelo ícone desejado.

## Próximos Passos

- [ ] Adicionar testes unitários com **Jest** e **React Testing Library**.
- [ ] Melhorar a acessibilidade (A11y) da aplicação.
- [ ] Implementar suporte para múltiplos idiomas (i18n).
- [ ] Adicionar animações para melhorar a experiência do usuário.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

---

Desenvolvido por Diego Soares (https://github.com/diegofelipesoares).