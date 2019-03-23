// dependencies
import axios from 'axios'

const key = '403ffcb3b4481da342203f94fb6e937e'
const base = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=`


export const search = keywords => axios.get(`${base}${keywords}`)
	.then(({ data }) => data)
	.catch(err => {
		console.log(err)
	})