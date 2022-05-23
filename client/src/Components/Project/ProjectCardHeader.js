import React from 'react'
import { CardHeader } from '@mui/material'
import Palette from '../../themes/Palette'
import { Box } from '@mui/material'
import { CardActions } from '@mui/material'
import { IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Typography } from '@mui/material'

const palette = new Palette()

export default function ProjectCardHeader({name, category, imageUrl = null}) {

    const avatarStyle = {
        imageResolution: '10px',
        backgroundColor: palette.Salmon.color,
        width: 25,
        height: 25,
        borderRadius: '20%',
        paddingTop: '7px',
        paddingBottom: '7px',
        paddingLeft: '7px',
        paddingRight: '7px'
    }

    const iconButtonStyle = {
        maxHeight: '30px',
        maxWidth: '30px',
        border: 1,
        padding: '10px',
        borderColor: 'grey.300'
    }

    const favoriteIconStyle = {
        color: palette.DarkHotPink.color 
    }

    const moreVertIconStyle = {
        border: 0
    }


    const projectNameStyle = {
        textAlign: 'left'
    }
    const subheaderStyle = {
        textAlign: 'left', 
        color: 'grey.500'
    }


    return (
        <CardHeader 
            avatar= { <Box component = "img" sx = {avatarStyle} alt = "project icon" src = {imageUrl} /> }
            action={
                <CardActions>
                    <IconButton aria-label = "add to favorites" sx = {iconButtonStyle}>
                        <FavoriteIcon fontSize = 'small'sx = {favoriteIconStyle} />
                    </IconButton>
                    <IconButton aria-label = "settings" style={moreVertIconStyle} sx = {iconButtonStyle}>
                        <MoreVertIcon fontSize = 'large'/>
                    </IconButton>
                </CardActions>
            }
            title={
                <Typography fontSize = {15} sx = {projectNameStyle}><b>{name}</b></Typography>
            }
            subheader={
                <Typography fontSize = {13} color = 'grey.500' sx = {subheaderStyle} ><b>{category}</b></Typography>
            } 
        />
    )
}


