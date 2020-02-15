import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';


const Container = styled.div`
padding-left:15px!important;
padding-right:15px!important;
padding-top:100px;
`;
const SubTitle = styled.div`
padding-left:0px!important;
padding-right:0px!important;
color:white;
font-size:8px;
text-align:center;
`;

const Title = styled.div`
padding-left:0px!important;
padding-right:0px!important;
color:white;
font-size: 70px;
text-align: center;
font-weight: 300;
`;




function TitlePage() {
  return (
    <Container>
      <Row>
        <Col sm>
          <SubTitle><label> LATEST </label></SubTitle>
        </Col>
      </Row>
      <Row>
        <Col sm>
          <Title><label> NEWS </label></Title>
        </Col>
      </Row>
    </Container>
  );
}

export default TitlePage;