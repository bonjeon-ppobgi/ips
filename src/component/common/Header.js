import { PureComponent } from "react";
import '../../styles/Header.css';
import Main from "../../pages/Main";


class Header extends PureComponent{
    render() {
        return (
            <div className='Header'>
                <br></br>
                <a href ="/">
                <div style={{textAlign:"center"}}>
                    <img src='./icons/007.png'height={200}/>    
                </div>
                </a>

                
            </div>

        )
    }
}

export default Header;

