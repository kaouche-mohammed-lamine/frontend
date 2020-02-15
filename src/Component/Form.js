import React from 'react';
import styled from 'styled-components';
import { Container,Row, Col } from 'styled-bootstrap-grid';
import Input from './Input';
import Description from './Description';

const Content = styled.div`
margin-top:20px;
margin-bottom:20px;
padding-left:30px!important;
padding-right:0px!important;
text-align:center!important;
`;

const Button = styled.button`
width:150px;
border-raduis: 2px;
color:#C17A62;
height:35px; 
background:#EFEEE9;
border: solid 1px #C17A62;
cursor:pointer;
&:hover{
    background:#e8e8e4;
}
`;


function Form() {
    return (
        <Container>
            <Row>
                <Col sm>
                    <Input/>
                </Col>

                <Col sm>
                <Description/>

                </Col>
            </Row>
            <Row>
                <Col sm>
                    <Content>
                    <Button >SUBMIT</Button>
                    </Content>
                </Col>

                
            </Row>
        </Container>
    );
}

export default Form;