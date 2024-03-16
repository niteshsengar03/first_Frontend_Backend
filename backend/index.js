import express from "express";
import cors from "cors";

const app = express();

// Allow all origins for demonstration purposes
app.use(cors());

app.get('/', (req, res) => {
  const principal = parseInt(req.query.principal);
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);
  const interest = (principal + rate + time) / 100;
  const total = principal + interest;

  // Set CORS headers explicitly
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  res.send({
    total: total,
    interest: interest,
  });
});

app.listen(3000, () => {
  console.log('Starting server on port 3000');
});
