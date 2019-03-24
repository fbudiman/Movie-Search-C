// React
import React, { Component } from 'react'
// Styles
import './App.css'
// Services
import { search } from './services/search'
// Components
import Movie from './components/Movie/Movie'
// Dependencies
import _debounce from 'lodash/debounce'

const initialState = {
    text: '',
    movies: [],
    resultsMsg: null
}

class App extends Component {

    state = {...initialState}

    handleSearch = _debounce(text => {
        if (!text) {
            this.setState(() => initialState)
        } else {
            search(text)
                .then(res => {
                    this.setState(() => ({
                        movies: res.results,
                        resultsMsg: !res.results.length ?
                            'Your search did not match any movie titles.' : null
                    }))
                })
        }
    }, 175) // more? less?

    handleTextChange = ({ target }) => this.setState(() => ({ 
        text: target.value
    }), () => this.handleSearch(target.value))

    render() {
        const { 
            text, 
            movies,
            resultsMsg
        } = this.state

        return (
            <div className="App">
                <h2>Movie Search</h2>

                <input
                    className="__search-input"
                    type="text"
                    placeholder="Movie Titles..."
                    value={text}
                    onChange={this.handleTextChange}
                />

                {!!resultsMsg ?
                    <div className="__no-results">{resultsMsg}</div> :
                    movies.map(movie => <Movie
                        key={movie.id}
                        movie={movie}
                    />)
                }
            </div>
        )
    }
}

export default App
