import React from "react";
import Flickity from "react-flickity-component";
import content from "../../content";
import { Link } from "react-router-dom";

const flickityOptions = {
    initialIndex: 0,
    autoPlay: 5000,
    wrapAround: true,
    pauseAutoPlayOnHover: false,
    pageDots: false
}

function Hero() {
    return (
        <div className="hero">
            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions}
                
            >
                {
                     content.home.heroSection.map((item, index) => {
                        return (
                            <div key={index} className="slider--container">
                                <h2 className="slider--header"><Link to={item.target}>{item.title}</Link></h2>
                                <img src={item.image} alt={item.alt} />
                            </div>
                        )
                     })
                }
            </Flickity>
        </div>
    )
}

export default Hero