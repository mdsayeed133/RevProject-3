import React from 'react'
import '../Footer/Footer.css'
import { SiApachemaven, SiBootstrap, SiJava, SiPostgresql, SiPython, SiSpring, SiTypescript } from 'react-icons/si'
import {TbBrandMeta} from 'react-icons/tb'
import { FaAws, FaDiscord, FaReact, FaTelegramPlane } from 'react-icons/fa'
import { BsReddit } from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-container container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5 className="subheader">Team Members</h5>
                            <ul>
                                <li>Zackery</li>
                                <li>Mohammed</li>
                                <li>Johannes</li>
                                <li>Mason</li>
                                <li>Daniel</li>
                                <li>Fatimat</li>
                                <li>Keitron</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <div className="tech-stack">
                                <h5 className="subheader">Technology Used</h5>
                                <div className="icon-list">
                                    <a href="https://getbootstrap.com/" target="blank"><SiBootstrap size="2em" className="icons" /></a>
                                    <a href="https://aws.amazon.com/" target="blank"><FaAws size="2em" className="icons" /></a>
                                    <a href="https://reactjs.org/" target="blank"><FaReact size="2em" className="icons" /></a>
                                    <a href="https://spring.io/projects/spring-framework" target="blank"><SiSpring size="2em" className="icons" /></a>
                                    <a href="https://www.typescriptlang.org/" target="blank"><SiTypescript size="2em" className="icons" /></a>
                                    <a href="https://www.postgresql.org/" target="blank"><SiPostgresql size="2em" className="icons" /></a>
                                    <a href="https://www.python.org/" target="blank"><SiPython size="2em" className="icons" /></a>
                                    <a href="https://www.oracle.com/java/"><SiJava size="2em" className="icons"/></a>
                                    <a href="https://mvnrepository.com/artifact/org.apache.maven.plugins/maven-dependency-plugin"><SiApachemaven size="2em" className="icons"/></a>
                                    {/* junit? */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="socials-stack">
                                <h5 className="subheader">Socials</h5>
                                <ul>
                                    <TbBrandMeta/>
                                    <li><TbBrandMeta size="2em"/></li>
                                    <li><BsReddit size="2em"/></li>
                                    <li><FaDiscord size="2em"/></li>
                                    <li><FaTelegramPlane size="2em"/></li>
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