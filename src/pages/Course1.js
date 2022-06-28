import styled from 'styled-components';
import Header from '../components/Header';
import {Link} from 'react-router-dom';

function Course1() {
    return (
        <div>
            <Header cname='test1 (TEST101-01)'></Header>
            <Divbg>
              <p>본래 여기에 하나 더 페이지를 만들려고 했었는데, 종강 후 시간이 지나 해당 페이지를 접속하질 못해 포기하게 되었습니다..</p>
              <Link to='/main/mypage' style={{marginLeft:'45%'}}><Button>계속</Button></Link>
            </Divbg>
        </div>
    );
  }
  
export default Course1;
  
const Divbg = styled.div`
  background-color:rgb(248,215,218);
  position:absolute;
  left:15%;
  top:15%;
  color:black;
  font-size:22px;
  font-weight:bold;
  width:67%;
  height:15%;
  padding-top:1%;
  padding-left:2%;
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