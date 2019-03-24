// React
import React from 'react'
import PropTypes from 'prop-types'
// Styles
import './Movie.css'

const Movie = ({ movie }) => {
	return (
		<div className="__movie">{movie.title}</div>
	)
}

Movie.propTypes = {
	movie: PropTypes.object.isRequired
}

export default Movie
