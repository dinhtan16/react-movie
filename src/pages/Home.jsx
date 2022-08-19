import React from 'react';
import { OutlineButton } from '../components/button/Button';
import Heroslide from '../components/heroslide/Heroslide';
import {Link} from 'react-router-dom'
import MovieList from '../components/movie-list/MovieList'

import {category,movieType,tvType} from '../api/tmDbApi'
import '../App.scss'
const Home = () => {
    return (
    <>
        <Heroslide />
        <div className="container">
            <div className="seciton mb-3">
                <div className="section__header mb-2">
                    <h2> Trending Movies</h2>
                    <Link to='/movie'>
                        <OutlineButton className='small'> View more</OutlineButton>
                    </Link>
                </div>
            <MovieList category={category.movie} type={movieType.popular}/>

            </div>
            <div className="seciton mb-3">
                <div className="section__header mb-2">
                    <h2> Top Rating</h2>
                    <Link to='/tv'>
                        <OutlineButton className='small'> View more</OutlineButton>
                    </Link>
                </div>
            <MovieList category={tvType.movie} type={movieType.top_rated}/>

            </div>
            <div className="seciton mb-3">
                <div className="section__header mb-2">
                    <h2> Trending TVs</h2>
                    <Link to='/tv'>
                        <OutlineButton className='small'> View more</OutlineButton>
                    </Link>
                </div>
            <MovieList category={movieType.tv} type={tvType.popular}/>

            </div>

        </div>
    </>);
};

export default Home;
