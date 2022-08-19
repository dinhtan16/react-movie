import React from 'react';
import { useParams } from 'react-router';

import {category as cate} from '../api/tmDbApi'
import Pageheader from '../components/page-header/Pageheader';

import MovieGrid from '../components/MovieGrid/MovieGrid'
const Catalog = () => {
    const {category} = useParams()
    return <>
        <Pageheader >
            {category === cate.movie ? 'Movie DT' : 'Tv'}
        </Pageheader>
        <div className="container">
            <div className="sectione mb-3">
                <MovieGrid category={category}/>
            </div>
        </div>
    </>;
};

export default Catalog;
