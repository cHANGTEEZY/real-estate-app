module.exports = async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    return res.status(403).json({ message: "Unauthorized" });
  }
};
