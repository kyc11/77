// DC 에러 페이지 JS
import React from "react";
import isrc from "./Imgsrc";

const Error = () => {
    return(
        <>
            <h2>Error 페이지</h2>
            <img src={isrc.error} />
        </>
    )
};

export default Error;