var mongoose = require('mongoose');

// Create club schema
var ClubSchema = new mongoose.Schema({
  id: Number,
  sport: Number,
  name: String,
  city: String,
  country: String,
  officialName: String,
  color1: String,
  color2: String,
  color3: String,
  logo: String,
  shirt: String,
  shirtType: String,
  addressOffice: String,
  foundationYear: Number,
  stadium: {
    id: Number,
    name: String,
    capacity: Number,
    address: String,
    photo: String,
    center: {
      latitude: Number,
      longitude: Number
    }
  },
  current: {
    year: String,
   league: String
  },
  /*palmares: [ {competition: 'Coupe de France', type: 'cup', record: [{rank: 1, years: [1965, 1971]}]} ],*/
  palmares: [mongoose.Schema.Types.Mixed],
  surname: String,
  website: String,
  updated_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Club', ClubSchema);
