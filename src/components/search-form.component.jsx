import React from 'react';
import { Form, Col } from 'react-bootstrap';

const SearchForm = ({params,onParamChange}) => {
    return (
        <Form className="mb-4">
            <Form.Row className="align-items-end">
                <Col xs={12} sm={5}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" type="text" value={params.description} onChange={onParamChange} />
                </Col>
                <Col xs={12} sm={5} className="mt-sm-0 mt-2">
                    <Form.Label>Location</Form.Label>
                    <Form.Control name="location" type="text" value={params.location} onChange={onParamChange} />
                </Col>
                 <Col xs="auto" className="mt-sm-0 mt-2">
                     <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" id="full-time" label="Only Full Time" type="checkbox" className="mb-2" />
                </Col>
            </Form.Row>
        </Form>
    );
};

export default SearchForm;