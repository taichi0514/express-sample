var express = require('express');
// ルーティングするで
var router = express.Router();

// routerにルーティングの動作を書いてく
router.get('/',function(req,res){
    res.json({
        message:"Hello,world"
    });
});

//routerをモジュールとして扱う準備
module.exports = router;