module.exports = (app, db) => {
    //gets user weight submissions for graph
    app.get('/db/getweights/:id', (req, res) => {
        db.weight.find({userId: req.params.id}, function(err, result){
            if(err){
                throw err;
            } else {
                console.log(result);
                res.send(result);
            }
        });
    });

    //searches for user data
    app.get('/db/finduser/:username/:password', (req, res) => {
        const UN = req.params.username;
        const PW = req.params.password
        db.users.find({}, function(err, result){
            if (err){
                throw err;
            } else {
                let match = false;
                let idIndex = "";
                for( var i = 0; i < result.length; i++){
                    if(result[i].username === UN && result[i].password === PW){
                        match = true
                        idIndex = result[i];
                    }
                }
                if(match === true){
                    var fullResponse = {
                        ans:true,
                        data: idIndex
                    }
                    res.send(fullResponse)
                } else {
                    var fullResponse = {
                        ans: false,
                        data: null
                    }
                    res.send(fullResponse)
                }
            }
        })
    })
    //gets user food data
    app.get('/db/getFoods/:id', (req, res) => {
        db.food.find({userId: req.params.id}, function(err, result){
            if (err){
                throw err;
            } else {
                res.json(result)
            }
        })
    })

    //creates new user
    app.post('/db/newuser', (req, res) => {
        console.log(req.body)
        db.users.create(req.body).then(() => {
        res.send('Welcome ' + req.body.username + '!')
        });
    });

    //posts food data
    app.post('/db/food', function(req, res){
        console.log(req.body)
        db.food.create(req.body).then(() => {
        res.send('Food data received!')
        });
    });

    //posts weight data
    app.post('/db/weight', function(req, res){
        console.log(req.body);
        db.weight.create(req.body).then(() => {
        res.send('Weight entry received!')
        });
    });
};