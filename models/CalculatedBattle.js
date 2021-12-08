const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const CalculatedBattleSchema = new Schema({
    fighters : [mongoose.Schema.Types.Mixed],
    battle_id: {
        type: Object,
        require: true,
    },
    name : {
        type: String,
        require: false,
    },
    post_date: {
        type: Date,
        default: Date.now,
    }
});

const CalculatedBattle = mongoose.model('calculatedBattles', CalculatedBattleSchema);
module.exports = CalculatedBattle;
