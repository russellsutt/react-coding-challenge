import placeholder from '../assets/placeholder.png';
import { withRouter} from 'react-router-dom'

const PlaceholderShowCard = (props) => {

    const clickHandler = event => {
        let lowercase = event.toLowerCase();
        props.history.push( '/' + lowercase )
    }

    return (
        <div className='placeholder-show-card' onClick={() => {clickHandler(props.title)}}>
            <h2>{props.title}</h2>
            <img src={placeholder} alt=''/>
        </div>
    )
}

export default withRouter(PlaceholderShowCard)