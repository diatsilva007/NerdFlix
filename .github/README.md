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