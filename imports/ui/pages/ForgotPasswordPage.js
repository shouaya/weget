import React from 'react'
import { Link } from 'react-router-dom'
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

import { changeInput, forgotPassword } from '../../actions'
import BasePage from './BasePage'

const ForgotPasswordPage = ({ changeInput, forgotPassword, ...props }) => {
  return (
    <BasePage {...props} title="ForgotPassword" desc="ForgotPassword"
      page={
        <div>
          <Form>
            <FormCell>
              <CellHeader>
                <Label>Mail</Label>
              </CellHeader>
              <CellBody>
                <Input name="mail" onChange={changeInput} type="mail" placeholder="Enter your mail" />
              </CellBody>
            </FormCell>
          </Form>
          <ButtonArea direction="horizontal">
            <Button type="primary" onClick={forgotPassword}>send</Button>
          </ButtonArea>
          <CellsTips>Don't have an account? Register <Link to="/signup">signup</Link></CellsTips>
        </div>
      }
    />
  );
}

ForgotPasswordPage.propTypes = {
  changeInput: PropTypes.func.isRequired,
  forgotPassword: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  changeInput: e => dispatch(changeInput(e.target.name, e.target.value)),
  forgotPassword: e => dispatch(forgotPassword(e)),
})

export default connect(null, mapDispatchToProps)(ForgotPasswordPage)
