module.exports = (app, db) => {
    // app.get('/api/getInfo', (req, res) => {
    //     res.send('filler text')
    // })
    
    // app.get('/api/helper', function(req, res){});
    
    app.post('/db/food', function(req, res){
        console.log(req.body)
        db.create(req.body).then(() =>{
        res.send('Data Received!').catch(err => {throw err})
        })
    });
};