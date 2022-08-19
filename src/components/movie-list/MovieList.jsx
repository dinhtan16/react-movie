import React,{useEffect,useState,useRef} from 'react'
import PropTypes from 'prop-types'

import './movieList.scss'


import {SwiperSlide,Swiper} from 'swiper/react'

import {Link} from 'react-router-dom'

import Button from '../button/Button'

import tmDbApi,{category} from '../../api/tmDbApi'
import apiConfig from '../../api/apiConfig'
import Moviecard from '../movieCard/Moviecard'

const MovieList = props => {
    const [items,setItems] = useState([])

    useEffect(() => {
        const getList = async () => {
            let respone = null;
            const params ={};
            if(props.type !== 'similar'){
                switch(props.category){
                    case category.movie:
                        respone = await tmDbApi.getMovieList(props.type,{params})
                    break;
                    default:
                        respone = await tmDbApi.getTvList(props.type,{params})
                }
            } else {
                respone = await tmDbApi.similar(props.category,props.id)
            }
            setItems(respone.results)
        }
        getList();
      
    },[])
   
  return (
    <div className='movie-list'>
        <Swiper
        
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={'auto'}
        autoplay={{delay:3000}}
        
        >
            {
                items.map((item,index) => (
                        <SwiperSlide key={index}>
                        {/* <h4 className='title'>{ item.title ? item.title : item.name
                        }</h4> */}
                        <Moviecard item={item} category={props.category} />
                        </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

MovieList.propTypes = {
   
    type : PropTypes.string.isRequired
}

export default MovieList