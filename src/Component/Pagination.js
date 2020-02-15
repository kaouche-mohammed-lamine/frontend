import React from 'react';
import {  Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import {MdPanoramaFishEye, MdArrowBack, MdArrowForward } from "react-icons/md";


const Leftdiv = styled.div`
text-align:left;
padding-left:20px;
color:#EFEEE9;
font-size:20px;

`;

const Rightdiv = styled.div`
text-align:right;
padding-right:20px;
color:#EFEEE9;
font-size:20px;
`;

const Centerdiv = styled.div`
text-align:center;
padding-right:10px;
padding-left:10px;
color:#EFEEE9;
font-size:35px;
`;



function Pagination() {
  return (

    <Row>
        <Col sm>
            <Leftdiv><MdArrowBack /></Leftdiv>
        </Col>
        <Col sm>
            <Centerdiv>
                <MdPanoramaFishEye/>
                <MdPanoramaFishEye/>
                <MdPanoramaFishEye/>

            </Centerdiv>
        </Col>
        <Col sm>
            <Rightdiv><MdArrowForward /></Rightdiv>
        </Col>
    </Row>
  );
}

export default Pagination;