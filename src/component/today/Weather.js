import '../../styles/Weather.css';
import {useState, useEffect} from "react";
import axios from "axios";

function Weather(props) {
    const weatherType = {'맑음':'sun', '흐림': 'cloud', '비': 'rain', '눈': 'snow'};
    const [date, setDate] = useState(null);
    const [weather, setWeather] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [loading, setLoading] = useState(true);

    // 날씨 정보 받아와 state 설정
    const getWeather = async (today) => {
        axios.get('/api/mind')
            .then((response) => {
                if(response.data.success === true) {
                    const data = response.data.data;
                    setLoading(false);
                    setDate(today);
                    setWeather(`./icons/${weatherType[data.weather]}-grey.svg`);
                    setTemperature(data.temperature);
                    props.passWeather(response.data.data);
                } else {
                    setLoading(true);
                    setDate(today);
                    setWeather(null);
                    setTemperature(null);
                }
            })

            .catch(err => {
                console.log(err.message);
            })
    }

    useEffect(() => {
        // 오늘 날짜 MM/DD
        var today = new Date();
        today = `${today.getMonth() + 1}/${today.getDate()}`;
        getWeather(today);
    }, []);

    

    return (
        <div className='weather-container'>
            {loading ?
                <div className='weather-text'>로딩 중..</div>
                :
                
                <>
                    <div className='weather-item'>
                        <img src='./icons/calendar.svg' height={19} alt='calendar'/>
                        <div className='weather-text'>{date}</div>
                    </div>
                    <div className='weather-item'>
                        <img src='./icons/location.svg' height={38} alt='location'/>
                        <div className='weather-text'>서울</div>
                    </div>
                    <div className='weather-item'>
                        <img src={weather} height={19} alt='weather'/>
                        <div className='weather-text'>{temperature} &deg;C</div>
                    </div>
                </>
            }
        </div>
    );
}
export default Weather;
