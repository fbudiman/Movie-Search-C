// React
import React from 'react'
import PropTypes from 'prop-types'
// Styles
import './Movie.css'
// Dependencies
import moment from 'moment'

const base = 'https://image.tmdb.org/t/p/w200'

const Movie = ({ movie }) => {

	return (
		<div className="Movie">
			<div className="__poster">
				{!!movie.poster_path ? 
					<img src={base + movie.poster_path} alt="Movie Poster" /> :
					<div className="--unavailable">Poster Unavailable</div>
				}
			</div>
			<div className="__details">
				<div className="title">{movie.title}</div>
				<div className="date">Released {moment(movie.release_date).format('MMMM Do, YYYY')}</div>
			</div>
		</div>
	)
}

Movie.propTypes = {
	movie: PropTypes.object.isRequired
}

export default Movie
