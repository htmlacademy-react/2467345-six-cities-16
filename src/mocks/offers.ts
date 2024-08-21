import { Offer } from '../types/offer';

export const offers: Offer [] = [
  {
    id: '4c53c086-52b0-4604-b2e6-1bb3c64511d7',
    title: 'The Joshua Tree House',
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    type: 'hotel',
    price: 129,
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/17.jpg'
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    goods: [
      'Laptop friendly workspace',
      'Fridge',
      'Kitchen',
      'Wi-Fi',
      'Coffee machine',
      'Baby seat',
      'Air conditioning'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: false,
    rating: 4.5,
    bedrooms: 3,
    maxAdults: 9
  },
  {
    id: '1d093388-eefa-4335-b77e-61f87b066d93',
    title: 'Loft Studio in the Central Area',
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    type: 'hotel',
    price: 288,
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/9.jpg'
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    goods: [
      'Wi-Fi',
      'Breakfast',
      'Dishwasher',
      'Washing machine',
      'Kitchen',
      'Fridge',
      'Baby seat',
      'Towels',
      'Coffee machine'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 3.2,
    bedrooms: 4,
    maxAdults: 2
  },
  {
    id: '6eb78a62-67db-4fd4-9a69-d616ddf4b8de',
    title: 'Nice, cozy, warm big bed apartment',
    description: 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    type: 'house',
    price: 137,
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/8.jpg'
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    goods: [
      'Heating',
      'Baby seat',
      'Laptop friendly workspace',
      'Washer'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 1,
    bedrooms: 3,
    maxAdults: 6
  },
  {
    id: 'e3eed02a-bebc-4f2e-afbe-415efbf438f3',
    title: 'Perfectly located Castro',
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    type: 'apartment',
    price: 157,
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/13.jpg'
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    goods: [
      'Breakfast',
      'Dishwasher',
      'Cable TV',
      'Heating',
      'Washing machine',
      'Coffee machine',
      'Kitchen',
      'Laptop friendly workspace',
      'Air conditioning',
      'Washer',
      'Towels',
      'Baby seat',
      'Wi-Fi'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: true,
    rating: 3.1,
    bedrooms: 3,
    maxAdults: 1
  },
  {
    id: '1296bc05-7b4c-40f1-9e84-0596d553244a',
    title: 'The Joshua Tree House',
    description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    type: 'apartment',
    price: 340,
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/14.jpg'
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    goods: [
      'Breakfast',
      'Dishwasher',
      'Cable TV',
      'Heating',
      'Washing machine',
      'Coffee machine',
      'Kitchen',
      'Laptop friendly workspace',
      'Air conditioning',
      'Washer',
      'Towels',
      'Baby seat',
      'Wi-Fi'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: true,
    rating: 3.1,
    bedrooms: 3,
    maxAdults: 2
  },
];
