import { SingleReview } from '../../types/films';

import SingleFilmReview from '../single-film-review/single-film-review';

type FilmReviewsProps = {
  filmReviews: SingleReview[]
}

function FilmReviews({ filmReviews }: FilmReviewsProps): JSX.Element {
  if (filmReviews) {
    return (
      <div className="film-card__reviews film-card__row">
        <div className="film-card__reviews-col">
          {filmReviews.filter((review, index) => index % 2 === 0).map((review) => <SingleFilmReview key={review.id} review={review} />)}
        </div>
        <div className="film-card__reviews-col">
          {filmReviews.filter((review, index) => index % 2 !== 0).map((review) => <SingleFilmReview key={review.id} review={review} />)}
        </div>
      </div>
    );
  }
  return <p>No reviews yet</p>;
}

export default FilmReviews;
