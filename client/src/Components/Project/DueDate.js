import React from 'react'
import { Button } from '@mui/material'
import Palette from '../../themes/Palette'

const palette = new Palette()
export default function DueDate({ date }) {
    const style = {
        fontSize: '12px',
        pointerEvents: 'none', 
        color: palette.Orange.color,
        background: palette.Orange.addAlpha(0.2),
        padding: '5px 23px'
    }
    return (
        <div>
            <Button variant   = "text" size = 'small' style={style}>
                    <b>{"DUE DATE: " + date }</b>
            </Button>
        </div>
  )
}


