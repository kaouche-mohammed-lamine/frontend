import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import Rowarticls from './Rowarticls'
import data from './data/data.json'
import Pagination from './Pagination'
const Content = styled.div`
padding-left:0px!important;
padding-right:0px!important;
background:white;
box-shadow:rgb(255, 255, 255) 0px 1px 200px;
border-radius:3px;
`;

const Dataglobal = () => {
  let rows = [];
  let rowelement = [];
  let i = 0;
  data.forEach(data => {
    rowelement.push(<Col sm>
      <Rowarticls Date={data.Date} Image={data.Image} Description={data.Description} />
    </Col>) && ((i % 3) === 2) && rows.push(<Row>{rowelement}</Row>) && (rowelement = []);
    i++;
  });
  return rows;
}


function Articls() {
  return (
    <Container>
      <Content>
        <Dataglobal />
        <Pagination/>
      </Content>
    </Container>
  );
}

export default Articls;