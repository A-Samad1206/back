const create = (model) => async (req, res) => {
  try {
    const result = await model.create(req.body);
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    console.log("Err from create", err);
    res.status(400).json({ success: false, err: err?.message || err });
  }
};
module.exports = create;
