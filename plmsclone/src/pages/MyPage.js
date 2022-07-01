import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Frame from '../components/Frame';
import Footer from '../components/Footer';
import Notice from '../components/Notice';
import Course from '../components/Course';
import ImgVMIcon0 from '../img/VMIcon0.jpg';
import ImgVMIcon1 from '../img/VMIcon1.jpg';
import ImgMI from '../img/M1.jpg';

function MyPage(){
    const [viewmode, setViewmode] = useState(0);
    if(viewmode===1){

    }
    return(
        <>
            <Frame></Frame>
            <div style={{display:'flex', flexFlow:'column nowrap', height:'1000px', width:'100%'}}>
                <Article>
                    <div style={{width:'73%',height:'100%'}}>
                        <div style={{margin:'5%', marginTop:'30px',display:'flex', flexFlow:'row nowrap', justifyContent:'space-between'}}>
                            <Button style={{fontWeight:'bold', width:'130px'}}>강좌 전체 보기</Button>
                            <div style={{display:'flex', flexFlow:'row nowrap', justifyContent:'space-around'}}>
                                <Button style={{marginRight:'3px', width:'80px'}}>나의 강좌</Button>
                                <Button style={{marginRight:'3px', width:'80px'}}>청강 신청</Button>
                                <Button onClick={()=>{setViewmode(0)}} style={{border:'solid lightgrey 1px'}}><img src={ImgVMIcon0} width='20px' alt=''></img></Button>
                                <Button onClick={()=>{setViewmode(1)}} style={{border:'solid lightgrey 1px', borderLeft:'0'}}><img src={ImgVMIcon1} width='20px' alt=''></img></Button>
                            </div>
                        </div>
                        <p style={{marginLeft:'5%', marginTop:'-25px', color:'rgb(23,162,184)', fontSize:'15px', fontWeight:'bold'}}><img src={ImgMI} width='15px' alt=''/>&nbsp;강의 시작 14일 전, 강의 종료 14일 후까지 표시됩니다.</p>
                        <div style={{width:'92%', height:'70%', marginLeft:'5%', display:'flex', flexFlow:'column nowrap'}}>
                            <Link to='/main/course1' style={{textDecoration:'none'}}><Course state='2' clsName='test1 (TEST101-01)' profName='test1 [directed]'></Course></Link>
                            <Link to='/main/error' style={{textDecoration:'none'}}><Course state='2' clsName='test2 (TEST102-01)' profName='test2 [not directed]'></Course></Link>
                            <Link to='/main/error' style={{textDecoration:'none'}}><Course state='2' clsName='test3 (TEST103-01)' profName='test3 [not directed]'></Course></Link>                          
                        </div>
                    </div>
                    <div style={{width:'25%', height:'100%',display:'flex', flexFlow:'column nowrap', backgroundColor:'rgb(247,249,250)', borderLeft:'solid rgb(217,219,219) 1px'}}>
                        <Notice header='공지사항' height={{height:'370px'}} mode='0'></Notice>
                        <Notice header='예정된 할일 (06-23 ~ 06-30)' height={{height:'40px'}} mode ='1'></Notice>
                    </div>
                </Article>
                <Footer></Footer>
            </div>
        </>
    );
}

export default MyPage;

const Article = styled.div`
    background-color:rgb(247,249,250);
    margin-left:11%;
    margin-top:0px;
    width:89%;
    height:100%;
    display:flex;
    flex-flow:row nowrap;
`;

const Button = styled.button`
    background-color:white;
    border:solid lightgrey 1px;
    font-size:15px;
    font-weight:500;
    color:black;
    height:35px;
`;

