import React, {useState} from 'react';
import "./AboutMixin.scss"
import "./About.scss"
import checkList from '../../img/checklist 2.svg'
import checkListTwo from '../../img/checklist 2 (1).svg'
import twoone from '../../img/2 1.png'
import bitcoin from "../../img/bitcoin 1.svg"
import Shape from "../../img/Shape.svg"
import lups from "../../img/5 1.svg"
import rightGL from "../../img/man-working-using-virtual-reality-4019408-3337377@0 1.png"
import rightGLL from "../../img/man-working-using-virtual-reality-4019408-3337377@0 1 (1).png"
import {FiArrowRight} from 'react-icons/fi'
const About = () => {
        const [isOpen, setIsOpen] = useState(false);
        const toggleModal = () => {
            setIsOpen(!isOpen);
        };

        return (
        <div id="About">
            <div className="container">
                <div className="About">
                    <h1 className="About-text-h1">Our Service</h1>
                    <p className="About-text-P">We turn information into actionable insights We work to understand your issues <br/>
                        and are driven to ask better questions in the pursuit of making work.</p>
                    <div className="About-Rectangle-Group">
                        <div className="About-Rectangle-Group-one">
                            <div className="img-Icon">
                                <img src={checkList} alt=""/>
                            </div>
                            <h1>Order Management</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur <br/>
                                the adipiscing elit. Sed quis accumsan nisi <br/>
                                Ut ut felis congue nisl hendrerit commodo.</p>
                            <button>Learn More<FiArrowRight/></button>
                            </div>
                           <div className="About-Rectangle-Group-Two">
                            <div className="img-Icon-one">
                                <img src={twoone} alt=""/>
                            </div>
                            <h1>Order Management</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur <br/>
                                the adipiscing elit. Sed quis accumsan nisi <br/>
                                Ut ut felis congue nisl hendrerit commodo.</p>
                            <button>Learn More<FiArrowRight/></button>
                            </div>
                            <div className="About-Rectangle-Group-Three">
                                <div className="img-Icon-two">
                                    <img src={bitcoin} alt=""/>
                                </div>
                                <h1>Order Management</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur <br/>
                                    the adipiscing elit. Sed quis accumsan nisi <br/>
                                    Ut ut felis congue nisl hendrerit commodo.</p>
                                <button onClick={toggleModal}>Узнать-Больще<FiArrowRight/></button>
                                {isOpen && (
                                    <div className="Modals">
                                        <div className="About-Rectangle-Group-Fo">
                                            <div className="img-Icon-three">
                                                <img src={checkListTwo} alt=""/>
                                            </div>
                                            <h1>Order Management</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur <br/>
                                                the adipiscing elit. Sed quis accumsan nisi <br/>
                                                Ut ut felis congue nisl hendrerit commodo.</p>
                                            <button>Learn More <FiArrowRight/></button>
                                        </div>
                                        <div className="About-Rectangle-Group-Fife">
                                            <div className="img-Icon-fo">
                                                <img src={Shape} alt=""/>
                                            </div>
                                            <h1>Order Management</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur <br/>
                                                the adipiscing elit. Sed quis accumsan nisi <br/>
                                                Ut ut felis congue nisl hendrerit commodo.</p>
                                            <button>Learn More <FiArrowRight/></button>
                                        </div>
                                        <div className="About-Rectangle-Group-Six">
                                            <div className="img-Icon-fife">
                                                <img src={lups} alt=""/>
                                            </div>
                                            <h1>Order Management</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur <br/>
                                                the adipiscing elit. Sed quis accumsan nisi <br/>
                                                Ut ut felis congue nisl hendrerit commodo.</p>
                                            <button>Learn More <FiArrowRight/></button>
                                        </div>
                                        <div onClick={toggleModal}>
                                            &times;
                                        </div>
                                    </div>
                                )}
                            </div>
                            </div>
                    <div className="About-global">
                        <div className="About-global-left">
                            <img src={rightGL} alt=""/>
                        </div>
                        <div className="About-global-Right">
                              <h1>We complete every projects <br/>
                                  extra care as customer need</h1>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, <br/>
                                non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe <br/>
                                scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore <br/>
                                eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, <br/>
                                error. Tempora odit laborum iure inventore possimus laboriosam qui nam. </p>

                            <button className="btn btn-outline-primary">Read more</button>
                        </div>
                    </div>
                    <div className="About-global">
                        <div className="About-global-Right">
                              <h1>We complete every projects <br/>
                                  extra care as customer need</h1>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, <br/>
                                non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe <br/>
                                scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore <br/>
                                eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, <br/>
                                error. Tempora odit laborum iure inventore possimus laboriosam qui nam. </p>

                            <button className="btn btn-outline-primary">Read more</button>
                        </div>
                        <div className="About-global-left">
                            <img src={rightGLL} alt=""/>
                        </div>
                    </div>
                        </div>
                    </div>
                    </div>
    );
};

export default About;