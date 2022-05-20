import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import ProgressBar from './ProgressBar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { pink } from '@mui/material/colors';
import LinearProgress from '@mui/material/LinearProgress';

/* Style subcomponent of Card */
const useStyles = makeStyles({
    disabled: {
        pointerEvents: 'none',
    },
    buttonGroup: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        "& #stateButton": {
            background: "rgba(76, 175, 80, 0.3)", 
            padding: '5px 10px'
        },
        marginBottom: 12,
        "& Button": {
            maxHeight: '30px', 
            fontSize: '12px'
        }

    },
    projectName: {
        textAlign: 'left'
    },
    numTaskInfo: {
        textAlign: 'left',
        "& #taskDoneText": {
            marginBottom: 12 
        },
    },
    IconButton: {
        maxHeight: '35px',
        maxWidth: '35px', 
    },
    tags: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        "& Button": {
            fontSize: '10px',
            padding: '5px 10px',
            margin: '0 5px'
        },
        "& #tagButton1": {
            color: '#0291d1',
            background: "rgba(56, 191, 252, 0.3)"
        },
        "& #tagButton2": {
            color: '#ffb303',
            background: "rgba(255, 230, 3, 0.3)"
        },

    }

})


function Project({ name, category, state, priority, numTaskDone, numTask, tags, dueDate }) {
    
    const classes = useStyles();
    const [participants, setParticipants] = useState([])
    
    return (
        <Card elevation={0}
            sx={{
                borderRadius: '15px',
                width: '25%'
            }}>
            <CardHeader 
                avatar={
                    <Box 
                        component="img"
                        sx={{
                            imageResolution: '10px',
                            backgroundColor: '#f9e6df',
                            width: 25, 
                            height: 25,
                            borderRadius: '20%',
                            paddingTop: '7px',
                            paddingBottom: '7px',
                            paddingLeft: '7px',
                            paddingRight: '7px'

                        }}
                        alt="project icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
                    />
                }
                action={
                    <CardActions>
                        <IconButton className={classes.IconButton}
                            aria-label="add to favorites"
                            sx={{ 
                                border: 1,
                                borderColor: 'grey.400'    
                             }}>
                            <FavoriteIcon 
                                fontSize='small'
                                sx={{ color: pink[500] }}
                            />
                        </IconButton>
                        <IconButton aria-label="settings" className={classes.IconButton}>
                            <MoreVertIcon fontSize='small'/>
                        </IconButton>
                    </CardActions>
                }
                title={
                    <Typography fontSize={15} className={classes.projectName}><b>{name}</b></Typography>
                }
                subheader={
                    <Typography fontSize={13} color='grey.500' className={classes.projectName}><b>{category}</b></Typography>
                } 
            />
            <CardContent>
                <div className={classes.buttonGroup}>
                    <Button variant="text" color='success' size='small' id="stateButton" className={classes.disabled}>
                        <b>{state}</b>
                    </Button>
                    <Button variant="outlined" color='warning' size='small' className={classes.disabled}>
                        {priority + " priority"}
                    </Button>
                </div>
                <div className={classes.numTaskInfo}>
                    <Typography id='taskDoneText' fontSize={15} fontWeight={100} textAlign="left">Task Done: <b>{numTaskDone}</b>/{numTask}</Typography>
                    <ProgressBar bgcolor="#1565c0" progress={numTaskDone * (100/numTask)}  height={7} />
                </div>
                <div className={classes.tags}>
                    <Button variant="text" size='small' id="tagButton1" className={classes.disabled}>
                        <b>{tags[0]}</b>
                    </Button>
                    <Button variant="text" size='small' id="tagButton2" className={classes.disabled}>
                        <b>{tags[1]}</b>
                    </Button>
                </div>
                <div className={classes.dueDate}>
                    <Button variant="text" size='small' className={classes.disabled}>
                        {"DUE DATE: " + dueDate}
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
 

export default Project
