module.exports = makeJade;

function makeJade(root) {
    return function (req, res, next) {
        var path = require('path'), fs = require('fs'), jade = require('jade');

        if(path.extname(req.url) != '.html'){
            next();
            return;
        }

        fs.readFile(root+req.url,{encoding:"utf8"},function(err, data){
            if (err){
                jade.renderFile(root+'/'+path.basename(req.url,'.html')+'.jade', {}, function (err, html) {
                // body...
                if (err){
                        res.writeHead(404, {});
                        res.end();
                        return;
                    }
                res.writeHead(200,{
                    "Content-Length": css.toString.length,
                    "Content-type": "text/css; charset=UTF-8"
                    });
                res.end(html);

            });
                return;
            };

            res.end(data);
            
        })
        

    }
}
    
