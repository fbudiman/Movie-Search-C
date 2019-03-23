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
                <h4>Movie Search</h4>

                <Movie />
            </div>
        )
    }
}

export default App
