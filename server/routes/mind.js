var express = require('express');
var router = express.Router();

router.post('/', (req, res, next) => {
  const mindID = req.body.mindID;
  const mindTemp = Number(req.body.mindTemp);
  
  const returnKey = (ID, temp) => {
    /* 천둥 */
    if (ID === "천둥이 치는 중 ⚡️") {
      if (temp >= -20 && temp < 0) {
        res.json({key1: '기분 좋아지는', key2: '거부할 수 없는 이끌림', key3:'어두운', key4:'논쟁의 중심'});
      } else if (temp >= 0 && temp < 10) {
        res.json({key1: '어두운', key2: '감상적', key3:'시트콤', key4:'기분 좋아지는'});
      } else if (temp >= 10 && temp < 20) {
        res.json({key1: '음산한', key2: '불길한', key3:'어두운', key4:'위트 있는'})
      } else if (temp >= 20 && temp < 30) {
        res.json({key1: '폭력적인', key2: '아드레날린 폭발', key3:'시트콤', key4:'판타지 시리즈'})
      } else {
        res.json({key1: '관능적', key2: '폭력적인', key3: '도발적인', key4: '아드레날린 폭발'})
      }
    }
    
    /* 비 */
    else if (ID === "비가 내리는 중 🌧") {
      if (temp >= -20 && temp < 0) {
        res.json({key1: '눈물샘 자극', key2: '기분 좋아지는', key3:'진심 어린', key4:'감명을 주는'});
      } else if (temp >= 0 && temp < 10) {
        res.json({key1: '감상적', key2: '잔잔한', key3:'힐링', key4:'가족'});
      } else if (temp >= 10 && temp < 20) {
        res.json({key1: '감상적', key2: '위트 있는', key3:'마법 속으로', key4:'진실을 찾아'})
      } else if (temp >= 20 && temp < 30) {
        res.json({key1: '청춘극', key2: '애니메이션 영화', key3:'진심 어린', key4:'판타지 시리즈'})
      } else {
        res.json({key1: '아드레날린 폭발', key2: '색다른', key3: '무서운', key4: '음산한'})
      }
    }

    /* 눈 */
    else if (ID === "눈이 내리는 중 ❄️") {
      if (temp >= -20 && temp < 0) {
        res.json({key1: '감정을 파고드는', key2: '기분 좋아지는', key3:'눈물샘 자극', key4:'가족'});
      } else if (temp >= 0 && temp < 10) {
        res.json({key1: '감명을 주는', key2: '잔잔한', key3:'기분 좋아지는', key4:'판타지 시리즈'});
      } else if (temp >= 10 && temp < 20) {
        res.json({key1: '가족', key2: '거부할 수 없는 이끌림', key3:'발상의 전환', key4:'힐링'})
      } else if (temp >= 20 && temp < 30) {
        res.json({key1: '유쾌 발랄', key2: '위트 있는', key3:'코미디', key4:'애니메이션 영화'})
      } else {
        res.json({key1: '애니메이션 영화', key2: '긴장감 넘치는', key3: '흥미진진', key4: '유쾌 발랄'})
      }
    }

    /* 흐림 */
    else if (ID === "구름 많은 ⛅️") {
      if (temp >= -20 && temp < 0) {
        res.json({key1: '어두운', key2: '거부할 수 없는 이끌림', key3:'서부극', key4:'시대극'});
      } else if (temp >= 0 && temp < 10) {
        res.json({key1: '감명을 주는', key2: '잔잔한', key3:'감상적', key4:'사극'});
      } else if (temp >= 10 && temp < 20) {
        res.json({key1: '가족', key2: '잔잔한', key3:'발상의 전환', key4:'힐링'})
      } else if (temp >= 20 && temp < 30) {
        res.json({key1: '위트 있는', key2: '색다른', key3:'진심 어린', key4:'허당 매력'})
      } else {
        res.json({key1: '관능적', key2: '아드레날린 폭발', key3: '도발적인', key4: '진실을 찾아'})
      }
    }


    /* 맑음 */
    else if (ID === "해 쨍쨍, 맑은 하루 ☀️") {
      if (temp >= -20 && temp < 0) {
        res.json({key1: '아드레날린 폭발', key2: '색다른', key3:'허당 매력', key4:'로맨틱'});
      } else if (temp >= 0 && temp < 10) {
        res.json({key1: '잔잔한', key2: '마법 속으로', key3:'기분 좋아지는', key4:'로맨틱'});
      } else if (temp >= 10 && temp < 20) {
        res.json({key1: '시트콤', key2: '설렘주의', key3:'청춘 영화', key4:'흥미진진'})
      } else if (temp >= 20 && temp < 30) {
        res.json({key1: '유쾌 발랄', key2: '위트 있는', key3:'코미디', key4:'로맨틱'})
      } else {
        res.json({key1: '관능적', key2: '무서운', key3: '음산한', key4: '불길한'})
      }
    }
  }
  returnKey(mindID, mindTemp);
})

module.exports = router;