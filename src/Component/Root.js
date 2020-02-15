import React from 'react';
import styled from 'styled-components';
import HeaderApp from './headerApp'; 
import BodyApp from './bodyApp';
import FooterApp from './footerApp';

const Content = styled.div`
padding-left:0px!important;
padding-right:0px!important;
background:#EFEEE9;
`;


function Root() {
  return (
    <Content>
      <HeaderApp/>
      <BodyApp/>
      <FooterApp/>
    </Content>
  );
}

export default Root;
