import * as dayjs from 'dayjs';
import { REVIEW_DATE_FORMAT } from '../const';

function UTCToMMDD(date: string): string{
  const result = dayjs(date).format(REVIEW_DATE_FORMAT);
  return(result);
}

function capitalizeFLetter(str: string): string {
  return(str.charAt(0).toUpperCase() +
  str.slice(1));
}

export {capitalizeFLetter, UTCToMMDD};
