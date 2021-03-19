import React from 'react';
import { connect } from 'react-redux'
import Series from '../components/Series'


class SeriesContainer extends React.Component {






    render(){
        return(
            <div>
                <div className='sub-header'>
                    <h2>Popular Series</h2>
                </div>
                <div className='placeholder-container'>
                <Series series={this.props.series}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        series: state.series.series
    }
}

export default connect(mapStateToProps)(SeriesContainer)