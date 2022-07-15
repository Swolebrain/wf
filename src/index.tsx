import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WFRouter from './WFRouter';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <WFRouter />
);

