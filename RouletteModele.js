var mongoose = require('mongoose')
​
const RouletteSchema = new mongoose.Schema({
  bet: {
    type: String,
    required: true
  },
  player: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
})
​
RouletteSchema.set('toJSON', {
  transform: function (doc, ret, options){
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});