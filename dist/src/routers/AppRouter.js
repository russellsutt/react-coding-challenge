import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import MovieContainer from '../containers/MovieContainers'
import SeriesContainer from '../containers/SeriesContainer'
import { createBrowserHistory } from 'history'
import Home from '../components/Home'

const AppRouter = (props) => {


    return (
        <div>
            <Router>
                <Switch>
                    <Route exact={true} path='/' component={Home}/>
                    <Route path='/series' component={SeriesContainer}/>
                    <Route path='/movies' component={MovieContainer}/>
                    <Route/>
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter