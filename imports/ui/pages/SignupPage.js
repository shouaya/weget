import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  Button,
  CellsTips,
  CellHeader,
  CellBody,
  ButtonArea,
  Form,
  FormCell,
  Input,
  Label,
} from 'react-weui';

import { changeInput, signup } from '../../actions'
import BasePage from './BasePage'

const SignupPage = ({ changeInput, signup, ...props }) => {
  return (
    <BasePage {...props} title="Signup" desc="Signup"
      page={
        <div>
          <Form>
            <FormCell>
              <CellHeader>
                <Label>Name</Label>
              </CellHeader>
              <CellBody>
                <Input name="name" onChange={changeInput} type="name" placeholder="Enter your name" />
              </CellBody>
            </FormCell>
            <FormCell>
              <CellHeader>
                <Label>Mail</Label>
              </CellHeader>
              <CellBody>
                <Input name="mail" onChange={changeInput} type="mail" placeholder="Enter your mail" />
              </CellBody>
            </FormCell>
            <FormCell>
              <CellHeader>
                <Label>Pass</Label>
              </CellHeader>
              <CellBody>
                <Input name="pass" onChange={changeInput} type="password" placeholder="Enter your pass" />
              </CellBody>
            </FormCell>
          </Form>
          <ButtonArea direction="horizontal">
            <Button type="primary" onClick={signup}>signup</Button>
          </ButtonArea>
          <CellsTips> Already have an account? Login <Link to="/login">here</Link></CellsTips>
        </div>
      }
    />
  );
}

SignupPage.propTypes = {
  changeInput: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  changeInput: e => dispatch(changeInput(e.target.name, e.target.value)),
  signup: e => dispatch(signup(e)),
})

export default connect(null, mapDispatchToProps)(SignupPage)