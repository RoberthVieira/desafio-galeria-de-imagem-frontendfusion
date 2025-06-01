import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { FavoriteImagesProvider } from './contexts/FavoritoContext.jsx';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FavoriteImagesProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FavoriteImagesProvider>
)
