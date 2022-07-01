import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Img01 from '../img/01.jpg';
import Imglogo1 from '../img/logo1.jpg';
import Imgmain1 from '../img/main1.jpg';
import Imgmain2 from '../img/main2.jpg';
import Imgmain3 from '../img/main3.jpg';
import Imgmain4 from '../img/main4.jpg';
import Imgmain5 from '../img/main5.jpg';


function Plms() {
  const [mode, setMode] = useState(0);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  let errMessage = null;
  let content = null;
  let loginButton = null;
  let returnButton = null;

  if(mode===0){
    content=<>
      <Link to='/login' style={{width:'50%', textDecoration:'none'}}><div style={{backgroundColor:'rgb(202,4,100)', color:'white', width:'100%', height:'12%', border: '0', textAlign:'center', lineHeight:'60px', fontSize:'14px'}}>SSO 로그인</div></Link>
      <button onClick={()=>setMode(1)} style={{backgroundColor:'rgb(48,171,208)', color:'white', width:'50%', height:'12%', border: '0', float:'left'}}>일반인 로그인</button>
    </>
  }
  else if(mode===1){
    loginButton=<Button>로그인</Button>;
    content=<>
      <div style={{display:'flex', flexFlow:'column nowrap', justifyContent:'space-between', width:'70%', height:'20%'}}>
        <Input type="text" id='id' value={id} placeholder='&nbsp;사용자 아이디' onChange={(e)=>setId(e.target.value)}></Input>
        <Input type="text" id='pw' value={pw} placeholder='&nbsp;비밀번호' onChange={(e)=>setPw(e.target.value)}></Input>
      </div>
    </>;
    returnButton=<button onClick={()=>setMode(0)} style={{backgroundColor:'rgb(21,72,133,0.9)', border:'0', color:'grey', fontWeight:'bold'}}>X</button>;
    errMessage=<div style={{backgroundColor:'rgb(232,238,245)', color:'red', fontSize:'13px', marginTop:'10px', marginBottom:'-20px', width:'90%', marginLeft:'5%', height:'15%', lineHeight:'35px', fontWeight:'bold'}}>&nbsp;아이디는 id, 비밀번호는 pw로 로그인 가능합니다.</div>;
    if(id==='id'){
      if(pw==='pw'){
        loginButton=<Link to='/main/mypage'><Button>로그인</Button></Link>;
      }
    }
  }
  return (
    <div> 
        <img src={Img01} style={{position: 'absolute', top:'0%', left:'0%', width: '100%', height: '100'}} alt=''></img>
        <Link to='/'><img src={Imglogo1} style={{position: 'absolute', top:'5%', left:'43%', width: '13%', height:'7%'}} alt=''/></Link>
        <div style={{position: 'absolute', top: '15%', left: '33%', width: '33%', height:'55%', font: '나눔고딕', display: 'flex', flexFlow: 'column nowrap', justifyContent: 'space-between'}}>
          <div style={{height:'40%',display: 'flex', flexFlow: 'row nowrap', justifyContent: 'space-between', color: 'white'}}>
              <div style={{backgroundColor: 'rgb(21,72,133,0.9)', width:'70%'}}>
                <div style={{marginTop:'6%', marginLeft:'5%', fontSize:'18px', fontWeight: 'bold', display:'flex', flexFlow:'row nowrap', justifyContent:'space-between', marginRight:'5%'}}>
                  <div>LOGIN</div>
                  {returnButton}
                </div>
                {errMessage}
                <div style={{display:'flex', flexFlow:'row nowrap', height:'500px', margin:'6%', marginTop:'9%'}}>
                  {content}
                  {loginButton}
                </div>
              </div>
              <div style={{backgroundColor: 'rgb(169,129,71)', width:'27%', display:'flex', flexFlow: 'column nowrap', justifyContent:'space-between', paddingBottom:'20%'}}>
                <Div1>
                  <img src={Imgmain1} style={{width:'13%', height:'100%', float:'left'}} alt=''/>
                  <a href='https://ice.postech.ac.kr/' target='__blank' style={{textDecoration:'none', color:'white'}}>&nbsp;교육혁신센터</a>
                </Div1>
                <Div1>
                  <img src={Imgmain2} style={{width:'13%', height:'100%', float:'left'}} alt=''/>
                  <a href='https://pams.postech.ac.kr/' target='__blank' style={{textDecoration:'none', color:'white'}}>&nbsp;PAMS</a>
                </Div1>
                <Div1>
                  <img src={Imgmain3} style={{width:'13%', height:'100%', float:'left'}} alt=''/>
                  <a href='http://www.kmooc.kr/' target='__blank' style={{textDecoration:'none', color:'white'}}>&nbsp;K-MOOC</a>
                </Div1>
                <Div1>
                  <img src={Imgmain4} style={{width:'13%', height:'100%', float:'left'}} alt=''/>
                  <a href='https://postech.edwith.org/' target='__blank' style={{textDecoration:'none', color:'white'}}>&nbsp;STAR-MOOC</a>
                </Div1>
                <Div1>
                  <img src={Imgmain5} style={{width:'13%', height:'100%', float:'left'}} alt=''/>
                  <a href='https://library.postech.ac.kr/' target='__blank' style={{textDecoration:'none', color:'white'}}>&nbsp;도서관 포털</a>
                </Div1>
              </div>
          </div>           
          <div style={{backgroundColor: 'rgb(255,255,255,0.85)', height:'40%'}}>
            <div style={{marginTop:'4%', marginLeft:'4%', fontSize:'16px', textWeight:'bold'}}>공지사항</div>
            <div style={{display:'flex', flexFlow:'column nowrap', justifyContent:'space-between',color:'rgb(102,102,102)', marginTop:'2%', marginLeft:'6%', fontSize:'12px', fontWeight:'bold'}}>
              <div style={{margin:'1%'}}>[학부생 대상] 2022년 2학기 국가장학금(유형I) 1차 신청 안내</div>
              <div style={{margin:'1%'}}>[교수/대학원생] 교수역량 강화 1차 워크숍 안내</div>
              <div style={{margin:'1%'}}>PLMS 시스템 패치 안내(PLMS System Temporarily Unstable)</div>
              <div style={{margin:'1%'}}>PLMS 교육 워크숍 동영상 시청 안내</div>
              <div style={{margin:'1%'}}>[대학원생 대상] 연계진학자 PLMS 접속 시 학부생 신분으로 접속되는 현상에 대한 안내</div>
            </div>
          </div>
          <div style={{height:'13%', display:'flex', flexFlow:'row nowrap', justifyContent:'space-between', textAlign:'left', lineHeight:'50px', fontSize:'14px'}}>
            <Div2 style={{width:'24%'}}>공지사항</Div2>
            <Div2>Q&A</Div2>
            <Div2>FAQ</Div2>
            <Div2>매뉴얼</Div2>
          </div>
        </div>
    </div>
  );
}

export default Plms;

const Input = styled.input`
  background-color:white;
  border:solid black 1px;
  color:grey;
  height:40%;
`;

const Button = styled.button`
  background-color:rgb(189,16,101);
  border:0;
  color:white;
  font-size:;
  width:130px;
  height:100px;
  margin-left:5px;
`;

const Div1 = styled.div`
  width:100%;
  height:17%;
  margin:7%;
  font-size: 17px;
`;

const Div2 = styled.div`
  background-color:rgb(218,216,188);
  height:75%;
  width:19%;
  padding-left:4%;
  font-weight:bold;
  padding-top:1%;
`;