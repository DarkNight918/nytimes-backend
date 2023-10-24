const axios = require("axios");

// function to get news of NYTimes
exports.getNews = async (req, res) => {
  try {
    // API URL to get top stories of NYTimes
    const API_URL = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.API_KEY}`;

    const response = await axios.get(API_URL);

    return res.status(200).json(response.data);
  } catch (error) {
    if (error.response && error.response.data.fault) {
      return res.status(401).json({ message: "Invalid API key" });
    }
    return res
      .status(500)
      .json({ message: "Server error.", error: error.message });
  }
};
