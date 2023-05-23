import React from "react"; 
import content from "../../content";
import { HashLink } from "react-router-hash-link";

function Footer() {
    return (
        <footer>
            {content.footer.footerText}
            {
                content.footer.footerLinks.map(link => {
                    return (
                        <HashLink smooth to={link.to} className="footerLink">
                            &nbsp;| {
                                link.title
                            }
                        </HashLink>
                    )
                })
            }
        </footer>
    )
}

export default Footer