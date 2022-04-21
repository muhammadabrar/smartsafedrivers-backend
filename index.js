
const mongoose = require('mongoose');
// let Exercise = require('./models/model');



const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

var cors = require('cors');
// app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cors())
app.set('views', __dirname + '/views/');
app.use(express.static('views'));
app.use('/views', express.static('views'));
app.use(bodyParser.json());
 


//database=============================================================
const uri = 'mongodb+srv://SmartSafedrivers:SafeLocKer229@cluster0.x7ejc.mongodb.net/Cluster0?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
//database=============================================================

// Access frontend
router.get('/', (req, res) => {
  res.render('static/index');
});


// app.get('/api', async (req, res) => {
 
 
//   Exercise.find()
//     .then(exercises => res.json(exercises))
//     .catch(err => res.status(400).json('Error: ' + err));

// })

// app.post('/api/add', async (req, res) => {
//   const username = req.body.username;
//   let seqgtet = await Exercise.findOne().sort({ username: -1 }).exec();

//   let seq = 1
//   if(seqgtet){
//     seq = seqgtet.seq + 1
//   } 
//   console.log(seqgtet)
//     const newExercise = new Exercise({
//       username,
//       seq
//     });
  
//     newExercise.save()
//   .then(() => res.json({msg: 'Exercise added!', data: newExercise}))
//   .catch(err => res.status(400).json('Error: ' + err));
// })


// app.delete('/api/delete', async (req, res) => {
//   Exercise.deleteMany()
//     .then(exercises => res.json(exercises))
//     .catch(err => res.status(400).json('Error: ' + err));
// })

//routers??????????????????????????????????????????//////////////////////////////////////////

let ordersRoutes = require("./routes/orders")
let queriesRoutes = require("./routes/queries")

let feedbacksRoutes = require("./routes/feedbacks")


app.use('/api/orders', ordersRoutes)
app.use('/api/queries', queriesRoutes)
app.use('/api/feedbacks', feedbacksRoutes)



app.listen(process.env.port || 5000);

console.log('Web Server is listening at port http://localhost:' + (process.env.port || 5000));