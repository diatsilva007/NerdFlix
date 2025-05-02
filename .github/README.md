# Error de renderização na página index.js
> A função render foi removida do ReactDOM nas versões mais recentes (a partir do React 18).
## Solução: Atualize o código para usar createRoot:

index.js
```
import React from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

## API TMDB

Cole sua api_key em src/components/pages/home/index.js.

Ex:
```
a5e650f8a5db40ebb4845514a0d940a3
```