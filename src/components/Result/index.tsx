import { useEffect, useState } from 'react'
import './style.css'

const Result = () => {
    const [result, setResult] = useState([])
  
    return(
        <div className='result-centralize'>
            <h1 className='result-title'>Você receberá</h1>
            {result.length === 0 ? (
                <ul className='result-ul'>
                    <li className='result-li'>Amanhã: 0,00</li>
                    <li className='result-li'>Em 15 dias: 0,00</li>
                    <li className='result-li'>Em 30 dias: 0,00</li>
                    <li className='result-li'>Em 90 dias: 0,00</li>
                </ul>
            ) : (
                <ul className='result-ul'>
                    <li className='result-li'>Amanhã: {result[1]}</li>
                    <li className='result-li'>Em 15 dias:{result[15]}</li>
                    <li className='result-li'>Em 30 dias:{result[30]}</li>
                    <li className='result-li'>Em 90 dias:{result[90]}</li>
                </ul>
            )}
        </div>
    )
}

export default Result