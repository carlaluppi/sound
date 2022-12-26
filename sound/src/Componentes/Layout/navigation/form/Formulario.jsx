import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formulario() {
  return (

    <Form className='formConteiner'>
      <fieldset disabled>
        <Form.Group className="mb-6">
          <Form.Label htmlFor="disabledTextInput">Name</Form.Label>
          <Form.Control id="disabledTextInput" placeholder= "" />
        </Form.Group>
        <Form.Group className="mb-6">
          <Form.Label htmlFor="disabledSelect">E-mail:</Form.Label>
          <Form.Control id="disabledTextInput" placeholder= "" />
        </Form.Group>
        <Form.Group className="mb-6">
          <Form.Label htmlFor="disabledSelect">Password:</Form.Label>
          <Form.Control id="disabledTextInput" placeholder= "" />
        </Form.Group>
       
        <Button type="submit">Join now</Button>
      </fieldset>
    </Form>
  );
}

export default Formulario;