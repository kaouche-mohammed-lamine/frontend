import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";


const P = styled.p`
padding-top:10px;
padding-left:15px!important;
padding-right:15px!important;
text-align:center;

`;
const Label = styled.label`
padding-left:10px!important;
padding-right:10px!important;
font-size:20px;
color:#C17A62;
`;


function Socialmedia() {
    return (
        <Container>
            <Row>
                <Col sm>
                    <P>
                        <Label><FaInstagram /></Label>
                        <Label><FaTwitter /></Label>
                        <Label><FaFacebookF /></Label>
                        <Label><FaLinkedinIn /></Label>
                        <Label><FaYoutube /></Label>
                    </P>
                </Col>
            </Row>
        </Container>
    );
}

export default Socialmedia;