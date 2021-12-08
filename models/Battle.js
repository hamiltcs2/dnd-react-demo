const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const BattleSchema = new Schema({
    fighters : [mongoose.Schema.Types.Mixed],
    name : {
        type: String,
        require: false,
    },
    post_date: {
        type: Date,
        default: Date.now,
    }
});

const Battle = mongoose.model('battles', BattleSchema);
module.exports = Battle;
