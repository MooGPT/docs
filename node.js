app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://www.moogpt.com");
  next();
});
