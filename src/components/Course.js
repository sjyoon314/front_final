import styled from "styled-components";


function Course(props){

    let stateImg = null;
    if(props.state === '2'){
        stateImg = <img src='/img/Cstate2.jpg' style={{width:'40px'}}alt=''/>
    }

    return(
        <DivC>
            <img src='/img/PguestIcon.jpg' style={{width:'60px', height:'60px'}} alt=''/>
            <img src='/img/MCproperty1.jpg' style={{width:'80px', height:'75px', marginLeft:'15px'}}></img>
            <div style={{display:'flex', flexFlow:'column nowrap', marginLeft:'10px', marginTop:'6px'}}>
                <div style={{fontSize:'20px', fontWeight:'bold'}}>{stateImg}&nbsp;{props.clsName}</div>
                <div style={{color:'grey', fontSize:'14px'}}>{props.profName}</div>
            </div>
        </DivC>
    );
}

export default Course;

const DivC = styled.div`
    background-color:white;
    border:solid lightgrey 1px;
    display:flex;
    flex-flow:row nowrap;
    height:80px;
    padding-top:15px;
    padding-left:15px;
    color:black;
`;