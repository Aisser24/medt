import React, { useState } from "react";
import { Link } from "react-router-dom";
import content from "../../content";

function Navbar({ site }) {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    const navLinks = content.navbar.links.map((navLink, index) => {
        return <li key={index}>
            <Link to={navLink.target} style={site === navLink.target ? {color: "#2F82FF", fontWeight: "bold"} : {}}>{navLink.text}</Link>
        </li>
    })

    const style = {
        display: hamburgerOpen ? "block" : "none"
    }

    function hamClicked() {
        setHamburgerOpen(prevHamburgerOpen => !prevHamburgerOpen)
    }

    return (
        <header>
            <Link to={"/"}>
                {
                    content.navbar.logo
                }
            </Link>
            <nav>
                <ul className="desktop--ul">
                    {
                        navLinks
                    }
                </ul>

                <div className="hamburger hamburger--icon">
                    <div className="ham" onClick={hamClicked}>
                        {
                            hamburgerOpen ? content.navbar.hamburgerOpen : content.navbar.hamburgerClosed
                        }
                    </div>
                    <div className="hamburger--links" style={style}>
                        <ul>
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar