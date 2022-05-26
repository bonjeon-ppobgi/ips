import React, { useRef, useEffect, useState } from 'react';
import "../styles/App.css"
//import { Row } from 'antd';
//import GridCards from '../common/GridCards';
//import styled from 'styled-components';
import Header from '../component/common/Header';
import {Link, useHistory, useLocation } from 'react-router-dom';
import axios from "axios";
import Grid from '../component/pretty/grid';


function ResultPage() {
  const history = useHistory();
  const location = useLocation();
  const word = location.state.word;
  const username = location.state.userID;

  /* 컨텐츠 끌어오는 부분 */
  /* 이 변수명대로 쓰되, return문 안에서 쓸때는 변수에 {} 씌워서 써줘~~ */
  const url = "http://localhost:8081/api/result";


  const [info, setInfo] = useState([]);

  useEffect(()=>{
    loadInfo()
  }, []);

  const loadInfo = async () => {
    let res = await axios.post(url, { word:word });
    setInfo(res.data.result);
    console.log(res.data);
  }
  
  return (
    <>
    <Header />
      <div className = ''style={{display: 'flex', justifyContent:'center'}}>
        <p class='keyword'># { word }</p>
      </div>
      <div class="webname">
        <p class="exp">키워드를 선택하신 <a class="username">{username}</a> 님을 위해 마음기상청이 준비한 컨텐츠들이에요.</p>
      </div>
      <div class="exp">
      <button class="another" onClick={()=>{
                history.goBack();
            }}> 다른 키워드로 볼래요 </button>
      </div>

      <div class="media-column">
        {info.map(data => (
          <div style={{margin:"10px auto"}}>
            <Link to={{
            pathname:"/contents",
            state:{
              title:data.title,
              img:data.img,
              genre:data.genre,
              creator:data.creator,
              actor:data.actor,
              summary:data.summary,
            }}}>
            <div key={data.title} class="media-contents">
              <img src={data.img} alt={data.title}/>
              <div class="media-title">{data.title}</div>
            </div>
          </Link>
          </div>

        ))}
      </div>

    </>
  )
}


export default ResultPage