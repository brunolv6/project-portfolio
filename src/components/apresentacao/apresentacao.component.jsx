import React from 'react';

import './apresentacao.style.scss';
//tem que estar fora de conchetes
import fotoPessoal from '../../assets/fotoPessoal.jpg';

import { Links } from '../links/links.components'

export const Apresentacao = () => (
    <div className='apresentacao'>
        <div className='circulo-foto'>
            <div
                className='foto-pessoal'
                style={{
                    backgroundImage: `url(${fotoPessoal})`
                }}
            />
        </div>
        <div className='nome'>Bruno Valle</div>
        <div className='profissao'>Desenvolvedor Front-End</div>
        <Links/>
    </div>
)