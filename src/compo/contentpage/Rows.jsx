import React from 'react';
import MovieBox from './MovieBox';
import "./Rows.css"

const Rows = (props) => {
    return (
        <div className='row'>
            <h3>{props.typeOfContent} </h3>
            <MovieBox/>
            <MovieBox/>
            <MovieBox/>
            <MovieBox/>
            <MovieBox/>

        </div>
    );
}

export default Rows;
