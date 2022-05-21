import React from "react"
import Palette from "../style/Palette"

const palette = new Palette()

function ProgressBar({ bgcolor, progress, height }) {

    const bar = {
        marginBottom: '30px'
    }

    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: palette.WhiteSmoke.color,
        borderRadius: 40,
    }
      
    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        textAlign: 'right'
    }
              
    return (
        <div style={bar}>
            <div style={Parentdiv}>
                <div style={Childdiv}></div>
            </div>
        </div>
    )
}

export default ProgressBar
