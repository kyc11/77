// DC 무비스 페이지 JS
import React from "react";
import isrc from "./Imgsrc";

const MOVIES = () => {
    return(
        <>
            <h2>MOVIES 페이지</h2>
            <img src={isrc.movies} />
        </>
    )
};

export default MOVIES;