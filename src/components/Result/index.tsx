import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataContext'
import './style.css'

const Result = () => {
    const resultForm = useContext(DataContext)

    useEffect(() => {}, [resultForm.result])
  
    return(
        <div className='result-centralize'>
            <h1 className='result-title'>Você receberá</h1>
            {resultForm.length === 0 ? (
                <ul className='result-ul'>
                    <li className='result-li'>Amanhã: 0,00</li>
                    <li className='result-li'>Em 15 dias: 0,00</li>
                    <li className='result-li'>Em 30 dias: 0,00</li>
                    <li className='result-li'>Em 90 dias: 0,00</li>
                </ul>
            ) : (
                <ul className='result-ul'>
                    <li className='result-li'>Amanhã: {resultForm.result[1]}</li>
                    <li className='result-li'>Em 15 dias:{resultForm.result[15]}</li>
                    <li className='result-li'>Em 30 dias:{resultForm.result[30]}</li>
                    <li className='result-li'>Em 90 dias:{resultForm.result[90]}</li>
                </ul>
            )}
        </div>
    )
}

export default Result