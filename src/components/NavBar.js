import styled from 'styled-components';
import {Link} from 'react-router-dom';

function NavBar() {
    return(
        <Nav>
            <Link to='/main/mypage'>
            <NavCell>
                <Img src='/img/nav1.jpg'/>
                <NavText>My page</NavText>
            </NavCell></Link>
            <Link to='/main/error'>
            <NavCell>
                <Img src='/img/nav2.jpg'/>
                <NavText>정규 강좌</NavText>
            </NavCell></Link>
            <Link to='/main/error'>
            <NavCell>
                <Img src='/img/nav3.jpg'/>
                <NavText>비정규강좌</NavText>
            </NavCell></Link>
            <Link to='/main/error'>
            <NavCell>
                <Img src='/img/nav4.jpg'/>
                <NavText>오픈강좌</NavText>
            </NavCell></Link>
            <Link to='/main/error'>
            <NavCell>
                <Img src='/img/nav3.jpg'/>
                <NavText>지식커뮤니티</NavText>
            </NavCell></Link>
            <Link to='/main/message' style={{textDecoration:'none'}}>
            <NavCell>
                <Img src='/img/nav6.jpg'/>
                <NavText>쪽지 [directed]</NavText>
            </NavCell></Link>
            <Link to='/main/error'>
            <NavCell>
                <Img src='/img/nav7.jpg'/>
                <NavText>매뉴얼</NavText>
            </NavCell></Link>
            <Link to='/main/error'>
            <NavCell>
                <Img src='/img/nav8.jpg'/>
                <NavText>이용안내</NavText>
            </NavCell></Link>
        </Nav>
    );
}

export default NavBar;

const Nav = styled.div`
    background-color:rgb(47,48,51);
    position:absolute;
    top:60px;
    left:0px;
    width:12%;
    max-height:100%;
    align-items:stretch;
    height:1000px;
    display:flex;
    flex-flow:column nowrap;
`;

const NavCell = styled.button`
    background-color:rgb(47,48,51);
    color:rgb(153,153,153);
    border:0;
    border-bottom: solid rgb(37,38,38) 1px;
    height:60px;
    display:flex;
    flex-flow:row nowrap;
    width:100%;
`;

const Img = styled.img`
    width:27px;
    height:30px;
    margin-top:17px;
    margin-left:7px;
`;

const NavText = styled.div`
    font-size:13px;
    font-weight:bold;
    line-height:65px;
    text-align:center;
    padding-right:50px;
    margin-left:15px;
`;
