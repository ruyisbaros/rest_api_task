import React from 'react'
import "../apiContentBox/contentBoxApi.css"

const ContentBoxLocal = ({ image, artistName, url }) => {
    return (
        <div className="source_box">

            <img src={image} alt="" />
            <div className="art_name">
                {artistName}
            </div>
            <a href={url} target="_blank" rel="noreferrer" className="the_link">
                <i className="fa-solid fa-music"></i>
                {/* <img src={loadingImg} alt="" /> */}
            </a>
        </div>
    )
}

export default ContentBoxLocal
