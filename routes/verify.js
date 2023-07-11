var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    let data = req.body;
    if (data.code == "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3") {
        res.send({"status":"valid", "url":"https://www.fhsdkfshalkdfjhlksjd.com"});
    } else {
        res.send({"status":"invalid"})
    }
});

module.exports = router;
