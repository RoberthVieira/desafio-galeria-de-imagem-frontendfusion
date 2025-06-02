# Desafio de Galeria de Imagens - Processo Seletivo Frontend Fusion

Este projeto é uma **galeria de imagens responsiva**, desenvolvida em React, com carrossel horizontal, sistema de favoritos e exibição de informações das imagens. As imagens são consumidas via API pública do [Picsum Photos](https://picsum.photos/).

## 🛠️ Tecnologias Utilizadas

- **React** (Vite)
- **JavaScript (ES6+)**
- **CSS Modules**
- **Google Fonts** (Roboto e Merriweather)
- **React Icons**
- **Fetch API**

## 🎯 Funcionalidades

- ✅ Carrossel horizontal de imagens.
- ✅ Botões para avançar e retroceder no carrossel.
- ✅ Marcar e desmarcar imagens como favoritas.
- ✅ Exibir informações da imagem selecionada (autor e resolução).
- ✅ Animação com `@keyframes` para o cabeçalho.
- ✅ Responsividade para diversos tamanhos de tela.

## 🖼️ Estrutura de Componentes

src/
├── App.jsx
├── index.css
├── main.jsx
├── contexts/
│ └── FavoritoContext.jsx
├── pages/
│ └── Galeria.jsx
├── components/
│ ├── Button/
│ │ ├── ArrowBtn.jsx
│ │ └── ArrowBtn.module.css
│ ├── ButtonsImg/
│ │ ├── ButtonsImg.jsx
│ │ └── ButtonsImg.module.css
│ ├── Footer/
│ │ ├── Footer.jsx
│ │ └── Footer.module.css
│ ├── GaleriaImg/
│ │ ├── GaleriaImg.jsx
│ │ └── GaleriaImg.module.css
│ └── Header/
│ ├── Header.jsx
│ └── Header.module.css
├── services/
│ └── fetchPicsum.js

## 🚀 Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/RoberthVieira/desafio-galeria-de-imagem-frontendfusion
npm install
npm run dev
```

## 🧠 Aprendizados

- ✅ Manipulação de estado com Context API para favoritos.
- ✅ Consumo de APIs públicas com fetch.
- ✅ Implementação de carrossel com translateX e useRef.
- ✅ Estilização modular com CSS Modules.
- ✅ Responsividade e boas práticas de UI/UX.

```bash
Demo: https://desafio-galeria-de-imagem-frontendf-rho.vercel.app/
```

Desenvolvido por Roberth Vieira 🚀