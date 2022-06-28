import styled from 'styled-components';

function Notice(props) {
    let height = props.height;
    let mode = props.mode;
    let content = null;
    if(mode === '0'){
        content=<Divv1>
            <div>
                <Title>PLMS 시스템 일시 중시 안내</Title>
                <Date>2022-06-22</Date>
            </div>
            <div>
                <Title>[학부생 대상] 2022년 2학기 국가장학금(유형I) 1차 신청 ...</Title>
                <Date>2022-05-27</Date>
            </div>
            <div>
                <Title>[교수/대학원생] 교수역량 강화 1차 워크숍 안내</Title>
                <Date>2022-04-26</Date>
            </div>
            <div>
                <Title>PLMS 시스템 패치 안내(PLMS System Temporarily Un...</Title>
                <Date>2022-03-08</Date>
            </div>
            <div>
                <Title>PLMS 교육 워크숍 동영상 시청 안내</Title>
                <Date>2022-02-28</Date>
            </div>
        </Divv1>;
    }
    else if(mode === '1'){
        content='계획된 일정이 없습니다.';
    }
    return (
        <Div>
            <Div1>{props.header}</Div1>
            <Div2 style={height}>{content}</Div2>
        </Div>
    );
}
  
export default Notice;

const Divv1 = styled.div`
    display:flex;
    flex-flow:column nowrap;
    justify-contents:space-around;
`;

const Title = styled.div`
    font-size:15px;
    margin-top:15px;
`;

const Date = styled.div`
    color:grey;
    font-size:14px;
`;

const Div = styled.div`
    background-color:rgb(247,249,250);
    width:100%;
    display:flex;
    flex-flow:column nowrap;
    
`;

const Div1 = styled.div`
    background-color:rgb(250,244,237);
    border-bottom:solid rgb(217,219,219) 1px;
    color:rgb(175,108,47);
    line-height:70px;
    width:100%;
    height:70px;
    padding-left:25px;
    font-size:17px;
    font-weight: 550;
`;

const Div2 = styled.div`
    background-color:white;
    border-bottom:solid rgb(217,219,219) 1px;
    font-size:13px;
    width:100%;
    padding-left:25px;
    padding-top:25px;
    font-size:15px;
    font-weight:500;
`;