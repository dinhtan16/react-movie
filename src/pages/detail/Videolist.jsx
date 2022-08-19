import React, { useState, useEffect,useRef } from 'react';

import './Detail.scss';
import { useParams } from 'react-router';

import apiConfig from '../../api/apiConfig';
import tmvApi from '../../api/tmDbApi';

const Videolist = props => {
    const { category } = useParams();

    const [videos, setvideos] = useState([]);
    useEffect(() => {
        const getVideos = async () => {
            const res = await tmvApi.getVideos(category, props.id);
            setvideos(res.results.slice(0,3));
        };
        
        getVideos();
    }, [category,props.id]);
    
    return (
        <div>
            {videos.map((item,i) => (
                <Video item={item} key={i} />
            ))
            }
        </div>
    );
};

const Video = props => {
    
    
    const item = props.item;

    const iframeRef = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);
    

    return (
        <div className="video">
            <div className="video__title">
                <h2>{item.name}</h2>
            </div>
            <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                ref={iframeRef}
                width="70%"
                title="video"
            ></iframe>
        </div>
    )
};
export default Videolist;
