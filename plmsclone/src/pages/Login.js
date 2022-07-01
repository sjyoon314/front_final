import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Imglogo2 from '../img/logo2.jpg';

function Login(){
    const [id,setId] = useState('');
    const [pw,setPw] = useState('');
    const [count, setCount] =useState(0);
    let content = null;
    let loginButton = <>
    <button onClick={()=>{setCount(1)}} style={{backgroundColor:'rgb(189,16,101)', color:'white', fontSize:'18px', fontWeight:'bold',textAlign:'center', width:'18%', height:'5%', border:'0', marginBottom:'5%', position:'absolute', top:'50%', left:'41%'}} >LOGIN</button>
    </>;
    
    if(id==='id'){
        if(pw==='pw'){
            loginButton=<>
            <Link to='/main/mypage'><button style={{backgroundColor:'rgb(189,16,101)', color:'white', fontSize:'18px', fontWeight:'bold',textAlign:'center', width:'18%', height:'5%', border:'0', marginBottom:'5%', position:'absolute', top:'50%', left:'41%'}} >LOGIN</button></Link>
            </>
        }
    }
    
    if(count){
        content=<>
        <div style={{color:'rgb(189,16,101)', fontSize:'12px', margin:'auto', marginTop:'-1%'}}>아이디 또는 비밀번호가 올바르지 않습니다.</div>
        <div style={{color:'rgb(189,16,101)', fontSize:'12px', margin:'auto', marginTop:'-5%'}}>아이디는 'id', 비밀번호는 'pw'로 로그인 가능합니다.</div>
        </>
    }

    return(
        <div>
            <div style={{backgroundColor:'rgb(202,4,100)', width:'100%', position:'absolute', top:'0%', left:'0%', height:'0.6%'}}></div>
            <div style={{backgroundColor:'rgb(245,245,245)', position:'absolute', top:'0.6%', left:'0%',width:'100%', height:'94.4%'}}>
                <div style={{backgroundColor:'rgb(239,239,239,0.6)', margin:'auto', marginTop:'4%',width:'23%',height:'50%', paddingTop:'10px'}}>
                    <div style={{backgroundColor:'white', border:'1px solid lightgray', margin:'3%', height:'96%', display:'flex', flexFlow:'column nowrap', borderBottom:'10%'}}>
                        <img src={Imglogo2} style={{width:'250px', margin:'auto', marginTop:'12%'}} alt=''/>
                        <div style={{color:'rgb(198,16,101)', fontSize:'30px', fontWeight:'bold', margin:'auto', marginTop:'-2%'}}>통합로그인</div>
                        <div style={{color:'grey', fontSize:'16px', margin:'auto', marginTop:'-5%'}}>POSTECH 구성원 서비스</div>
                    
                        <Input type="text" id='id' value={id} placeholder='&nbsp;아이디' onChange={(e)=>setId(e.target.value)}></Input>
                        <Input type='password' id='pw' placeholder='&nbsp;비밀번호' onChange={(e)=>setPw(e.target.value)}></Input>
                        {content}
                        <div style={{height:'20%'}}></div>
                        {loginButton}
                    </div>
                </div>
                <UnderText style={{color:'rgb(162,124,68)', marginTop:'10px'}}>(37673) 경상북도 포항시 남구 청암로 77(효자동 산31) TEL. 054-279-2517</UnderText>
                <UnderText>COPYRIGHT Pohang University of Science and Technology. ALL RIGHTS RESERVED.</UnderText>
            </div>
        </div>
    );
}

export default Login;

const Input = styled.input`
    width:80%;
    height:7%;
    background-color:rgb(248,248,248);
    margin:auto;
    border: 1px solid rgb(203,203,203);
    margin-top:-2%;
`;

const UnderText = styled.div`
    font-size:4px;
    text-align:center;
`;