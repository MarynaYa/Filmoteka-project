!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a),a("k2ILe"),a("6HQZs");var o=a("iSn7Y"),i=a("3MGSC");a("37jAB");var r=a("4Nugj"),s=a("j7yxE"),d=a("cbazt"),c=a("4uNB6"),l=a("4QKg3"),u=a("h7AsZ");r.refs.libraryCardsContainer.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName&&"DIV"!==e.target.nodeName&&"B"!==e.target.nodeName&&"H2"!==e.target.nodeName&&"P"!==e.target.nodeName)return;document.body.classList.add("show-modal"),window.addEventListener("keydown",_);var t=e.target.dataset.id,n=localStorage.getItem("currentFilm"),a=localStorage.getItem("currentFilm"),r=JSON.parse(n),v=JSON.parse(a),f=r.find((function(e){return e.id==t})),g=v.find((function(e){return e.id==t})),p=(b=f||g,y="",y=b.poster_path?"".concat(l.BASE_POSTER_URL,"/").concat(b.poster_path):"https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png",'<div class="movie__container--left-side">              \n                  <img class="movie__image" src="'.concat(y,'"\n                    alt="').concat(b.title||b.name,'" /></div>\n            <div class="movie__container--rigth-side">\n                <h2 class="movie__title">').concat(b.title||b.name,'</h2>\n                <table class="movie__info">\n                    <tbody>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="votes">Vote / Votes</td>\n                            <td class="movie__info-rating">\n                                <span class="movie__info-rating-value movie__info-rating--accent">').concat((0,u.setReleaseVote)(b.vote_average),'</span>\n                                <span class="movie__info-rating-slash">/</span>\n                                <span class="movie__info-rating-value">').concat((0,u.setReleaseVote)(b.vote_count),'</span>\n                            </td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="popularity">Popularity</td>\n                            <td class="movie__info-numbers">').concat(b.popularity,'</td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="originalTitle">Original Title</td>\n                            <td class="movie__info-value">').concat(b.original_title||b.original_name,'</td>\n                        </tr>\n                        <tr class="movie__info-rows movie__info-rows--last">\n                            <td class="movie__info-name" data-key="genre">Genre</td>\n                            <td class="movie__info-value">').concat((0,o.gettingGenresListForModal)(b.genre_ids)||"Genre not defined",'</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h2 class="movie__about-title" data-key="about">About</h2>\n                <p class="movie__about-text">\n                    ').concat(b.overview||"No text",'\n                </p>\n                <div class="movie__btn-container">\n                   \n                    <button type="submit" id="watched-btn" data-id="').concat(b.id,'" class="movie__btn btn btn--accent">ADD TO WATCHED\n                        </button>\n                    <button type="submit" id="queue-btn" data-id="').concat(b.id,'" class="movie__btn btn btn-queue">ADD TO QUEUE\n                        </button>\n                </div>\n            </div>\n        </div>'));var b,y;(0,i.translateItems)(".movie__container--rigth-side [data-key]"),(0,s.insertModalMarkupHome)(p);var h=document.querySelector("#watched-btn");h.addEventListener("click",(function(){var e=[],n=localStorage.getItem("watched");n&&(e=JSON.parse(n)),e.find((function(e){return e.id==t}))?(0,d.deleteWatched)(f):(0,d.addWatchedLocalStorage)(g,h,m),(0,c.textModalBtn)(t)}));var w=document.querySelector("#queue-btn");w.addEventListener("click",(function(){var e=[],n=localStorage.getItem("queue");n&&(e=JSON.parse(n)),e.find((function(e){return e.id==t}))?(0,d.deleteQueue)(g):(0,d.addQueueLocalStorage)(f,w,m),(0,c.textModalBtn)(t)})),(0,c.textModalBtn)(t)})),r.refs.closeModalBtn.addEventListener("click",v),r.refs.modalCardBackdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&v()}));var m=r.refs.homeCardsContainer;function v(){window.removeEventListener("keydown",_),document.body.classList.remove("show-modal"),r.refs.modalCardContainer.innerHTML=""}function _(e){"Escape"===e.code&&v()}a("ivF4K"),a("6IdhT"),a("3MGSC"),a("9PpgY")}();
//# sourceMappingURL=library.926ad27d.js.map