const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const CombatantSchema = new Schema({
    name : {
        type: String,
        require: true,
    },
    strength : {
        type: Number,
        require: true,
    },
    dexterity : {
        type: Number,
        require: true,
    },
    constitution : {
        type: Number,
        require: true,
    },
    intelligence : {
        type: Number,
        require: true,
    },
    wisdom : {
        type: Number,
        require: true,
    },
    charisma : {
        type: Number,
        require: true,
    },
    initiative : {
        type: Number,
        require: true,
    },
    max_hp : {
        type: Number,
        require: true,
    },
    armor_class : {
        type: Number,
        require: true,
    },
    passive_perception : {
        type: Number,
        require: true,
    },
    combatantType : {
        type: String,
        require: true,
    }
});

const Combatant = mongoose.model('combatants', CombatantSchema);
module.exports = Combatant;