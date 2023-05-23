import React from "react";
import Flickity from "react-flickity-component";
import content from "../../content";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

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
                        const style = {
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, .9)), url("${item.image}")`,
                                backgroundRepeat: "noRepeat",
                                backgroundAttatchment: "fixed",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                        }

                        return (
                            <div key={nanoid()} className="slider--container">
                                <div className="heroImage" style={style}>
                                    <h2 className="slider--header"><Link to={item.target}>{item.title}</Link></h2>
                                </div>
                                {/* <img src={item.image} alt={item.alt} /> */}
                            </div>
                        )
                     })
                }
            </Flickity>
        </div>
    )
}

export default Hero