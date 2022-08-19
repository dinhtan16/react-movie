import React,{useCallback, useEffect,useState,useRef} from 'react'
import { useParams } from 'react-router'
import './MovieGrid.scss'
import { useHistory } from 'react-router-dom'

import MovieCard from '../movieCard/Moviecard'
import Button, { OutlineButton } from '../button/Button'
import Input from '../input/input'

import tmvApi, { category, movieType, tvType } from '../../api/tmDbApi'
const MovieGrid = props => {

  const [items,setItems] = useState([])

  const [page,setPage] = useState(1)
  const [totalPage,setTotalPage] = useState(0)

  const {keyword} = useParams();

  useEffect(() => {
     const getList = async () => {
      let respone = null ;
      if (keyword === undefined){
          const params = {}

          switch(props.category){
            case category.movie:
              respone = await tmvApi.getMovieList(movieType.popular,{params})
              break;
            default:
              respone = await tmvApi.getTvList(tvType.popular,{params})
          }
      }else {
        const params ={
            query :keyword
        }
        respone = await tmvApi.search(props.category,{params})
      }
      setItems(respone.results)
      setTotalPage(respone.total_pages)
     }
     getList()
  },[props.category,keyword])


  const loadMore =async () =>{
    let respone = null ;
    if (keyword === undefined){
        const params = {
          page : page + 1
        }

        switch(props.category){
          case category.movie:
            respone = await tmvApi.getMovieList(movieType.popular,{params})
            break;
          default:
            respone = await tmvApi.getTvList(tvType.popular,{params})
        }
    }else {
      const params ={
        page : page + 1,
          query :keyword
      }
      respone = await tmvApi.search(props.category,{params})
    }
    setItems([...items,...respone.results])
    setPage(page + 1)
    console.log(page)
   }
  
  return (
    <>
    <div className="section mb-3">
      <MovieSearch category={props.category} keyword={keyword}/>
    </div>
      <div className='movie-grid'>
          {
            items.map ((item,index) => (
              <MovieCard  category={props.category} key={index} item={item}/>
            ))
          }
      </div>
      {
        page < totalPage ?
         (
          <div className="movie-grid__loadmore">
              <OutlineButton className='small'  onClick={loadMore}>Load More</OutlineButton>
          </div>
         ) : null
        
      }
    </>
  )
}

const MovieSearch = props =>{

  const history = useHistory();
  const [keyword,setKeyword] = useState(props.keyword ? props.keyword : '')

  const inputRef = useRef()

  const goToSearch = useCallback(() => {
    if(keyword.trim().length > 0){
      history.push(`/${category[props.category]}/search/${keyword}`)
    }
  },[keyword,props.category,history])
  useEffect(()=>{
    const enterEvent = (e) => {
      e.preventDefault()
      if(e.keyCode === 13){
        goToSearch()
      setKeyword('')

      }
      inputRef.current.focus()

    }
    document.addEventListener('keyup',enterEvent)

    return () => {
    document.removeEventListener('keyup',enterEvent)

    }
  },[keyword,goToSearch])
  return (
    <>
      <div className="movie-search" ref={inputRef}>
        <Input  type='text' placeholder='Enter keyword' 
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        />
      <Button className='small' onClick={goToSearch}>Search</Button>
      </div>
    </>
    
  )
}

export default MovieGrid