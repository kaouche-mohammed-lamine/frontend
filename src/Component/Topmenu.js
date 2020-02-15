import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { MdMenu } from "react-icons/md";



const Container = styled.div`
padding-top:20px;
padding-left:30px!important;
padding-right:30px!important;
`;
const Menuleft = styled.div`
padding-left:0px!important;
padding-right:0px!important;
color:white;
font-size:14px;
`;
const Menuright = styled.div`
padding-left:0px!important;
padding-right:0px!important;
color:white;
font-size:14px;
text-align:right;
`;

const Namelogo = styled.div`
padding-left:0px!important;
padding-right:0px!important;
color:white;
font-size:25px;
text-align:center;
`;




function Topmenu() {
  return (
    <Container>
      <Row>
        <Col sm>
          <Menuleft><MdMenu /> MENU</Menuleft>
        </Col>
        <Col sm>
          <Namelogo><label> BELOMNT </label></Namelogo>
          <Namelogo><label> GRANGE </label></Namelogo>

        </Col>
        <Col sm>
          <Menuright> REGISTER</Menuright>
        </Col>
      </Row>
    </Container>
  );
}

export default Topmenu;