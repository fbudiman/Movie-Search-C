
## Instructions

This project uses Node.js and npm, so make sure that they are both installed in your machine. The following dependencies are used in this project:
- axios
- moment
- lodash
- react-paginate
- react-router-dom

Start by navigating to the `movie-search` directory, then run `npm install` to make sure these dependencies are loaded. After npm finishes installing, run `npm start` to run the project.

## Challenges

Working with the MovieDB API for the first time was very simple, but there is a lot of data to sift through. Not all of the movie data comes back consistently - some of them don't have posters available, some don't have a release date, while some don't have any ratings or summaries. I sought out those edge cases and applied an alternative set of info to display in the UI, so as to keep some sort of consistency in the UI regardless of data inconsistency.

## Design Decisions

As far as design goes, I decided to keep it simple and similar to the example. Mostly, I thought of some popular search interfaces (ie. Google, Netflix) and realize that they are all very simple and clean, and does not litter the page with too much data. I added a few small design tweaks to make it easier for the user to read through some of the information, such as date formatting. I also added a border for each result to avoid the bleeding over of text from some longer summaries, just to contain that information in the correct element.

## Future Improvements

Given more time, there's some styling improvements I would make to this project, as well as making it more responsive. As for the search itself, I would also like to add filters as well, such as filter by genre, ratings, or other.

In addition to the search results, I would also like to set up a movie page - to be able to select a particular movie, and open that up on its own page to view more details than what's been given in the search results.