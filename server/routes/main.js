var express = require('express');
var router = express.Router();
// const User = require('../schemas/User') // 스키마


router.post("/", (req, res, next) => {
  const userID = req.body.username;
  res.json({ userID : userID });
})

module.exports = router;

/* 
response로 _id, name 담긴 json을 반납하는데, 
로그인을 할 게 아니기 때문에 이거를 프론트단에서도 계속 들고 다녀야 (?) 함
*/ 