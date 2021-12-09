const remove = (model) => async (req, res) => {
  try {
    await model.deleteMany();
    res.status(200).json({ success: true, message: "Deleted" });
  } catch (err) {
    res.status(400).json({ success: false, err: err?.message || err });
  }
};
module.exports = remove;
