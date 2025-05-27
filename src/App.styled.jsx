import styled from 'styled-components';


export const EntireContainer=styled.div`
height:100vh;
width:100vw;
background-color:#000000;
    display: flex
;gap:20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;`;


export const ImageContainer=styled.div`
    height:200px;
    width:100%;
`;

export const Image=styled.img`
padding:10px;
height:150px;
width:100%;`;
export  const DetailsContainer=styled.div`
    width:600px;
    height:250px;
      border-radius:6px;
    border:5px solid #00e7ff;
`;
export const HeaderContainer=styled.div`
 height:48px;
 display:flex;
 flex-direction:row;
 align-items:center;
 box-sizing:border-box;
 padding-left:20px;
 padding-right:20px;
 justify-content:space-between;
 width:100%;
 background-color:#092e33;    
`;

export const Currency=styled.div`
display:flex;

flex-direction:row;
align-items:center;
gap:10px;`;
export const BodyContainer=styled.div`
flex:1;
width:100%;
display:flex;
flex-direction:row;
box-sizing:border-box;`;

export const Symbol=styled.img`
    height:20px;
    width:20px;
`;
export const Cards1=styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;