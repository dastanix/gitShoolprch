import React from 'react';
import "./Main.scss"
import chel from '../../img/chel1.svg'
import icon from '../../img/Icon.svg'
const About2 = () => {
    return (
        <div id="Main">
            <div className="container">
                <div className="Main">
                    <h1>Met Our Team</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis <br/>
                        accumsan nisi Ut ut felis congue nisl hendrerit commodo.
                    </p>
                    <div className="Main-Gl">
                        <div className="Main-Gl-one">
                            <img style={{paddingLeft:"0.5rem"}} src={chel} alt=""/>
                            <h3>Sunny Khan</h3>
                            <h4>Executive officer</h4>
                            <img style={{paddingLeft:"1rem"}} src={icon} alt=""/>
                        </div>
                        <div className="Main-Gl-one">
                            <img style={{paddingLeft:"0.5rem"}} src={chel} alt=""/>
                            <h3>Sunny Khan</h3>
                            <h4>Executive officer</h4>
                            <img style={{paddingLeft:"1rem"}}  src={icon} alt=""/>
                        </div>
                        <div className="Main-Gl-one">
                            <img style={{paddingLeft:"0.5rem"}} src={chel} alt=""/>
                            <h3>Sunny Khan</h3>
                            <h4>Executive officer</h4>
                            <img style={{paddingLeft:"1rem"}}  src={icon} alt=""/>
                        </div>
                        <div className="Main-Gl-one">
                            <img style={{paddingLeft:"0.5rem"}} src={chel} alt=""/>
                            <h3>Sunny Khan</h3>
                            <h4>Executive officer</h4>
                            <img style={{paddingLeft:"1rem"}}  src={icon} alt=""/>
                        </div>
                        </div>
                    <div className="Main-input">
                        <h1>Subscribe to get the Latest News</h1>
                        <p>We recommended you to subscribe to our newspaper,drop your email below to get daily update about us</p>
                        <div>

                            <form>
                                <label htmlFor="default-search"
                                       className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                             fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="round" strokeLinecap="round" strokeWidth="2"
                                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search"
                                           className="inp pl-2  block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="Search Mockups, Logos..." required/>
                                        <button type="submit"
                                                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search
                                        </button>
                                </div>
                            </form>
</div>
                            </div>
                            </div>
            </div>
        </div>
    );
};

export default About2;