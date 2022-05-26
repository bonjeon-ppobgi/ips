var express = require('express');
const app = require('../app');
const mind = require('../schemas/mind');
var router = express.Router();
const config = require('../config/key');

const { MongoClient } = require("mongodb");
const client = new MongoClient(config.mongoURI);
async function run() {
  try {
    await client.connect();
    const database = client.db("keyword");
    const movies = database.collection("tingle");
    const options = {
      projection: { _id: 0 },
    };
    const cursor = movies.find({}, options);
    if ((await cursor.countDocuments) === 0) {
      console.log("데이터가 없습니다.");
    }
    const result = await cursor.toArray();
    const jresult = JSON.stringify(result);
    console.log(jresult);
    /* send */
  } finally {
    await client.close();
  }}

run();