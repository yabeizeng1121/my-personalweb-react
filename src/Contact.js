import React, { useEffect } from 'react';
import './Contact.css';
import HomeIcon from './HomeIcon';
import HamburgerIcon from './HamburgerIcon';

function Contact() {
    useEffect(() => {
        // Any side effects or data fetching can be handled here if needed
    }, []);

    return (
        <div className="contact-container">
            <HomeIcon />
            <HamburgerIcon />
            <main className="contact-profile">
                <div className="contact-profile-bg"></div>
                <section className="contact-container-row">
                    <aside className="contact-profile-image">
                    </aside>
                    <section className="contact-profile-info">
                        <h1 className="contact-h1-first-name">Yabei</h1>
                        <h1 className="contact-h1-second-name">Zeng</h1>
                        <p>
                        Hello, I'm Yabei, a data science student 🎓 at Duke University; passionate about uncovering insights and solving problems with data 📊 Excited to connect and create something amazing together! 🚀 Let's dive in!
                        </p>
                        <aside className="contact-social-media-icons">
                            <a href="mailto:yz856@duke.edu" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-envelope"></i> {/* Email icon */}
                            </a>
                            <a href="https://www.linkedin.com/in/yabei-zeng/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i> {/* LinkedIn icon */}
                            </a>
                            <a href="https://github.com/yabeizeng1121" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i> {/* GitHub icon */}
                            </a>
                            <a href="https://gitlab.com/users/yabeizeng1121/projects" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-gitlab"></i> {/* GitLab icon */}
                            </a>
                        </aside>
                    </section>
                </section>
                <button className="contact-icon contact-close"></button>
            </main>
        </div>
    );
}

export default Contact;
