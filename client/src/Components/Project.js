import { useState } from 'react';
import useStyles from './css/Project';
import ProgressBar from './ProgressBar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { pink } from '@mui/material/colors';
import AvatarGroup from '@mui/material/AvatarGroup';
import Palette from '../style/Palette';

const palette = new Palette()

function Project({ id, name, category, state, priority, numTaskDone, numTask, tags, dueDate }) {
    
    const classes                         = useStyles();
    const [participants, setParticipants] = useState(["Aliyah Esparza",
                                                    "Felicity Colson",
                                                    "Zayne Tully",
                                                    "Ashley Newkirk",
                                                    /*"Ivy Bell",
                                                    "Cristopher Johnson",
                                                    "Patience French",
                                                    "Clinton Mckenzie",
                                                    "Francisco Robinson"*/
                                                ])
    
    return (
        <Card elevation = {0}
              sx        = {{
                //borderRadius: '15px',
                border: 1, 
                borderColor: 'grey.300',
                width       : '25%'
            }}>
            <CardHeader 
                avatar={
                    <Box 
                        component = "img"
                        sx        = {{
                            imageResolution: '10px',
                            backgroundColor: palette.Salmon.color,
                            width          : 25,
                            height         : 25,
                            borderRadius   : '20%',
                            paddingTop     : '7px',
                            paddingBottom  : '7px',
                            paddingLeft    : '7px',
                            paddingRight   : '7px'

                        }}
                        alt = "project icon"
                        src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
                    />
                }
                action={
                    <CardActions>
                        <IconButton className  = {classes.IconButton}
                                    aria-label = "add to favorites"
                                    sx         = {{ 
                                        border     : 1,
                                        padding    : '10px',
                                        borderColor: 'grey.300'
                                    }}>
                            <FavoriteIcon 
                                fontSize = 'small'
                                sx       = {{ color: palette.DarkHotPink.color }}
                            />
                        </IconButton>
                        <IconButton   id       = "settingIconButton" aria-label = "settings" className = {classes.IconButton}>
                            <MoreVertIcon fontSize = 'large'/>
                        </IconButton>
                    </CardActions>
                }
                title={
                    <Typography fontSize = {15} className = {classes.projectName}><b>{name}</b></Typography>
                }
                subheader={
                    <Typography fontSize = {13} color = 'grey.500' className = {classes.projectName}><b>{category}</b></Typography>
                } 
            />
            <CardContent>
                <div    className = {classes.buttonGroup}>
                    <Button variant   = "text" size = 'small' id = "stateButton" className = {classes.disabled}>
                        <b>{state}</b>
                    </Button>
                    <Button variant = "outlined" id = "priorityButton" size = 'small' className = {classes.disabled}>
                        {priority + ' priority'}
                    </Button>
                </div>
                <div         className = {classes.numTaskInfo}>
                    <Typography  id        = 'taskDoneText' fontSize = {15} fontWeight                       = {100} textAlign = "left">Task Done: <b>{numTaskDone}</b>/{numTask}</Typography>
                    <ProgressBar bgcolor   = { palette.DarkBlue.color } progress      = {numTaskDone * (100/numTask)}  height = {7} />
                </div>
                <div    className = {classes.tags}>
                    <Button variant   = "text" size = 'small' id = "tagButton1" className = {classes.disabled}>
                        <b>{tags[0]}</b>
                    </Button>
                    <Button variant = "text" size = 'small' id = "tagButton2" className = {classes.disabled}>
                        <b>{tags[1]}</b>
                    </Button>
                </div>
                <AvatarGroup className = {classes.participants} total    = {participants.length} max = {5}>
                    <Avatar      sx        = {{ width: 35, height: 35 }} alt = "Remy Sharp" src          = "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-03.jpg" />
                    <Avatar      sx        = {{ width: 35, height: 35 }} alt = "Travis Howard" src       = "https://i.guim.co.uk/img/media/75bd4161378dd43913815ce76caab186a9d5d287/0_10_6720_4032/master/6720.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=41cbc8935ae4e0f498227fa8b10953d0" />
                    <Avatar      sx        = {{ width: 35, height: 35 }} alt = "Agnes Walker" src        = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqg5slcNRbgeCQcoXxM6vMRMI8DO8AYJ0B0baniZp0YtWZwMbh-4VQ3maIVRbcRQWrmfk&usqp=CAU" />
                    <Avatar      sx        = {{ width: 35, height: 35 }} alt = "Trevor Henderson" src    = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXk476ZNUZX6SiiowmLN7K5XdsPfjh65Gt50j12c8o7xbdaS4KIhPukruxv7i4EdhX_is&usqp=CAU" />
                </AvatarGroup>
                <div    className = {classes.dueDate}>
                <Button variant   = "text" size = 'small' className = {classes.disabled}>
                        <b>{"DUE DATE: " + dueDate}</b>
                </Button>
                </div>
            </CardContent>
        </Card>
    )
}
 

export default Project
