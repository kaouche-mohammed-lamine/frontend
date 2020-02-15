import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';

const P = styled.p`
padding-left:15px!important;
padding-right:15px!important;
text-align:center;
font-size:10px;
color:#C17A62;
`;
const Link = styled.a`
margin-top:5px;
color:#C17A62;
text-align:center;
text-decoration:none;
font-size:10px;
&:hover{
    color:#EFEEE9;
}
`;

const Label = styled.div`
padding-left:15px!important;
padding-right:15px!important;
text-align:center;
font-size:30px;
color:#C17A62;

`;

function Links() {
    return (
        <Container>
            <Row>
                <Col sm>
                    <P>
                        <Link href="#"  >LOCATION</Link><br />
                        <Link href="#" >DEVELOPEMENT</Link><br />
                        <Link href="#" >LIFESTYLE</Link><br />
                        <Link href="#" >TEAM</Link>
                    </P>
                </Col>
                <Col sm>
                <P>ROSSETT GREEN LANE</P>
                <Label>BELMONT</Label>
                <Label>" GRANGE "</Label>
                <P>HARROGATE</P>
                </Col>
                <Col sm>
                    <P>
                        <Link href="#"  >CONTACT</Link><br />
                        <Link href="#" >NEWS</Link><br />
                        <Link href="#" >REGISTER</Link><br />
                        <Link href="#" >TERMS</Link>
                    </P>
                </Col>
            </Row>

        </Container>
    );
}

export default Links;