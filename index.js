// run `node index.js` in the terminal

// console.log(`Hello Node.js v${process.versions.node}!`);

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './tender/tenders/tenderRouter.js';
dotenv.config();

const app = express();

app.use(cors());
console.log('Connecting to:', process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => console.log('db connected'))
  .catch((err) => console.error('connection error:', err));

  app.use('/',router)

app.listen(4000, () => {
  console.log('server is running');
});
