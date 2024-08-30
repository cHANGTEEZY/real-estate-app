import dotenv from "dotenv";
dotenv.config();

module.exports = async (req, res) => {
  try {
    const jwtToken = req.header("token");

    if (!jwtToken) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const payload = jwt.verify(jwtToken, process.env.jwtSecretKey);
  } catch (error) {
    console.error(error.message);
    return res.status(403).json({ message: "Unauthorized" });
  }
};
