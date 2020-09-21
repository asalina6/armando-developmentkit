const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const chalk = require('chalk');
const debug = require('debug')('server');
const fs = require('fs');

dotenv.config({ path: path.resolve(__dirname, './credentials.env') });

const app = express();

const port = process.env.SERVER_PORT || 3001;

app.use(
  morgan('combined'),
  express.static(path.join(__dirname, 'src')),
  cors({credentials:true, origin: 'http://localhost:3000'}),
  cookieParser(),
  express.urlencoded({ extended: false }),
  express.json()
);


//Routers and Router functions

//const blogpostRouter = require('./routes/blogpostRoutes')();

//applying router middleware, mounting them on their paths

//app.use('/blogpost', blogpostRouter);


//This starts the connection to MongoDB and then starts the server port. Async function.
//const db = connectDB();

//For SEO purposes, uses ReactDOMServer
//to show html before React renders

/*app.get("/", (req,res)=>{
  res.send(serverRender());
});*/

app.listen(port, () => {
  debug(chalk.green(`Listening on port ${port}`));
});