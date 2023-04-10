import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./database";
import { User } from "./entity/User";
import { UserDetails } from "./entity/UserDetails";

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use('/public/', express.static('./public'));

const port = process.env.port || 3000;

//GET
app.get('/', async (req, res) => {
   const userRepository = AppDataSource.getRepository(User);
  // const userDetailsRepository = AppDataSource.getRepository(UserDetails);
  const allRecords = await userRepository.find();

  // let userDetails : UserDetails = new UserDetails();
  // userDetails.name = "Jason";
  // userDetails.surname = "Stachon";

  // const userDetailsInserted = await userDetailsRepository.save(userDetails);

  // let user : User = new User();
  // user.email = "jason@mail.pl";
  // user.password = "cat";
  // user.userDetails = userDetailsInserted;

  // const userInserted = await userRepository.save(user); 

  //res.render('index', {data: 'data'});
  res.json(allRecords);
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
  console.log(`listening on port ${port}`);
});