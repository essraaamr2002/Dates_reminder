import React from 'react';
import {Col,Row} from 'react-bootstrap';


const Headedata = ({person}) => {
  return (
    <Row className='justify-content-center'>
    <Col sm="8" className=''>
    U Have{person.length} for Now
    </Col>
    </Row>
  )
}

export default Headedata;
