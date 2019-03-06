import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

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

import { changeInput, login } from '../../actions'
import BasePage from './BasePage'

const DemoPage = ({ changeInput, login, ...props }) => {
  console.log(props)
  return (
    <BasePage title="Demo" desc="Demo"
      page={
        <div>
          <Form>
            <FormCell>
              <CellHeader>
                <Label>mail</Label>
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
            <Button type="default" onClick={() => props.history.push('/signup')}>signup</Button>
            <Button type="primary" onClick={login}>login</Button>
          </ButtonArea>
          <CellsTips>forgot password <Link to="/forgot">here</Link></CellsTips>
        </div>
      }
    />
  );
}

DemoPage.propTypes = {
  changeInput: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  changeInput: e => dispatch(changeInput(e.target.name, e.target.value)),
  login: e => dispatch(login()),
})

export default connect(null, mapDispatchToProps)(DemoPage)