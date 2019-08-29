import React from 'react';

import './imagem.style.scss';

import foto from '../../assets/eu1.jpg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import ecommerce from '../../assets/ecommerce.png';
import jobSearch from '../../assets/job.png';

const Imagem = props => {
    return (
        <div>
            <div className="apresentacao">
                <div className='circle'>
                    <div
                    className='imagem'
                    style={{
                        backgroundImage: `url(${foto})`
                    }}      
                    />
                </div>
                <div className='name'><strong>Bruno Valle</strong></div>
                <div className='profissao'>Desenvolvedor Front-End</div>
                <div className='formas-contato'>
                    <a href='https://github.com/brunolv6' rel="noopener noreferrer" target="_blank" className='logo-info'><img src={github} alt='github-acesso' className='logos'/></a>
                    <a href="https://www.linkedin.com/in/bruno-leme-valle-6blv/" rel="noopener noreferrer" target="_blank" className='logo-info'><img src={linkedin} alt='github-acesso' className='logos'/></a>
                </div>            
            </div>
            <div className='gradient'></div>
            <div className='teste'>
                    <img className='ecommerce' src={ecommerce} alt='projeto1' />
            </div>
            <div className='gradient2'></div>
            <div className='teste2'>
                    <img className='jobsearch' src={jobSearch} alt='projeto1' />
            </div>
            <div className='gradient3'></div>
            <div className='footer'></div>
        </div>
    );
};

export default Imagem;