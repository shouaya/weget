import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  Form,
  FormCell,
  CellHeader,
  Label,
  CellBody,
  Input,
  ButtonArea,
  Button,
} from 'react-weui';

import { changeInput, resetPassword } from '../../actions'
import BasePage from './BasePage'

const ResetPassWordPage = ({ changeInput, resetPassword, ...props }) => {
  return (
    <BasePage {...props} title="ResetPassWord" desc="ResetPassWord"
      page={
        <div>
          <Form>
            <FormCell>
              <CellHeader>
                <Label>password</Label>
              </CellHeader>
              <CellBody>
                <Input name="pass" onChange={changeInput} type="password" placeholder="新パスワード" />
              </CellBody>
            </FormCell>
          </Form>
          <ButtonArea direction="horizontal">
            <Button type="primary" onClick={(e) => resetPassword(props.match.params.token, e)}>リセット</Button>
          </ButtonArea>
        </div>
      }
    />
  );
}

ResetPassWordPage.propTypes = {
  changeInput: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  changeInput: e => dispatch(changeInput(e.target.name, e.target.value)),
  resetPassword: (token, e) => dispatch(resetPassword(token, e)),
})

export default connect(null, mapDispatchToProps)(ResetPassWordPage)