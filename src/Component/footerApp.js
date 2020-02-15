import React  from 'react';
import styled from 'styled-components';
import Links from './Links';
import Email from './Email';
import Socialmedia from './Socialmedia';


const Container = styled.div`
padding-top:80px;
padding-bottom:80px;
background:#26203A ;
padding-left:0px!important;
padding-right:0px!important;`;


function FooterApp() {
	return (
	  <Container>
		<Links/>
		<Email/>
		<Socialmedia/>
	  </Container>
	);
  }

export default FooterApp;