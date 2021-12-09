function auth(req, res, next) {
  console.log("req.body ", req.body);
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  const apiKey = process.env.API_KEY;

  if (!req.body) {
    return res
      .status(400)
      .json({ success: false, message: "Provide data", data: null });
  }
  if (!token || token !== apiKey) {
    return res
      .status(400)
      .json({ success: false, message: "Not Authorise", data: null });
  }
  next();
}
module.exports = auth;
