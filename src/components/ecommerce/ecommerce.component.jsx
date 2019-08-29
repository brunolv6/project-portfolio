import React from 'react';

import './ecommerce.style.scss'
import ecommerceImage from '../../assets/ecommerce.png';
import herokuLogo from '../../assets/heroku.svg';
import firebaseLogo from '../../assets/firebase.svg';
import stripeLogo from '../../assets/stripe.svg';
import reduxLogo from '../../assets/redux.svg';
import reactLogo from '../../assets/react.svg';

import { Descricao } from '../descricao/descricao.component'

const logos = [
    {
        id: 1,
        logomarca: reactLogo
    },
    {
        id: 2,
        logomarca: reduxLogo
    },
    {
        id: 3,
        logomarca: firebaseLogo
    },
    {
        id: 4,
        logomarca: herokuLogo
    },
    {
        id: 5,
        logomarca: stripeLogo
    }
]

export const Ecommerce = () => (
    <div className='ecommerce'>
        <div className='apresentacao-ecommerce'>
            <Descricao
                className='descricao' 
                nome='Ecommerce' 
                texto='Projeto pessoal de criação de um ecommerce de moda do layout ao deploy visando um código limpo, claro, organizado e com otima performance'
            />
            <img 
                className='imagem'
                src={ecommerceImage} 
                alt='ecommerce'
            />
        </div>
        <div className='ferramentas'>
            {
                logos.map(logo => (
                    <img 
                        key={logo.id}
                        className='logo'
                        src={logo.logomarca} 
                        alt='logo'
                    />        
                ))
            }
        </div>
        <a href='https://bruno-ecommerce-live.herokuapp.com/' rel="noopener noreferrer" target="_blank"><button className='botao'>Entre</button></a>
    </div>
)
