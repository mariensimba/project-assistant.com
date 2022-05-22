import { makeStyles } from '@mui/styles';
import Palette from '../../style/Palette';

const palette = new Palette()

/* Style subcomponent of Card */
const useStyles = makeStyles({
    buttonGroup: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
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
        maxHeight: '30px',
        maxWidth: '30px',
    },
    tags: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        marginBottom: 10,
        "& Button": {
            fontSize: '12px',
            padding: '5px 10px',
            margin: '0 5px'
        },
        "& #tagButton1": {
            color: palette.LightSkyBlue.color,
            background: palette.LightSkyBlue.addAlpha(0.3)
        },
        "& #tagButton2": {
            color: palette.Red.color,
            background: palette.Red.addAlpha(0.3)
        },
    },
    dueDate: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        margin: '0 5px',
        "& Button": {
            fontSize: '12px',
            color: palette.Orange.color,
            background: palette.Orange.addAlpha(0.2),
            padding: '5px 23px'
        },

    }, 
    participants: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        margin: '10px 0',
    },
})

export default useStyles
