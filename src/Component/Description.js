import React from 'react';
import styled from 'styled-components';



const Content = styled.div`
margin-top:70px;
padding-left: 20%!important; 
padding-right: 20%!important;
text-align:center!important;
border-left:solid 1px #C17A62;
`;
const P = styled.p`
padding-left:15px!important;
padding-right:15px!important;
color:#C17A62;
`;
const Label = styled.label`
padding-left:0px!important;
padding-right:0px!important;
color:#C17A62;
font-size:13px;
`;


const Title = styled.h2`
color:#C17A62;
font-size:50px;
padding-left:15px!important;
padding-right:15px!important;
font-weight: 200;
    margin: 0px;
`;
function Description() {
    return (
        <Content>
            <Label>UPDATES</Label>
            <Title>JOIN THE CLUB</Title>
            <P>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. </P>

        </Content>
    );
}

export default Description;