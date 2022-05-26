import {useState} from "react";
import Header from "../component/common/Header";
import "../styles/Main.css"
import {Link} from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';
import { render } from "react-dom";

function Contents(){
    const history = useHistory();
    const location = useLocation();

    const title = location.state.title;
    const genre = location.state.genre;
    const img = location.state.img;
    const actor = location.state.actor;
    const creator = location.state.creator;
    const summary = location.state.summary;
    console.log(title, genre);
    
    return(
        <>
        <Header/>
        <div className="webname">

       <div style={{margin:"auto", width:"1000px"}}>
       <img src={img}></img>
       <div class="title">{title}</div>
       <div class="exp"><a class="mind">장르 </a>{genre.map(data => (<span>#{data} </span>))}</div>
       <div class="exp"><a class="mind">제작진 </a>{creator.map(data => (<span>{data}, </span>))}</div>
       <div class="exp"><a class="mind">출연진 </a>{actor.map(data => (<span>{data}, </span>))}</div>
           <div class="exp"><a class="mind">줄거리 </a>{summary}</div>  
       </div>

       <button class="normalBtn" onClick={()=>{
                history.goBack();
            }}> prev </button>
        </div>

        </>
        
    )
}

export default Contents;