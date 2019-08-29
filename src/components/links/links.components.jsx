import React from 'react';

import './links.style.scss'

import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'

export const Links = ({ white }) => {
    return(
        <div className='links'>
            <a href='https://github.com/brunolv6' rel="noopener noreferrer" target="_blank">
                <img 
                    className={
                        `${white? 'filtro-branco': ''}  
                        links-item`
                    } 
                    src={github} 
                    alt='github-logo'/>
            </a>
            <a href='https://www.linkedin.com/in/bruno-leme-valle-6blv/' rel="noopener noreferrer" target="_blank">
                <img 
                    className={
                        `${white? 'filtro-branco': ''}  
                        links-item`
                    } 
                    src={linkedin} 
                    alt='linkedin-logo'/>
            </a>
        </div>
    )
}