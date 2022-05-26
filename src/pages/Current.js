import {useState,useEffect} from "react";
import Header from "../component/common/Header";
import "../styles/Main.css"
import {Link} from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';
import { render } from "react-dom";


function CurrentPage(){
    const history = useHistory();
    const location = useLocation();
    const name = location.state.username;
    // console.log(name);

    //useState() -> 변하는 값을 저장
    const [weatherID, setWeatherID] = useState('');
    const [mindID, setMindID] = useState('로딩중 . . .');
    const [mindTemp, setMindTemp] = useState('로딩중 . . .');
    const [city, setCity] = useState('로딩중 . . .');

    const API_KEY = "97796e24b0271bc1451dd1529b2acf6b";

        /* 실제 날씨 -> 마음 날씨화 하는 함수 */


    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(onGeoOK, onGeoFail)
        }, []);

    function onGeoOK(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setCity(data.name);
            setMindTemp(data.main.feels_like); // mindtemp 를 체감온도로 했음
            setWeatherID(Number(data.weather[0].id));
        })
        .then(()=>{convertID(weatherID)});
    }
    function onGeoFail() {
        alert ("위치를 찾을 수 없어요 🥲\nGPS 권한을 허용해주세요.")
    }

    function convertID(weatherID) {
        if (weatherID>=200 && weatherID<300) setMindID("천둥이 치는 중 ⚡️");
        if (weatherID>=600 && weatherID<700) setMindID("눈이 내리는 중 ❄️");
        else if (weatherID>=700 || weatherID>800) setMindID("구름 많은 ⛅️"); // 700 이상이거나 800 초과여야 구름... 딱 800이 맑음임
        else if (weatherID=800) setMindID("해 쨍쨍, 맑은 하루 ☀️");
        else setMindID("비가 내리는 중 🌧");
    }

    return(
        <>
        <Header/>
        <p class="exp">만나서 반가워요, <a class="username">{ name }</a> 님!</p>
        <div class="exp">현재 <a class="username">{ name }</a> 님이 계신 
        <a class="username"><span> { city }</span></a>의 날씨를 알려드릴게요.
        <br></br></div>
        <br></br>
        <p class="result-box">
            <div class="exp">체감 온도는 <a class="temp"><span>{ mindTemp }🌡 도</span></a> 이며,</div>
            <div class="exp">오늘의 날씨는 <a class="mind"><span>{ mindID }</span></a> 랍니다!</div>
        </p>
        <p class="exp">실제 날씨에 기반한 키워드로 추천 받아보시겠어요?</p>
        <div class="webname">
            <button class="normalBtn-large" onClick={()=>{
                history.goBack();
            }}> 싫어요 😤 </button>
            <Link to={{
                pathname:'/keyword',
                state: {
                    userID: name,
                    mindID: mindID,
                    mindTemp: mindTemp
                }
                    }}>
                <button class="another"> 그렇게 할래요! </button>
            </Link>
            </div>

        </>
        
    )
}

export default CurrentPage;