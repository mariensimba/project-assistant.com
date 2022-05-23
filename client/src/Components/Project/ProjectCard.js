import { useState } from 'react';
import ProgressBar from './ProgressBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AvatarGroup from '@mui/material/AvatarGroup';
import Palette from '../../themes/Palette'
import State from './State';
import Priority from './Priority';
import DueDate from './DueDate';
import Global from '../../Global'
import ProjectCardHeader from './ProjectCardHeader';
import Tags from './Tags';  

const palette = new Palette()
const global = new Global()

export default function ProjectCard({ id, name, category, state, priority, numTaskDone, numTask, tags, dueDate , url}) {
    
    const [participants, setParticipants] = useState(["Aliyah Esparza","Felicity Colson","Zayne Tully","Ashley Newkirk"/*,"Ivy Bell","Cristopher Johnson","Patience French","Clinton Mckenzie","Francisco Robinson"*/])
    
    const cardStyle = {
        border: 1, 
        borderRadius: 3,
        borderColor: 'grey.300',
        width: '24%',
        height: '332px',
        marginTop: 1
    }

    const projectStateStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    }

    const tasksInfoStyle = {
        marginBottom: 2, 
        fontSize: 15, 
        fontWeight: 100, 
        textAlign: 'left'
    }

    const dueDateStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        margin: '0 5px'  
    }

    const participantsStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        margin: '10px 0',
    }

    return (
        <Card elevation = {0} sx = {cardStyle}>
            <ProjectCardHeader name = {name} category= {category} imageUrl={url}/>
            <CardContent>
                <div style = {projectStateStyle}>
                    <State value={state}/>
                    <Priority value={priority} />
                </div>
                <Typography style= {tasksInfoStyle}>Task Done: <b>{numTaskDone}</b>/{numTask}</Typography>
                <ProgressBar bgcolor = { 
                        global.randomColor(palette, color => {
                            return !color.includes('WhiteSmoke') && !color.includes('Salmon')
                        }).color
                    }
                    progress = {numTaskDone * (100/numTask)}  height = {7} />
                <Tags projectId = {id} data={tags}/>
                <AvatarGroup style = {participantsStyle} total    = {participants.length} max = {5}>
                    <Avatar sx = {{ width: 35, height: 35 }} alt = "Remy Sharp" src = "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-03.jpg" />
                    <Avatar sx = {{ width: 35, height: 35 }} alt = "Travis Howard" src = "https://i.guim.co.uk/img/media/75bd4161378dd43913815ce76caab186a9d5d287/0_10_6720_4032/master/6720.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=41cbc8935ae4e0f498227fa8b10953d0" />
                    <Avatar sx = {{ width: 35, height: 35 }} alt = "Agnes Walker" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqg5slcNRbgeCQcoXxM6vMRMI8DO8AYJ0B0baniZp0YtWZwMbh-4VQ3maIVRbcRQWrmfk&usqp=CAU" />
                    <Avatar sx = {{ width: 35, height: 35 }} alt = "Trevor Henderson" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXk476ZNUZX6SiiowmLN7K5XdsPfjh65Gt50j12c8o7xbdaS4KIhPukruxv7i4EdhX_is&usqp=CAU" />
                </AvatarGroup>
                <div style = {dueDateStyle}>
                    <DueDate date={dueDate}/>
                </div>
            </CardContent> 
        </Card>
    )
}
 
