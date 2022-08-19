import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import './Detail.scss';

import tmvApi from '../../api/tmDbApi';
import apiConfig from '../../api/apiConfig';
import CastList from './CastList';
import Videolist from './Videolist'
import MovieList from '../../components/movie-list/MovieList'
const Detail = () => {
    const { category, id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const respone = await tmvApi.detail(category, id, { params: {} });
            setItem(respone);
            window.scrollTo(0, 0);
        };

        getDetail();
    }, [category, id]);

    return (
        <>
            {item && (
                <>
                    <div
                        className="banner"
                        style={{
                            backgroundImage: `url(${apiConfig.orginalImage(item.backdrop_path || item.poster_path)})`,
                        }}
                    ></div>
                    <div className="movie-content container mb-3">
                        <div className="movie-content__poster">
                            <div
                                className="movie-content__poster__img"
                                style={{
                                    backgroundImage: `url(${apiConfig.w500Image(
                                        item.poster_path || item.backdrop_path,
                                    )})`,
                                }}
                            ></div>
                        </div>
                        <div className="movie-content__info">
                            <div className="title">{item.title}</div>
                            <div className="genre">
                                {item.genres &&
                                    item.genres.slice(0, 5).map((genre, index) => (
                                        <span key={index} className="genre__item">
                                            {genre.name}
                                        </span>
                                    ))}
                            </div>
                            <div className="overview">
                                {item.overview}
                                <div className="cast">
                                    <div className="section__header__cast">
                                        <h2>Cast</h2>
                                    </div>
                                    {/* CastList */}
                                    <CastList id={item.id} />
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="container">
                          <div className="section mb-3">
                            <Videolist id={item.id} />
                          </div>
                          <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>Similar</h2>
                                </div>
                                <MovieList category={category} type="popular" id={item.id}/>
                            </div>
                        </div>
                </>
            )}
        </>
    );
};

export default Detail;
