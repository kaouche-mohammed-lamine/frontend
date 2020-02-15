import React  from 'react';
import styled from 'styled-components';
import Topmenu from './Topmenu';
import TitlePage from './TitlePage';


const Container = styled.div`
background-image: url('/Images/UZ0A5540.png');
background-repeat: no-repeat;
background-attachment: fixed;  
background-size: cover;
padding-left:0px!important;
padding-right:0px!important;
height:600px;`;


function HeaderApp() {
	return (
	  <Container>
		  <Topmenu/>
		  <TitlePage/>
	  </Container>
	);
  }

export default HeaderApp;