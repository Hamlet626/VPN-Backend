const {getDoc} = require("../utils/utils");
exports.apis=(app)=>{
    app.get("/test",async(req,res,next)=>{
        res.send("hamlet");
    });

    app.post("/getFb",async(req,res,next)=>{
        res.send(await getDoc(req.body.path));
    });
}
