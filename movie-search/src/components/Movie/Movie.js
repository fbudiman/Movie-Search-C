// React
import React from 'react'
import PropTypes from 'prop-types'
// Styles
import './Movie.css'
// Dependencies
import moment from 'moment'

const base = 'https://image.tmdb.org/t/p/w200'

const Movie = ({ movie }) => {

	const {
		title,
		poster_path,
		release_date,
		vote_average,
		vote_count,
		overview
	} = movie

	return (
		<div className="Movie" title={title}>
			<div className="__poster">
				{!!poster_path ? 
					<img src={base + poster_path} alt="Movie Poster" /> :
					<div className="--unavailable">Poster Unavailable</div>
				}
			</div>
			<div className="__details">
				<div className="title">
					{title}
				</div>
				<div className="date">
					Released {moment(release_date).format('MMMM Do, YYYY')}
				</div>
				<div className="rating">
					Rated {vote_average}/10 of {vote_count} Reviews
				</div>
				<div className="summary">
					{overview}
				</div>
			</div>
		</div>
	)
}

Movie.propTypes = {
	movie: PropTypes.object.isRequired
}

export default Movie
