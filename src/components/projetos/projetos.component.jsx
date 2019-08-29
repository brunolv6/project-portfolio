import React from 'react';

import './projetos.style.scss'

import { Ecommerce } from '../ecommerce/ecommerce.component'
import { JobSearch } from '../job-search/job-search.component'

export const Projetos = () => (
    <div className='projetos'>
        <div className='gradiente1'></div>
        <div style={{backgroundColor:'black'}}>
            <Ecommerce/>
        </div>
        <div className='gradiente2'></div>
        <div style={{backgroundColor:'white'}}>
            <JobSearch/>
        </div>
        <div className='gradiente1'></div>
    </div>
)