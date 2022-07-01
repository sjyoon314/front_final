import styled from 'styled-components';

function Footer() {
    return (
        <Div>
            <a href='http://www.postech.ac.kr/privacy-policy/' target='__blank' style={{textDecorationLine:'none',color:'white',marginLeft:'15px',lineHeight:'60px',border:'0'}}>개인정보처리방침 : http://www.postech.ac.kr/privacy-policy</a>
            <p style={{marginTop:'-15px', marginLeft:'15px'}}>Copyright: (37673) 경상북도 포항시 남구 청암로 77(효자동 산31) / TEL. 054-279-8010 / Mail. p-lms@postech.ac.kr</p>
        </Div>
    );
}
  
export default Footer;
  
const Div = styled.div`
    background-color:rgb(52,58,60);
    margin-left:11%;
    margin-top:-90px;
    width:89%;
    height:90px;
    color:white;
    font-size:13px;
`;