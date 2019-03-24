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
import ReactPaginate from 'react-paginate'

const initialState = {
    text: '',
    movies: [],
    resultsMsg: null,
    pages: 0,
    currentPage: 0
}

class App extends Component {

    state = {...initialState}

    fetchMovies = (text, page=1) => {
        search(text, page)
            .then(res => {
                this.setState(() => ({
                    movies: res.results,
                    currentPage: res.page - 1,
                    pages: res.total_pages,
                    resultsMsg: !res.results.length ?
                        'Your search did not match any movie titles.' : null
                }))
            })
    }

    handleSearch = _debounce(text => {
        if (!text) {
            this.setState(() => initialState)
        } else {
            this.fetchMovies(text)
        }
    }, 175) // more? less?

    handleTextChange = ({ target }) => this.setState(() => ({ 
        text: target.value
    }), () => this.handleSearch(target.value))

    handlePageChange = ({ selected }) => {
        this.fetchMovies(this.state.text, selected + 1)
    }

    render() {
        const { 
            text, 
            movies,
            pages,
            currentPage,
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

                {pages > 1 &&
                    <ReactPaginate
                        previousLabel={'Prev'}
                        nextLabel={'Next'}
                        breakLabel={'...'}
                        pageCount={pages}
                        forcePage={currentPage}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={8}
                        onPageChange={this.handlePageChange}
                        containerClassName={'__pagination'}
                        activeClassName={'--active'}
                    />
                }

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
