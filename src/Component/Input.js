import React from 'react';
import styled from 'styled-components';


const Content = styled.div`
margin-top:70px;
padding-left:10px!important;
padding-right:10px!important;
text-align:center!important;
`;


const InputType = styled.input`
background:#E6E5E1;
height:30px;
width:70%;
border: solid 1px #EFEEE9;
padding:5px;
padding-left:15px;
color:#747372;
margin-top:10px;
&:focus {
    border: solid 1px #EFEEE9;

}
`;

const SelectType = styled.select`
background:#E6E5E1;
height:42px;
width:74%;
border: solid 1px #EFEEE9;
padding:5px;
padding-left:15px;
color:#747372;
margin-top:10px;
&:focus {
    border: solid 1px #EFEEE9;

}
`;



function Input() {
    return (
        <Content>
            <SelectType  >
            <option value="TITLE">TITLE</option>
</SelectType>
            <InputType value="NAME" />
            <InputType value="EMAIL ADDRESS" />
            <InputType value="TELEPHONE" />
        </Content>
    );
}

export default Input;