import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
padding:10px;
padding-left:10px!important;
padding-right:10px!important;
text-align:center!important;
`;

const P = styled.p`
padding-left:15px!important;
padding-right:15px!important;
color:#C17A62;
`;
const Label = styled.label`
padding-left:0px!important;
padding-right:0px!important;
color:#C8C8C7;
`;

function Rowarticls(props) {
  return (
      <Content>
          <Label> {props.Date} </Label>
          <img src={"/Images/" + props.Image}  style={{ width: "100%", height: "auto",paddingTop:"10px" }} alt=""/>
          <P> {props.Description} </P>
      </Content>
  );
}

export default Rowarticls;