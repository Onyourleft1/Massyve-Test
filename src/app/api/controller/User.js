module.exports = {
  get: async (req, res) => {
    // const { id } = req.params;
    return res.status(200).json("Hello");
  },
};
