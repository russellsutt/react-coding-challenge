import PlaceholderShowCard from './PlaceholderShowCard'
import {withRouter} from 'react-router-dom'
import React, {Component} from 'react'


class Home extends Component {



    componentDidMount() {
        
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

export default withRouter(Home)