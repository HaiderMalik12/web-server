/**
 * Created by HaiderNazir on 1/19/2016.
 */
/*route level middleware
 First execute this then do / this Operation
 * */

var middleware={
    requireAuthentication:function(req,res,next){
        console.log('Private Rout hit');
        next();
    },
    logger:function(req,res,next){
        console.log('Request : '+req.method +'  '+req.originalUrl +  '  '+ new Date().toString());
        next();
    }
};

module.exports=middleware;