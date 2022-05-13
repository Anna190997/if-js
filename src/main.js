const date = '2020-11-26';
const result = date.split('-').reverse().join('.');
console.log(result);

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

function search(town) {
  let city;
  let country;
  let hotel;
  for (let i = 0; i < data.length; i++) {
    if (data[i].city === town) {
      country = data[i].country;
      city = data[i].city;
      hotel = data[i].hotel;
      const place = `Страна: ${country}, ` + `город: ${city}, ` + `отель: ${hotel}`;
      console.log(place);
    }
  }
}
search('Berlin');
