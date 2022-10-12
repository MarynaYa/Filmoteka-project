import { refs } from './../refs';
// import fetchFilms from './fetch_search_films';
import MoviesApiService from '../api/moviesApiServiceClass';
import makingMarkup from '../api/render-card-markup';
import { insertFilmsMarkupToHome } from '../api/insertingIntoDifferentContainers';
import { createPagination } from '../pagination-query';
import timeoutForBadRequest from './timeoutForBadRequest';
import { createSpinner } from '../spinner';

const movieApiServise = new MoviesApiService();

refs.formSearch.addEventListener('submit', onSearchFilmByKeyword);

//* функція обробляє результат fetch та викликає на його основі рендеринг головної сторінки
function onSearchFilmByKeyword(e) {
  e.preventDefault();

  const searchFilms = e.currentTarget.elements.searchInput.value.trim();
  movieApiServise.query = searchFilms;

  createSpinner();
  try {
    movieApiServise
      .fetchSearchingMovies()
      .then(({ results, total_results }) => {
        if (results.length === 0) {
          timeoutForBadRequest();
          return;
        };

        refs.homeCardsContainer.innerHTML = '';
        const searchingMarkup = makingMarkup(results);
        insertFilmsMarkupToHome(searchingMarkup);
        createPagination(total_results, searchFilms);
      });
  } catch (err) {
    err => console.log(err);
  };

  refs.inputSearch.value = '';
  refs.filmsSearchList.innerHTML = '';
  refs.filmsSearchList.classList.remove('search-form__list--bgc');
};
