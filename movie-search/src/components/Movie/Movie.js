// React
import React from 'react'
import PropTypes from 'prop-types'
// Styles
import './Movie.css'

const base = 'https://image.tmdb.org/t/p/w200'

const Movie = ({ movie }) => {
	return (
		<div className="Movie">
			<div className="__poster">
				{!!movie.poster_path ? 
					<img src={base + movie.poster_path} alt="Movie Poster" /> :
					<div>Poster Unavailable</div>
				}
			</div>
			<div className="__details">
				{movie.title}
			</div>
		</div>
	)
}

Movie.propTypes = {
	movie: PropTypes.object.isRequired
}

export default Movie
