import React from 'react'
import Etiquette from './Etiquette'
import Global from '../Global'
import Palette from '../themes/Palette'

const palette = new Palette()
const global = new Global()

export default function Tags({projectId, data}) {

    var i = 0;

    return (
        data.map(tag => {
            i++
            var color = global.randomColor(palette, color => { 
                return !color.includes('Salmon') && !color.includes('WhiteSmoke')
            })
           return <Etiquette key={`${projectId}_tagButton${i}`} variant='text'
                value={tag}
                fontStyle='bold'
                color = { color.color } 
                bgcolor = { color.addAlpha(0.3)}
            />
        })
    )
}



