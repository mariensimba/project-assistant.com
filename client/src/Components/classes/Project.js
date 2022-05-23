import { makeStyles } from '@mui/styles';
import Palette from '../../themes/Palette';

const palette = new Palette()

/* Style subcomponent of Card */
const useStyles = makeStyles({
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
    },
    dueDate: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        margin: '0 5px',
    }, 
    participants: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        margin: '10px 0',
    },
})

export default useStyles
