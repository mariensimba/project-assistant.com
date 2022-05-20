import React from "react"

function ProgressBar({ bgcolor, progress, height }) {

    const bar = {
        marginBottom: '30px'
    }

    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
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
