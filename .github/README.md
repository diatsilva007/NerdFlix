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

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.

## 🌐 API TMDB

Para utilizar a API do TMDB, você precisa de uma chave de API. Cole sua `api_key` no arquivo `src/components/Pages/Home/index.js`:
```javascript
const apiKey = 'SUA_API_KEY_AQUI';
```

## 📧 Contato

- **Autor**: Diogo Ataide Silva
- **Email**: diogo.ataidee@gmail.com
- **GitHub**: [github.com/diatsilva007](https://github.com/diatsilva007)