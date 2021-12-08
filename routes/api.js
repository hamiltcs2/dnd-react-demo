var express = require('express');
var router = express.Router();
const BlogPost = require('../models/blogPost');
const Combatant = require('../models/Combatant');
const Battle = require('../models/Battle');
const CalculatedBattle = require('../models/CalculatedBattle');

router.get('/', (req, res) => {
    // const data = {
    //     username: 'accimeesterlin',
    //     age: 5
    // };

    BlogPost.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);

        })
        .catch((error) => {
            console.log('error: ', error);
        });
    // res.json(data);
});

router.post('/save', (req, res) => {
    console.log('Body: ', req.body);
    const data = req.body;
    const newBlogPost = new BlogPost(data);
    newBlogPost.save((error) => {
        if(error) {
            res.status(500).json({msg: 'Sorry, internal server error'});
            return;
        }
            //BlogPost
            return res.json({
            msg: 'Your data has been saved!!!'
            });  
        
    })
});

router.get('/combatantsList', (req, res) => {
    Combatant.find({ })
        .then((data) => {
            console.log('Combantants: ', data);
            res.json(data);

        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

router.post('/combatantSave', async (req, res) => {
    console.log('Body: ', req.body);
    const data = req.body;
    const newCombatant = new Combatant(data);
    newCombatant.save((error) => {
        if(error) {
            res.status(500).json({msg: 'Sorry, internal server error'});
            return;
        }
            //Combatant
            return res.json({
            msg: 'Your combatant has been saved!!!'
            });  
        
    })
});

router.post('/battleSave', async (req, res, next) => {
    console.log('Body: ', req.body);
    const data = req.body;
    const newBattle = new Battle(data);
    newBattle.save(
        (error) => {
            if(error) {
                return res.status(500).json({msg: 'Sorry, internal server error'});
            }

            //Battle
            // return res.json({
            //     msg: 'Your battle has been saved!!!'
            // });  
            // return res.redirect('/battle?_id='+newBattle._id)

            var redir = { redirect: '/roll/?_id=', _id: newBattle._id, skirmish: data};
            return res.json(redir);
            
            //return res.redirect('/api/battle')
        
    })
    // .then( () => { res.redirect('/api/roll?_id='+newBattle._id); })
    //.catch( err => console.log(err))
});

router.get('/roll', function(req, res, next) {
    Battle.findOne({
        _id: req.query._id
    })
        .then(data => {
            console.log('Combantants: ', data);
            res.json(data);

        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

router.post('/rollSave', async (req, res, next) => {
    const data = req.body;
    const newBattle = new CalculatedBattle(data);
    newBattle.save((error) => {
        if(error) {
            res.status(500).json({msg: 'Sorry, internal server error'});
            return;
        }
            //Battle
            // return res.json({
            //     msg: 'Your battle has been saved!!!'
            // });  
            // return res.redirect('/battle?_id='+newBattle._id)
            var redir = { redirect: '/battle/?_id=', _id: newBattle._id, skirmish: data};
            return res.json(redir);
            //return res.redirect('/api/battle')
        
    })
});

router.get('/battle', (req, res, next) => {
    CalculatedBattle.findOne({ 
        _id: req.query._id
    })
        .then((data) => {
            console.log('Combantants: ', data);
            res.json(data);

        })
        .catch((error) => {
            console.log('error: ', error);
        });
});


router.get('/name', (req, res) => {
    const data = {
        username: 'peterson',
        age: 5
    };
    res.json(data);
});

module.exports = router;