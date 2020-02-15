import React  from 'react';
import styled from 'styled-components';

import Articls from './Articls';
import Form from './Form'

const Container = styled.div`
padding-left:15px!important;
padding-right:15px!important;
margin-top:-80px;
margin-bottom:80px;

`;


function BodyApp() {
	return (
	  <Container>
		  <Articls/>
		  <Form/>
	  </Container>
	);
  }

export default BodyApp;