import React, { useState, useEffect } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import './EventTemplate.css'


function EventTemplate() {
    return (
        <div className="app">
            <div className="EventTemp">
                <Header/>
                <div className="container">
                    <Sidebar/>
                    <div className="contents">
                        <div className="title">
                            <h1>Create an Event</h1>
                        </div>
                        <main className="EventTemplate">
                            <form>
                                <h2>    
                                    Event Title
                                </h2>
                                <input className = "title" type ="text"/>

                                <h2>    
                                    Date
                                </h2>
                                <input className = "date" type ="date"/>

                                <h2>    
                                    Location
                                </h2>
                                <input className="location" type ="text"/>

                                <h2>    
                                    Game(s)
                                </h2>
                                <input className="games" type ="text"/>

                                <h2>    
                                    Discord Link (Optional)
                                </h2>
                                <input className="discord" type ="text"/>

                                <h2>    
                                    Description
                                </h2>
                                <textarea className="description"/>

                                <button className="submit">Submit</button>
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventTemplate