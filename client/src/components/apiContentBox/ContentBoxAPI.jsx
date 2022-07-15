import React from 'react'
import "./contentBoxApi.css"


const ContentBoxAPI = ({ image, name, url }) => {
    return (
        <div className="source_box">
            <img src={image[4]["#text"]} alt="" />
            <div className="art_name">
                {name}
            </div>
            <a href={url} target="_blank" rel="noreferrer" className="the_link">
                <i className="fa-solid fa-music"></i>
                {/* <img src={loadingImg} alt="" /> */}
            </a>
        </div>
    )
}

export default ContentBoxAPI
