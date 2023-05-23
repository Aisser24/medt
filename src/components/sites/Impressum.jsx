import React from "react";
import content from "../../../content";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { nanoid } from "nanoid";

function Impressum() {
    return (
        <>
            <Navbar />
                <div className="mainWrapper">
                    <div className="imprWrapper">
                        <section className="owner">
                            {
                                content.impressum.owner
                            }
                        </section>
                        <section className="privacy-policy" id="privacy-policy">
                            <h2>{content.impressum.privacyPolicy.header}</h2>
                            <p>{content.impressum.privacyPolicy.desc}</p>
                            <ul>
                                {
                                    content.impressum.privacyPolicy.policyItems.map(item => {
                                        return (
                                            <li key={nanoid()}>
                                                <h3>{item.title}</h3>
                                                <p>{item.content}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <p>{content.impressum.privacyPolicy.agreement}</p>
                        </section>
                        <section className="tos" id="tos">
                            <h2>{content.impressum.termsOfService.header}</h2>
                            <p>{content.impressum.termsOfService.desc}</p>
                            <ol>
                                {
                                    content.impressum.termsOfService.terms.map(term => {
                                        return (
                                            <li>
                                                <h3>{term.title}</h3>
                                                {
                                                    term.content.length > 1 ?
                                                        (
                                                            <ol>
                                                            {
                                                                term.content.map(contentItem => (
                                                                <li key={nanoid()}>{contentItem}</li>
                                                            ))
                                                            }
                                                            </ol>
                                                        )
                                                        :
                                                        term.content[0]
                                                }
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                            <p>{content.impressum.termsOfService.postDesc}</p>
                        </section>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default Impressum