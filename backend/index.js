const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
const https = require("https");
// const fs = require("fs");
const path = require("path");
// const authRoutes = require("./Routes/authRoutes.js");
// const userPreferenceRoutes = require("./Routes/userPreferenceRoutes.js");
app.use(bodyParser.json());

// Serve static files from the "downloads" directory
// app.use("/downloads", express.static(path.join(__dirname, "downloads")));

app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(express.json());

// const cookieParser = require("cookie-parser");

// app.use(cookieParser());

// app.use("/api", require("./Routes/contentUploadRoute"));
// dotenv.config();

// app.use("/api/auth", authRoutes);
// app.use("/api/userPreference", userPreferenceRoutes);
app.use("/api", require("./Routes/lmsRoutes"));
// app.use("/api", require("./Routes/categoryRoute"));

app.post("/generate-poster", (req, res) => {
  const { companyName, postDescription } = req.body;

  const prompt = `Generate a poster for ${companyName} in english. The poster should attract people by highlighting: ${postDescription}. Create a simple poster.`;

  const options = {
    method: "POST",
    hostname: "open-ai21.p.rapidapi.com",
    port: null,
    path: "/texttoimage2",
    headers: {
      "x-rapidapi-key": "e9b0c87e6amsh6a6a105e6646513p139ac4jsn2172b23e94ea",
      "x-rapidapi-host": "open-ai21.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };

  const request = https.request(options, (response) => {
    const chunks = [];

    response.on("data", (chunk) => {
      chunks.push(chunk);
    });

    response.on("end", () => {
      const body = Buffer.concat(chunks).toString();
      res.json(JSON.parse(body));
    });
  });

  request.write(
    JSON.stringify({
      text: prompt,
    })
  );
  request.end();
});

app.listen(5000, async () => {
  console.log("connected to port" + 4000);
  try {
    await mongoose.connect(
      "mongodb+srv://sverma4be21:7vh4djSQN9HoRhus@cluster0.tnnmrss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error.message);
  }
});
