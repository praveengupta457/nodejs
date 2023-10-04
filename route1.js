var express=require('express')
var router = express.Router()

router.get('/',function(req,res){
    res.send('get the router')
})
router.post('/',function(req,res){

    res.send('post the router')
})
module.exports=router;