import { Review } from '../types/review';

export const reviews: Review [] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  },
  {
    id: 'ab85387a-dcf6-4fad-9925-97172d2ea11b',
    comment: 'This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.',
    date: '2024-07-16T21:00:00.784Z',
    rating: 1,
    user: {
      name: 'Zak',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/10.jpg',
      isPro: false
    }
  },
  {
    id: 'f8dd0497-3dae-4a30-be64-64916f549601',
    comment: 'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
    date: '2024-07-14T21:00:00.784Z',
    rating: 5,
    user: {
      name: 'Kendall',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/1.jpg',
      isPro: true
    }
  },
];
