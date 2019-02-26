module.exports = (app, db) => {
    // app.get('/api/getInfo', (req, res) => {
    //     res.send('filler text')
    // })

    // app.post('/db/food', function(req, res){
    //     console.log(req.body)
    //     // db.create()
    //     res.send('Data Received!')
    // });
    app.post('/db/food', (req, res) => {
        // dbRoute.create(req.body).then(() =>{
        //     res.send("Book Saved!")
        // }).catch(err => {throw err;})
        console.log(req.body)
    })
};