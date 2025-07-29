const authAdmin = function(req,res,next)
{

const token  = 'HHH'

    const isAuthorized = token === 'HHH'

    console.log("authenticated gets checkjed")

    if(!isAuthorized)
    {
        res.status(401).send("UnAuthorized")
    }
   
    else{
        next()
    }

}

module.exports = {authAdmin}