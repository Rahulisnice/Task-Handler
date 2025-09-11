const testingController = (req, res) => {
  res.status(200).send('<h1> Response from test MVC pattern </h1>');
}

module.exports = {testingController}