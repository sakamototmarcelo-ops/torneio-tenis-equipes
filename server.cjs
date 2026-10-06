const http=require('http'),fs=require('fs'),path=require('path');
http.createServer((req,res)=>{const p=req.url==='/'?'/index.html':req.url; const file=path.join(__dirname,p); fs.readFile(file,(e,d)=>{if(e){res.writeHead(404);res.end('Not found')}else{res.writeHead(200);res.end(d)}})}).listen(4173);
