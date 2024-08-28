import * as dayjs from 'dayjs';
import { REVIEW_DATE_FORMAT } from '../const';
import { Review } from '../types/review';

function UTCToMMDD(date: string): string{
  const result = dayjs(date).format(REVIEW_DATE_FORMAT);
  return(result);
}

function capitalizeFLetter(str: string): string {
  return(str.charAt(0).toUpperCase() +
  str.slice(1));
}

function isValidComment(oldComment: object): oldComment is Review {
  return (
    oldComment !== null &&
    typeof oldComment === 'object' &&
    'id' in oldComment &&
    'rating' in oldComment &&
    'comment' in oldComment &&
    'date' in oldComment &&
    'user' in oldComment
  );
}

export function convertToComment(oldComment: object): Review | null {
  if (isValidComment(oldComment)) {
    return oldComment;
  } else {
    return null;
  }
}

export {capitalizeFLetter, UTCToMMDD};
