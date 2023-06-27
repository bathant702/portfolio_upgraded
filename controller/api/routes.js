module.exports = {
    index
}

async function index(req, res){
    try{
        res.status(200).json()
    }catch(err){
        res.status(400).json(err)
    }
}
