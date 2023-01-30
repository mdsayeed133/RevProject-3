import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-container container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5 className="subheader">Team Members</h5>
                        </div>
                        <div className="col-md-4">
                            <div className="tech-stack">
                                <h5 className="subheader">Technology Used</h5>
                                <ul>
                                    <li>Spring</li>
                                    <li>Bootstrap</li>
                                    <li>React</li>
                                    <li>TSX</li>
                                    <li>AWS</li>
                                    <li>PostgreSQL</li>
                                    <li>Maven</li>
                                    <li>Java</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="socials-stack">
                                <h5 className="subheader">Socials</h5>
                                <ul>
                                    <li>Facebook/Meta</li>
                                    <li>Reddit</li>
                                    <li>Discord</li>
                                    <li>Instagram</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer