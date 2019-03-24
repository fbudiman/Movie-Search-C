// React
import React, { Component } from 'react'
// Styles
import './App.css'
// Services
import { search } from './services/search'
// Components
import Movie from './components/Movie/Movie'

const initialState = {
    text: '',
    movies: []
}

class App extends Component {

    state = {...initialState}

    handleSearch = text => !text ?
        this.setState(() => initialState) :
        search(text)
            .then(res => {
                this.setState(() => ({
                    movies: res.results
                }))
            })

    handleTextChange = ({ target }) => this.setState(() => ({ 
        text: target.value
    }), () => this.handleSearch(target.value))

    render() {
        const { text, movies } = this.state
        const hasNoResults = !!text && !movies.length

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

                {hasNoResults ?
                    <div className="__no-results">Your search did not match any movie titles.</div> :
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
