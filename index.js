// const express = require("express");
// const path = require("path");
// const bodyParser = require('body-parser')
// const app = express();
// const port = 3002;
//
// app.use(express.static("client"));
// app.use(bodyParser.json())
//
// app.set("view engine", "ejs");
// app.get('/order',((req,res)=>{
//     res.render(__dirname + '/client/order.ejs' ,{mk:'asdadasdadda'})
// }))
// app.use("/", require(path.join(__dirname, "routes", "home")));
// app.use("/home", require(path.join(__dirname, "routes", "home")));
// app.use("/menu", require(path.join(__dirname, "routes", "menu")));
// app.use("/searchmeal", require(path.join(__dirname, "routes", "searchmeal")));
// app.use("/order", require(path.join(__dirname, "routes", "order")));

//
//


const express = require("express");
const path = require("path");
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
const port = 9090;
const homeRouter = require('./routes/home')
const menuRouter = require('./routes/menu')
const searchmealRouter = require('./routes/searchmeal')
const orderRouter = require('./routes/order')


app.use('/',homeRouter);
app.use('/home',homeRouter);
app.use('/menu',menuRouter);
app.use('/searchmeal',searchmealRouter);
app.use('/order',orderRouter);





app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.set('views', path.join(__dirname,'views'));
app.set("view engine", "ejs");

app.engine('html',require('ejs').renderFile);






app.use(express.static(path.join(__dirname, "public")));
app.listen(port, () =>{
        console.log(`App listening at http://localhost:${port}`);
});