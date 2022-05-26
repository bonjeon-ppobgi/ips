import {Component,useEffect,useState} from "react";
import axios from 'axios';
import "../styles/Archive.css"
import Header from "../component/common/Header";

import BasicCard from "../component/PerfumeCard/BasicCard.js";

const Archive = () =>{
  const [loading, setLoading] = useState(true);
  const [perfume,setPerfume] =  useState([]);
  useEffect(() => { getPerfumes();
    }, []);


  const getPerfumes =()=>{
      axios.get('/api/perfume')
          .then(response =>{
            if(response.data.success){
              setLoading(false);
              setPerfume(response.data.data);
            }else{
              setLoading(true);
              setPerfume([]);
            }
          }).catch(err=>{
            setLoading(true);
            console.log(err);
          })
    }

  return(
    <>
      <Header />

      <div className='body'>
        {loading && <div>Loading</div>}
        {!loading&&(
          <div>
            <span>인기순</span><span>조회순</span>
            <div className="archive-container" >{perfume.map(item => 
                <BasicCard perfume={item}></BasicCard>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Archive;
