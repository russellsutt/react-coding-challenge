import PlaceholderShowCard from './PlaceholderShowCard'
import React, {Component} from 'react'
import { fetchShows } from '../actions/thunks/fetchShows'
import { connect } from 'react-redux'


class Home extends Component {



    componentDidMount() {
        this.props.fetchShows()
    }


    render() {
        return (
            <div>
                <div  className='sub-header'>
                    <h2> Popular Titles</h2>
                </div>
                <div>
                    <div className='placeholder-container'>
                        <PlaceholderShowCard title='SERIES'/>
                        <PlaceholderShowCard  title='MOVIES'/>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(null, { fetchShows })(Home)