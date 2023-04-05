import React from 'react';
import "./Hero.scss"
import HI from "../../img/Hero-img.png"
import { BsPlayCircle } from 'react-icons/bs'
const Hero = () => {
    return (
            <div id="Hero">
                <div className="container">
                    <div className="Hero">
                <div className="Hero-left">
                    <h1>Virtual Reality <br/>
                        Business Solutions</h1>
                    <p>We have over 15 year exprience in business consultting arena. We have <br/>
                        over 15 year exprience in business consultting arena and artficial intelligence.
                    </p>
                    <div className="Hero--btn">
                        <div className="Hero--btn--one">
                            <button type="button"
                                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Join Us
                            </button>

                        </div>
                        <div>
                            <button className="Hero--btn--two">
                                 <BsPlayCircle className="text-3xl"/> <h2>Watch video</h2>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Hero-right">
                    <img src={HI} alt=""/>
                </div>
            </div>
                </div>
        </div>
    );
};

export default Hero;