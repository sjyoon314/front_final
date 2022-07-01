import Frame from '../components/Frame';
import Footer from '../components/Footer';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import ImgChome from '../img/Chome.png';
import ImgPguestIconS from '../img/PguestIconS.jpg';

function Message() {
    const B = (props) => <text style={{fontWeight:'bold'}}>{props.children}</text>
 
    return (
      <div>
        <Frame></Frame>
            <div style={{display:'flex', flexFlow:'column nowrap', height:'1000px', width:'100%'}}>
                <DivM>
                    <div style={{display:'flex', flexFlow:'row nowrap'}}>
                        <Link to='/main/mypage'><img src={ImgChome} style={{width:'17px', height:'15px', marginTop:'19px'}} alt=''/></Link>
                        <p style={{marginLeft:'10px', fontWeight:'bold', fontSize:'15   px'}}>/&nbsp;&nbsp;쪽지</p>
                    </div>
                    <div style={{borderTop:'solid lightgrey 1px', width:'97%'}}>
                        <p style={{fontSize:'30px', fontWeight:'bold'}}>쪽지</p>
                        <Div1>
                            <DDiv>
                                <DDivC>내 연락처</DDivC>
                                <button style={{backgroundColor:'rgb(23,162,184)', color:'white',width:'120px', border:'0'}}>내 연락처</button>
                            </DDiv>
                            <DDiv>
                                <DDivC>강좌</DDivC>
                                <Button style={{width:'250px', textAlign:'left'}}>전체</Button>
                            </DDiv>
                            <DDiv>
                                <DDivC>검색</DDivC>
                                <div style={{display:'flex', flexFlow:'row nowrap'}}>
                                    <Button style={{width:'60px'}}>이름</Button>
                                    <Button style={{width:'250px', marginLeft:'5px'}}></Button>
                                    <Button type='submit' style={{width:'50px', marginLeft:'5px'}}>검색</Button>
                                </div>
                            </DDiv>
                        </Div1>
                        <Div2>쪽지는 <B>1 년</B> 동안 보관되며, <B>1 년</B> 후에는 자동 삭제됩니다.</Div2>
                        <Msg>
                            <img src={ImgPguestIconS} style={{width:'40px', height:'40px'}} alt=''/>
                            <div style={{marginLeft:'10px',width:'85%', display:'flex', flexFlow:'column nowrap'}}>
                                <Name>Prof_testname</Name>
                                <Content>https://us02web.zoom.us/j/***********?pwd=************************* 이거로 들어오세요</Content>
                            </div>
                            <p style={{color:'grey', fontSize:'15px'}}>2022-02-21 11:17:18</p>
                        </Msg>
                    </div>
                </DivM>
                <Footer></Footer>
            </div>
        </div>
    );
  }
  
export default Message;
  
const DivM = styled.div`
    background-color:rgb(247,249,250);
    padding-left:13%;
    margin-top:10px;
    width:88%;
    height:100%;
`;

const Div1 = styled.div`
    background-color:white;
    border: solid lightgrey 1px;
    width:100%;
    height:200px;
    display:flex;
    flex-flow:column nowrap;
    justify-content:space-around;
`;

const DDiv = styled.div`
    padding-left:15%;
    display:flex;
    flex-flow:row nowrap;
    width:950px;
    height:40px;
`;

const DDivC = styled.div`
    width:200px;
    text-align:end;
    font-weight:bold;
    font-size:16px;
    margin-right:30px;
    padding-top:10px;      
`;

const Button = styled.button`
    background-color:white;
    border:solid lightgrey 1px;
    padding-left:10px;
`;

const Div2 = styled.div`
    background-color:rgb(255,243,205);
    color:rgb(133,100,4);
    width:99%;
    height:40px;
    margin-top:50px;
    padding-top:17px;
    padding-left:1%;
    font-size:15px;
`;

const Msg = styled.div`
    background-color:white;
    border:solid lightgrey 1px;
    display:flex;
    flex-flow:row nowrap;
    padding:20px;
    margin-top:10px;
    height:150px;
`;

const Name = styled.div`
    color:rgb(51,122,183);
`;

const Content = styled.div`
    margin-top:5px;
`;