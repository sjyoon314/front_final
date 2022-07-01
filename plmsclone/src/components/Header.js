import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Imglogo3 from '../img/logo3.png';
import Imgheader_home from '../img/header_home.png';
import ImgguestIcon from '../img/guestIcon.jpg';

function Header(props){
    const [username, setUsername] = useState('guest');
    let Hcontent=<>
    <Link to='/main/mypage'><img src={Imglogo3} style={{width:'180px', height:'30px', marginLeft:'10px',marginTop:'18px'}} alt=''/></Link>
    </> 
    if(props.name){
        setUsername(props.name);
    }
    if(props.cname){
        Hcontent=<div style={{display:'flex', flexFlow:'row nowrap'}}>
            <Link to='/main/mypage'><img src={Imgheader_home} style={{width:'50px', height:'50px', marginLeft:'5px',marginTop:'5px'}} alt=''/></Link>
            <Link to='/main/course1' style={{textDecoration:'none', fontSize:'24px', fontWeight:'bold', color:'white', marginTop:'14px'}}><div>test1 (TEST101-01)</div></Link>
        </div> 
    }
    return(
        <div style={{backgroundColor:'rgb(198,16,101)', width:'100%', height:'60px', marginTop:'-8px', marginLeft:'-8px', display:'flex', flexFlow:'row nowrap', justifyContent:'space-between'}}>
            {Hcontent}
            <div style={{display:'flex', flexFlow:'row nowrap'}}>
                <p style={{color:'white', fontSize:'16px'}}>{username}</p>
                <img src={ImgguestIcon} style={{width:'43px', height:'43px', marginLeft:'12px',marginTop:'8px'}} alt=''/>
                <Link to='/'><button style={{backgroundColor:'rgb(187,160,120)',width:'80px', height:'35px',margin:'13px', marginTop:'15px',border:'0', color:'white'}}>로그아웃</button></Link>
            </div>
        </div>
    );
}

export default Header;