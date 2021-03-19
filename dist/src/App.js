import Header from './components/Header'
import Footer from './components/Footer'
import './css/App.css'
import React, { Component } from 'react'
import AppRouter from './routers/AppRouter'


export const API = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'


class App extends Component {



  render() {
    return (
      <div>
        <Header />
        <AppRouter />
        <Footer />
      </div>
    );
  }
}

export default App;
