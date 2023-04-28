import express, { Application, Request, Response } from "express";
import "reflect-metadata";
import morgan from "morgan";
import bodyParser from "body-parser";
import { AppDataSource } from "./config/database";
import Router from "./routes/Routes";
import { checkJwt } from "./middleware/extract.JWT"
import swaggerDocs from "./utils/swagger";


const port = process.env.port || 3000;

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.set('view engine', 'ejs');
app.use('/public/', express.static('./public'));

app.use(Router);


// //GET
app.get('/', async (req, res) => {
  res.render('index', {data: 'data'});
});

app.get('/login', (req, res) => {
  res.render('login', {data: 'data'});
});

app.get('/rejestracja', (req, res) => {
  res.render('register', {data: 'data'});
});

app.get('/trening', (req, res) => {
  res.render('workout', {data: 'data'});
});

app.get('/cwiczenia', (req, res) => {
  res.render('exercises', {data: 'data'});
});

app.get('/profil', (req, res) => {
  res.render('profile', {data: 'data'});
});

//POST
app.post('/login-data', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.post('/register-data', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//API

app.get('/cwiczenia/biceps', (req, res) => {
  
});

app.listen(port, () => {
  console.log("Server is running on port", port);
  swaggerDocs(app, Number(port));
});