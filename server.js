const express = require("express");
const app = express();
const port = 3000;
const crypto = require("crypto");
// Middleware to parse JSON requests
app.use(express.json());

// Define a route
app.get("/", (req, res) => {

  console.log(req.query, "req.query");

  const challengeCode = req.query.challengeCode;
  const clientSecret = "iaMNAvNjwwYioxgy";

  console.log(challengeCode, "challengeCode");

  if (challengeCode) {
    // Compute the HMAC SHA-256 hash
    const hmac = crypto.createHmac("sha256", clientSecret);
    hmac.update(challengeCode);
    const challengeResponse = hmac.digest("hex");

    console.log(challengeResponse, "challengeResponse");

    res.status(200).json({
      challengeCode: challengeCode,
      challengeResponse: challengeResponse,
    });


  } else {
    res.status(400).json({ error: "Invalid challenge code" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
