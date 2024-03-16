import express from "express";
import cors from "cors";

const app = express();

// Custom CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Enable CORS for all routes
app.use(cors());

// Your existing route handler
app.get("/", (req, res) => {
  const principal = parseInt(req.query.principal);
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);
  const interest = (principal + rate + time) / 100;
  const total = principal + interest;

  res.send({
    total: total,
    interest: interest,
  });
});

app.listen(3000, () => {
  console.log("Starting server on port 3000");
});

