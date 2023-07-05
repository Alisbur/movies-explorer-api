const express = require('express');

require('dotenv').config();

const {
  PORT = 3000,
  NODE_ENV,
  PROD_DB_HOST,
  PROD_DB_PORT,
  PROD_DB_NAME,
} = process.env;

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const { errors } = require('celebrate');

const { DEV_DB_HOST, DEV_DB_PORT, DEV_DB_NAME } = require('./utils/dbconfig');
const errorHandler = require('./middlewares/error-handler');
const { limiter } = require('./middlewares/rate-limiter');
const { requestLogger, errorLogger } = require('./middlewares/logger');

mongoose.connect(NODE_ENV === 'production'
  ? `mongodb://${PROD_DB_HOST}:${PROD_DB_PORT}/${PROD_DB_NAME}`
  : `mongodb://${DEV_DB_HOST}:${DEV_DB_PORT}/${DEV_DB_NAME}`);

const app = express();

app.use(cors());
app.use(helmet());
app.use(limiter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

app.use(require('./routes/index'));

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT);
