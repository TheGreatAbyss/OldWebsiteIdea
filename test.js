var rq = require('./results_query.js')

var obj =  { locations: '',
 minprice: '0',
 maxprice: '999999',
 availableby: '01-10-2015',
 bedrooms: '1',
 bathrooms: '1',
 bedmore: 'true',
 bathmore: 'true',
 By_Owner: 'true',
 Dishwasher: 'true',
 Laundry: 'true',
 Dogs: 'true',
 Cats: 'true',
 Other_Pets: 'true',
 Outdoor: 'true',
 Fireplace: 'true',
 Furnished: 'true',
 Gym: 'true',
 Pool: 'true',
 Storage: 'true',
 Parking: 'true' }

console.log(rq(obj))
console.log(obj[""])