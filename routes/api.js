import express from "express"
const router = express.Router()

/* GET users listing. */
router.get('/test', function(req, res, next) {

  res.status(200);

  res.json({
    message: "Ok"
  });

})

export default router
