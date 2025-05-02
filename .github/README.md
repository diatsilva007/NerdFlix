<div align="center">

# NerdFlix 🎥

> NerdFlix é uma aplicação web para gerenciamento de filmes favoritos, utilizando a API do TMDB para exibir informações sobre filmes. O projeto foi desenvolvido com React e React Router.

</div>

## 🚀 Funcionalidades

- Listagem de filmes populares.
- Visualização de detalhes de um filme.
- Adicionar filmes aos favoritos.
- Remover filmes dos favoritos.
- Navegação entre páginas utilizando React Router.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Gerenciamento de rotas no React.
- **API TMDB**: Fonte de dados para os filmes.
- **CSS**: Estilização da aplicação.

## 📂 Estrutura do Projeto

```
nerdflix/
├── public/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── index.js
│   │   │   ├── header.css
│   │   ├── Pages/
│   │   │   ├── Home/
│   │   │   │   ├── index.js
│   │   │   │   ├── home.css
│   ├── img/
│   │   ├── logo-NerdFlix.png
│   ├── App.js
│   ├── index.js
│   ├── index.css
├── .gitignore
├── package.json
```

## ⚙️ Configuração do Ambiente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/diatsilva007/NerdFlix
   cd nerdflix
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure a API Key do TMDB**:
   - Substitua a chave da API no arquivo `src/components/Pages/Home/index.js`:
     ```javascript
     const apiKey = 'SUA_API_KEY_AQUI';
     ```

4. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm start
   ```

   
## 🌐 Deploy na Vercel

Aqui está um exemplo atualizado de como o README.md do seu projeto poderia ser estruturado:

```markdown
# NerdFlix 🎥

Um aplicativo de catálogo de filmes desenvolvido em React, consumindo a API do TMDB para exibir informações sobre filmes.

## 🚀 Funcionalidades

- Listagem de filmes populares.
- Visualização de detalhes de um filme.
- Adicionar filmes aos favoritos (armazenados no `localStorage`).
- Busca de trailers no YouTube.

## 🛠️ Tecnologias Utilizadas

- **React.js**: Biblioteca para construção da interface.
- **React Router**: Gerenciamento de rotas.
- **Axios**: Consumo de APIs.
- **TMDB API**: Fonte de dados sobre filmes.
- **Toastify**: Exibição de notificações.
- **CSS**: Estilização do projeto.

## 📦 Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nerdflix.git
   cd nerdflix
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure a API Key do TMDB:
   - Crie uma conta no [TMDB](https://www.themoviedb.org/).
   - Obtenha sua API Key.
   - Substitua a chave no arquivo `src/pages/Filme/index.js`:
     ```javascript
     api_key: "SUA_API_KEY_AQUI"
     ```

4. Execute o projeto:
   ```bash
   npm start
   ```

5. Acesse no navegador:
   ```
   http://localhost:3000
   ```

## 🌐 Deploy na Vercel

O projeto está hospedado na Vercel. Acesse o link abaixo para visualizar:
[https://nerdflix.vercel.app](https://nerd-flix-seven.vercel.app/)   

## 🖼️ Exemplo de Uso

1. Acesse a página inicial para visualizar os filmes populares.
2. Clique em um filme para ver mais detalhes.
3. Adicione filmes aos favoritos clicando no botão correspondente.
4. Acesse a página "Meus filmes" para gerenciar seus favoritos.

## 📝 Notas Importantes

- A função `render` foi removida do `ReactDOM` nas versões mais recentes (a partir do React 18). O código foi atualizado para usar `createRoot`:
  ```javascript
  import React from 'react';
  import { createRoot } from 'react-dom/client';
  import "./index.css";
  import App from './App';

  const root = createRoot(document.getElementById('root'));
  root.render(<App />);
  ```

## 🌐 API TMDB

Para utilizar a API do TMDB, você precisa de uma chave de API. Cole sua `api_key` no arquivo `src/components/Pages/Home/index.js`:
```javascript
const apiKey = 'SUA_API_KEY_AQUI';
```

## 📧 Contato

- **Autor**: Diogo Ataide Silva
- **Email**: diogo.ataidee@gmail.com
- **GitHub**: [github.com/diatsilva007](https://github.com/diatsilva007)