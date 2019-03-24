// Dependencies
import axios from 'axios'

const key = '403ffcb3b4481da342203f94fb6e937e'
const base = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=`


export const search = (keywords, page) => axios.get(`${base + keywords}&page=${page}`)
	.then(({ data }) => data)
	.catch(err => {
		console.log(err)
	})