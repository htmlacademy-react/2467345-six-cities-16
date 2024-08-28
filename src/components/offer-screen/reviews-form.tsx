import { ChangeEvent, useState } from 'react';
import { postCommentAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';

function ReviewsForm(): JSX.Element{
  const dispatch = useAppDispatch();
  const [review, setReview] = useState(
    {
      rating: '0',
      text: '',
    }
  );

  const clearInputs = () => {
    setReview({
      ...review,
      rating: '0',
      text: ''
    });
  };


  const currentOffer = useAppSelector((state) => state.currentOffer);

  const addCommentHandler = (e: { preventDefault: () => void }) =>{
    e.preventDefault();
    if(currentOffer !== null){
      dispatch(postCommentAction({
        id: currentOffer.id,
        comment: review.text,
        rating: parseInt(review.rating, 10),
      }));
      clearInputs();
    }
  };

  // const moreThan50Char = () => {return review.text.length > minAmountChar ? null: 'disabled'};

  function inputChangeHandler(evt: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>){
    const {name, value} = evt.target;
    setReview({
      ...review,
      [name]: value
    });

  }
  return(
    <form className="reviews__form form" action="#" method="post" onSubmit={addCommentHandler}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={inputChangeHandler}/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={inputChangeHandler}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={inputChangeHandler}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={inputChangeHandler}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={inputChangeHandler}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="text" placeholder="Tell how was your stay, what you like and what can be improved" value={review.text} onChange={inputChangeHandler}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}
export default ReviewsForm;
