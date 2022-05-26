import {useState} from "react";
import Header from "../component/common/Header";
import "../styles/Main.css"
import {Link} from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';
import { render } from "react-dom";

function Main(){
    const history = useHistory();
    const location = useLocation();
    const name = location.state.username;
    console.log(name);

    //useState() -> 변하는 값을 저장
    const [mindID, setMindID] = useState('해 쨍쨍, 맑은 하루 ☀️');
    const [mindTemp, setMindTemp] = useState('0');

    // input에 쓴 값으로 state값 변화시켜주는 함수
    const onMindChange = (e) => {
        setMindID(e.target.value);
    }
    const onTempChange = (e) => {
        setMindTemp(e.target.value)
    }

    // state값 초기화 함수
    const mindReset = () => {
        setMindID('해 쨍쨍, 맑은 하루 ☀️');
        setMindTemp('0');
    }

    // const mindI = this.state.mindID;
    // const mindT = this.state.mindTemp;
    
    return(
        <>
        <Header/>
        <p class="exp">만나서 반가워요, <a class="username">{ name }</a> 님!</p>
        <div class="exp-title">마음 날씨와 마음 온도를 선택해주세요.</div>
        <br></br>
        <div class="webname">
            <button className="w-thunder" name="천둥" value="천둥이 치는 중 ⚡️" onClick={onMindChange}>천둥 ⚡️</button>
            <button className="w-rain" name="비" value="비가 내리는 중 🌧" onClick={onMindChange}>비 🌧</button>
            <button className="w-snow" name="눈" value="눈이 내리는 중 ❄️" onClick={onMindChange}>눈 ❄️</button>
            <button className="w-cloudy" name="비" value="구름 많은 ⛅️" onClick={onMindChange}>흐림 ⛅️</button>
            <button className="w-sunny" name="비" value="해 쨍쨍, 맑은 하루 ☀️" onClick={onMindChange}>맑음 ☀️</button>
            <br></br>
            <input 
                type="range" 
                name="mindTemp"
                min="-20" 
                max="50" 
                step="1"
                defaultValue={0}
                onChange={onTempChange}>
            </input><br></br>
        </div>
        <br></br>
        <div class="result-box">
            <div class="exp">현재 <a class="username"><span>{ name }</span></a>님의</div>
            <div class="exp">마음 온도는 <a class="temp"><span>{ mindTemp }</span></a> 🌡 도,</div>
            <div class="exp"><a class="mind"><span>{ mindID}</span></a> 이군요.</div>
        </div>
        <div class="webname">
            <button class="normalBtn" onClick={()=>{
                history.goBack();
            }}> prev </button>
            <button class="normalBtn" onClick={mindReset}>다시 선택할래요!</button>
            <Link to={{
                pathname:'/keyword',
                state: {
                    userID: name,
                    mindID: mindID,
                    mindTemp: mindTemp
                }
                    }}>
                <button class="namesubmit"> next </button>
            </Link>
        </div>
       
        </>
        
    )
}

export default Main;