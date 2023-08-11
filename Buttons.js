import React from 'react'
import {Col,Row} from 'react-bootstrap';

const Buttons = ({deleteData,onViewData}) => {
  return (
    <Row className='justify-content-center my-2'>
    <Col sm="8" className='d-flex justify-content-between'>
    <button onClick={deleteData} className='btn-color py-2' >Clear all</button>
    <button onClick={onViewData} className='btn-color py-2'>show dates</button>
    </Col>
    </Row>
  )
}

export default Buttons
