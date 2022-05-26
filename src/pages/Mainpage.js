import { useState , useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Header from '../component/common/Header';
import { useLocation } from "react-router-dom";
import { Component } from "react";

function MainPage(props) {

    //useState() -> 변하는 값을 저장
    const [userID, setUserID] = useState('');

    // input에 쓴 값으로 state값 변화시켜주는 함수
    const onTextChange = (e) => {
        setUserID(e.target.value); // 이벤트를 받는 타겟의 value값으로 바꿔줘!
    }

    // 유저 state값 초기화 함수
    const userReset = () => {
        setUserID('');
    }
        
  return (
      <>
      <Header />
      <div style={{ minHeight: 'calc(100vh - 80px)' }}>
        <form>
            <div class="mainpage">
            <img src='' style={{ justifyContent: 'center', width: '30%', alignContent: 'center'}}></img>
            <div class="webname">마음기상청</div>
            <p class="exp">당신의 마음날씨에 따른 콘텐츠를 추천해드릴게요.</p>
            <input 
                type = "text"
                onChange={onTextChange}
                value = {userID}
                class="inputname"
                id="name"
                name="username"
                placeholder='이름을 입력해주세요.'></input>
            </div>
            <div class="webname">
                <Link to={{
                    pathname: '/main',
                    state: {
                        username: userID
                    }
                }}>
                <button class='another'>마음 날씨로 확인하기</button>
                </Link>
                <Link to={{
                    pathname: '/current',
                    state: {
                        username: userID
                    }
                }}>
                <button class='another'>실제 날씨로 확인하기</button>
                </Link>
            </div>
        </form>
    </div>
    </>
  )
}


export default MainPage