const ftp = require("basic-ftp")
const express = require('express');
const bodyParser = require('body-parser');

example();

async function example() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host : "",
            user :  "",
            password : "",
            secure: false
        });
        await client.cd("")
        console.log(await client.list())
        // await client.uploadFrom("README.md", "README_FTP.md")
        // await client.downloadTo("README_COPY.md", "README_FTP.md")
    } catch (err) {
        console.log(err)
    }
    client.close()
}


    const urlencodedParser = bodyParser.urlencoded({extended:false});

const app = express();
app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

const logurl = req => console.log(req.url);

app.get('/',(req,res)=>{
    // logurl(req);
    res.render("index");

});

app.get('/about',(req, res)=>{
    logurl(req);
    res.render('about');
});

app.post("/about",urlencodedParser,(req,res)=>{
    if (!req.body) return res.sendStatus(400);
    // console.log(req.body)

    res.render('about-success',{data: req.body});
});

app.get('/news/:id',(req,res)=>{
    // logurl(req);
    // console.log(req.query);
    const obj={
        title:"NEWS",
        id:4,
        paragraphs:["kdfsjgnszdkljfn","sadelkfjsaf","lskdfjlkdsfjslkdjf",1234]};
    res.render('news',{newsId: req.params.id, obj:obj});
});

app.listen(3000);
console.log("Listen 3000");
