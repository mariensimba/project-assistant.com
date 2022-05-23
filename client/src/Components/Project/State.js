import React from 'react'
import Palette from '../../themes/Palette'
import Etiquette from './Etiquette'

const palette = new Palette()

export default function State({value}) {

    function getStateEtiquette() {
        if(value === 'Completed') {
            return <Etiquette value= {value} variant='text' color={ palette.LightGreen.color } bgcolor = { palette.LightGreen.addAlpha(0.3) } fontStyle='bold'/>
        }
        if(value === 'Canceled') {
            return <Etiquette value= {value} variant='text' color={ palette.LightRed.color } bgcolor = { palette.LightRed.addAlpha(0.3) } fontStyle='bold'/>
        }
        if(value === 'In Progress') {
            return <Etiquette value= {value} variant='text' color={ palette.LightBlue.color } bgcolor = { palette.LightBlue.addAlpha(0.3) } fontStyle='bold'/>
        }
        if(value === 'Pending') {
            return <Etiquette value= {value} variant='text' color={ palette.LightOrange.color } bgcolor = { palette.LightOrange.addAlpha(0.3) } fontStyle='bold'/>
        }
    }
    return (
        <div>
            {getStateEtiquette()}
        </div>
    )
}


