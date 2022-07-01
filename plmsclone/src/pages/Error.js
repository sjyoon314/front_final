import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Frame from '../components/Frame';
import Footer from '../components/Footer';
import ImgChome from '../img/Chome.png';

function Error(){
    return(
        <>
            <Frame></Frame>
            <div style={{display:'flex', flexFlow:'column nowrap', height:'1000px', width:'100%'}}>
                <Article>
                    <div>
                        <Link to='/main/mypage'><img src={ImgChome} style={{width:'17px', height:'15px', marginTop:'19px'}} alt=''/></Link>
                    </div>
                    <div style={{borderTop:'solid lightgrey 1px', width:'89%', marginTop:'1%'}}></div>
                    <div style={{width:'89%',height:'11%', marginTop:'2%', paddingLeft:'2%',backgroundColor:'rgb(248,215,218)', border:'solid rgb(245,198,203) 1px', color:'rgb(114,28,36)'}}>
                        <p style={{fontSize:'16px', fontWeight:'bold', marginTop:'2%'}}>적절한 주소가 제공되지 않음</p>
                        <p style={{fontSize:'15px'}}>구현되지 않은 페이지로의 접근입니다.</p>
                    </div>
                    <Link to='/main/mypage' style={{marginLeft:'45%'}}><Button>계속</Button></Link>
                </Article>
                <Footer></Footer>
            </div>
        </>
    );
}

export default Error;

const Article = styled.div`
    background-color:rgb(247,249,250);
    margin-left:14%;
    margin-top:0px;
    width:89%;
    height:100%;
    display:flex;
    flex-flow:column nowrap;
`;

const Button = styled.button`
    background-color:rgb(0,123,255);
    color:white;
    margin:auto;
    margin-top:2%;
    width:60px;
    height:40px;
    border:0;
`;