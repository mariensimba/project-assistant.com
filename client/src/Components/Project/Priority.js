import React from 'react'
import Palette from '../../themes/Palette'
import Etiquette from './Etiquette'

 
const palette = new Palette()
export default function Priority({ value }) {
    function getPriorityEtiquette() {
        if (value === 'High') {
            return <Etiquette value={ value + ' priority' } variant='outlined' color={ palette.Orange.color } fontStyle='bold' />
        }
        if (value === 'Mid') {
            return <Etiquette value={ value + ' priority' } variant='outlined' color={ palette.Blue.color } fontStyle='bold' />
        }
        if (value === 'Low') {
            return <Etiquette value={ value + ' priority' } variant='outlined' color={ palette.Green.color } fontStyle='bold' />
        }
    }
    return (
    <div>
        {getPriorityEtiquette()}
    </div>
    )
}

