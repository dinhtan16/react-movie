import React from 'react'

import './Moviecard.scss'

import {Link} from 'react-router-dom'
import apiConfig from '../../api/apiConfig'
import Button from '../button/Button'
import { category } from '../../api/tmDbApi'

const Moviecard = props => {

    const item = props.item
    const link ='/' + category[props.category] + '/' + item.id
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path)

  return (
    <Link to={link}>
        <div className="movie-card" style={{backgroundImage:`url(${bg})`}}>
            <Button>
                <i className="bx bx-play"></i>
            </Button>
        </div>
        <h3>{ item.title ? item.title : item.name}</h3>
    </Link>
  )
}



export default Moviecard