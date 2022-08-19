import React,{useState,useEffect} from 'react'

import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import apiConfig from '../../api/apiConfig'
import tmvApi from '../../api/tmDbApi'
import './Detail.scss'
const CastList = props => {

    const {category} = useParams()

    const [casts,setCasts] = useState([])

    useEffect(() => {
        const getCast = async () => {
            const res = await tmvApi.credit(category,props.id)
            setCasts(res.cast.slice(0,5))

         
        }
        getCast()
  
    }, [category,props.id]);
  return (
    <div className='casts'>
        {
            casts.map((cast,index) => (
                <div key={index} className="cast__item">
                    <div className="cast__item__img"
                    style={{backgroundImage:`url(${apiConfig.w500Image(cast.profile_path)})`}}
                    >
                    </div>
                   <p className="cast__item__name"><a href={`https://www.wikipedia.org/wiki/${cast.name.replace(/\s/g, ' ')}` }target='blank'>{cast.name}</a></p>
                </div>
            ))
        }
    </div>
  )
}

export default CastList