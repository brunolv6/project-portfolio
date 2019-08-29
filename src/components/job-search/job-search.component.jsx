import React from 'react';

import './job-search.style.scss';
import jobSearchImage from '../../assets/job.png';
import herokuLogo from '../../assets/heroku.svg';
import reduxLogo from '../../assets/redux.svg';
import reactLogo from '../../assets/react.svg';
import nodeLogo from '../../assets/node.svg';

import { Descricao } from '../descricao/descricao.component'

const logos = [
    {
        id: 1,
        logomarca: nodeLogo
    },
    {
        id: 2,
        logomarca: reactLogo
    },
    {
        id: 3,
        logomarca: reduxLogo
    },
    {
        id: 4,
        logomarca: herokuLogo
    }
]

export const JobSearch = () => (
    <div className='job-search'>
        <div className='apresentacao-job-search'>
            <Descricao
                className='descricao' 
                nome='Job Search' 
                texto='Desenvolvimento de API de webscrapping em NodeJS que busca vagas em startups como iFood, Sympla, Wavy por área, e além disto faz busca específica no site vagas.com. Site responsivo com design simples e claro.'
            />
            <img 
                className='imagem'
                src={jobSearchImage} 
                alt='job-search'
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