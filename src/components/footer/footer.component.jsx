import React from 'react'

import './footer.style.scss';

import { Links } from '../links/links.components'

export const Footer = () => (
    <div className='footer'>
        <div className='pergunta'>Quer me contratar ou bater um papo sobre um projeto seu?</div>
        <div className='contato'>Entre em contato</div>
        <Links white/>
    </div>
)