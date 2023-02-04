const {getDoc} = require("../utils/utils");
const {wrap} = require("../middleware");
exports.apis=(app)=>{
    app.get("/test",wrap(async(req,res,next)=>{
        res.send({"data":"hamlet"});
    }));

    app.post("/getFb",wrap(async(req,res,next)=>{
        res.send(await getDoc(req.body.path));
    }));
}
