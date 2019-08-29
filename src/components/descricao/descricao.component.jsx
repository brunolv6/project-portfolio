import React from 'react';

import './descricao.style.scss';

export const Descricao = ({ nome, texto }) => (
    <div className='descricao'>
        <div className='nome'>{nome}</div>    
        <div className='texto'>{texto}</div>    
    </div>
)