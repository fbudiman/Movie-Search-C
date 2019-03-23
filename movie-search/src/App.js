// React
import React, { Component } from 'react'
// Styles
import './App.css'
// Services
import { search } from './services/search'
// Components
import Movie from './components/Movie/Movie'

class App extends Component {

    render() {
        return (
            <div className="App">
                hello world

                <Movie />
            </div>
        )
    }
}

export default App;
