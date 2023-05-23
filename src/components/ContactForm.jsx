import React, { useState } from "react";
import content from "../../content";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        mail: "",
        emailContent: ""
    })

    function handleChange(event) {
        //todo: fix form data handling
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return (
        <section className="contact" id="contact">
            <form action={`mailto:jonathanguger@gmail.com?subject=${formData.name}&body=${formData.emailContent}`}>
                <fieldset>
                    <legend>Get in Contact</legend>

                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <br />
                    <input 
                        type="email"
                        name="mail"
                        value={formData.mail}
                        placeholder="Email"
                        onChange={handleChange}
                    />
                    <br />
                    <textarea 
                        name="emailContent"
                        id="content"
                        placeholder="Nachricht"
                        cols="30"
                        rows="10"
                        value={formData.emailContent}
                        onChange={handleChange}
                    ></textarea>
                    <br />
                    <button type="submit" className="btn">Send Email</button>
                </fieldset>
            </form>
            <div className="svg">
                {
                    content.home.contactSection.svg
                }
            </div>
        </section>
    )
}

export default ContactForm