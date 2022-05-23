import React from 'react'
import Etiquette from './Etiquette'
import Global from '../Global'
import Palette from '../themes/Palette'

const palette = new Palette()
const global = new Global()

export default function Tags({projectId, data}) {

    var i = 0;
    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        marginBottom: 10,
    }

    const etiquetteStyle = {
        fontSize: '12px',
        padding: '5px 10px',
        margin: '0 5px'
    }

    return (
        <div style={style}>
            {data.map(tag => {
                i++
                var color = global.randomColor(palette, color => { 
                    return !color.includes('Salmon') && !color.includes('WhiteSmoke')
                })
                return <Etiquette key={`${projectId}_tagButton${i}`} variant='text'
                    value={tag}
                    fontStyle='bold'
                    color = { color.color } 
                    bgcolor = { color.addAlpha(0.3)}
                    sx = {etiquetteStyle}
                />
            })}
        </div>
    )
}



