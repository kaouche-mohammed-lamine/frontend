import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { MdArrowForward } from "react-icons/md";


const P = styled.p`
padding-left:15px!important;
padding-right:15px!important;
text-align:center;
font-size:20px;
color:#C17A62;
`;

const InputType = styled.input`
background:transparent;
height:30px;
width:90%;
border: solid 0px #C17A62;
border-bottom: solid 1px #C17A62;
padding:5px;
padding-left:15px;
color:#C17A62;
margin-top:10px;
&:focus {
    border: solid 1px #C17A62;
}
`;

function Email() {
    return (
        <Container>
            <Row>
                <Col sm>
                    <P>
                        <InputType value="Your Email Address" />
                        <MdArrowForward />
                    </P>
                </Col>
            </Row>
        </Container>
    );
}

export default Email;