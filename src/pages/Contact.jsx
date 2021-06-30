import React from 'react'
import { Form, Input, TextArea, Button, Container } from 'semantic-ui-react'


const Contact = () => (
    <Container textAlign="center" className="body-card desc">
        <Form>
            <Form.Field
                id='form-input-control-first-name'
                control={Input}
                label='First name'
                placeholder='First name'
            />
            <Form.Field
                id='form-input-control-last-name'
                control={Input}
                label='Last name'
                placeholder='Last name'
            />
            <Form.Field
            id='form-input-control-error-email'
            control={Input}
            label='Email'
            placeholder='joe@schmoe.com'
            error={{
                content: 'Please enter a valid email address',
                pointing: 'below',
            }}
            />
            <Form.Field
            id='form-textarea-control-opinion'
            control={TextArea}
            label='Message'
            placeholder='Message'
            />
            <Form.Field
            id='form-button-control-public'
            control={Button}
            content='Confirm'
            label='Label with htmlFor'
            />
        </Form>
  </Container>
)

export default Contact