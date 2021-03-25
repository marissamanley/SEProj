import React, { useState, useEffect } from 'react'
import './DiscordWidget.css'

function Discord() {
    return (
        <div className = "widget">
            <iframe 
                src="https://discord.com/widget?id=502612814310146048&theme=dark" 
                width="300" 
                height="450"
                // allowTransparency="true"
                frameBorder="0" 
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">    
            </iframe>
        </div>
    )
}

export default Discord