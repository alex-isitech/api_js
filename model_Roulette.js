
var mongoose = require('mongoose')
var RouletteSchema = new mongoose.Schema({
    bet: {
        type: Number,
        required: true
    },
    player:
    {

        type: String,
        required: true
    
    },
    date: {

        type: String,
        required: true
    },

    bet_session:{

        type: Number,
        required: true
    },

    session: {
        type: String,
        required: true
    },

    depot: {
        type: Number,
        required: true
    },

    num_cb: {
        type: Number,
        required: false
    },

    game: {
        type: String,
        required: true
    }


})

RouletteSchema.set('toJSON', {
    transform: function (doc, ret, options){
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }

})

var RouletteModel = mongoose.model('Roulette', RouletteSchema)
module.exports = RouletteModel