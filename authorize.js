const authorize = (req,res,next) =>{
    const {user} = req.query;
    if(user === 'John'){
        req.user = {name: 'john',id:3}
        console.log('Authorized');
        next()
    }else{
        res.status(404).send('Unauthorized')
    }
}

module.exports = authorize 