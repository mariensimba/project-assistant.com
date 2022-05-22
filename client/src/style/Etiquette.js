
import React from 'react'
import { Button } from '@mui/material';



export default function Etiquette({variant = 'text', color, bgcolor = 'transparent', size = 'small', value, fontStyle = null}) {
    
    const style = {
        padding: '5px 10px',
        color: color,
        backgroundColor: bgcolor,
        pointerEvents: 'none', 
        borderColor: variant === 'text' ? 'transparent' : color,
        maxHeight: '30px', 
        fontSize: '12px'
    }

    function getFontStyle() {
        if (fontStyle === 'bold') {
            return <b>{value}</b>
        }
        if (fontStyle === 'italic'){
            return <i>{value}</i>
        }

        return value
    }
    
    return (
        <Button variant = {variant} size = {size} style={style}>
            {getFontStyle()}
        </Button>
     )
}


