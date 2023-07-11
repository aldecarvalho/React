import React from 'react';
import ReactDom from 'react-dom/client';

const myFirstElement = <h1>Olá, to aqui ainda... ;)</h1>

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(myFirstElement);