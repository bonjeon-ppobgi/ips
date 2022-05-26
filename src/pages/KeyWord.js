import { useState, useEffect } from "react";
import "../styles/Main.css"
import axios from "axios";
import Header from "../component/common/Header";
import {Link, useHistory, useLocation} from 'react-router-dom';

function Keyword(props){
    let history = useHistory();
    const location = useLocation();
    const url = "http://localhost:8081/api/mind";

    const username = location.state.userID;
    const mindID = location.state.mindID;
    const mindTemp = location.state.mindTemp;

    const [keys, setKeys] = useState([]);

    useEffect(()=> {
        axios.post(url, { mindID: mindID, mindTemp: mindTemp })
        .then(res=>{
            const key1=res.data.key1;
            const key2=res.data.key2;
            const key3=res.data.key3;
            const key4=res.data.key4;
            setKeys([key1,key2,key3,key4]);
            console.log("useEffect로 한번만 불러오기 완.")
        });
    },[]);

    const [selectedWord, setWord] = useState('');

    const selectWord = (e) => {
        setWord(e.target.value);
    }

    return (
        <>
        <Header/>
        <p class="exp-title"><a class="mind">{ mindID }</a> 인
        <br></br><a class="username">{ username }</a> 님을 위한 키워드를 추천해드릴게요.</p>
        <br></br>
        <div class="webname">
            <button id="box" class="div2" name="word1" value={keys[0]} onClick={ selectWord }># { keys[0] }</button>
            <button id="box" class="div2" name="word2" value={keys[1]} onClick={ selectWord }># { keys[1] }</button>
            <button id="box" class="div2" name="word3" value={keys[2]} onClick={ selectWord }># { keys[2] }</button>
            <button id="box" class="div2" name="word4" value={keys[3]}onClick={ selectWord }># { keys[3] }</button>
        </div>
        <div class="webname">
            <button class="normalBtn" onClick={()=>{
                history.goBack();
            }}> prev </button>

            <Link to={{
                pathname:'/result',
                state: {
                    userID: username,
                    mindID: mindID,
                    mindTemp: mindTemp,
                    word: selectedWord
                }
                    }}>
                <button class="namesubmit"> next </button>
            </Link>
        </div>

        </>
    )
}

export default Keyword;