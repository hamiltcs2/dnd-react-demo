const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const MonsterSchema = new Schema({
    monster_name : {
        type: String,
        require: true,
    },
    monster_type : {
        type: String,
        require: true,
    },
    combatant_id: {
        type: Object,
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
    }
});

const Monster = mongoose.model('monsters', MonsterSchema);
module.exports = Monster;