import * as actions from '../imports/actions'
import expect from 'expect'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { resetDatabase } from 'meteor/xolvio:cleaner'
import sinon from 'sinon';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  beforeEach(() => {
    resetDatabase();
  });

  it('changeInput', () => {
    const name = 'name'
    const value = 'value'
    const expectedAction = {
      type: 'CHANGE_INPUT',
      name,
      value
    }
    expect(actions.changeInput(name, value)).toEqual(expectedAction)
  })

  it('closeToast', () => {
    const expectedAction = {
      type: 'CLOSE_TOAST',
    }
    expect(actions.closeToast()).toEqual(expectedAction)
  })

  it('login nothing input', () => {
    const expectedAction = {
      type: 'OPEN_TOAST',
      toastIcon: 'warn',
      toastMessage: 'place check mail or pass',
    }
    const store = mockStore({ base: {} })
    event = { preventDefault: () => { } }
    expect(store.dispatch(actions.login(event))).toEqual(expectedAction)
  })

  it('login mail not validate', () => {
    const expectedAction = {
      type: 'OPEN_TOAST',
      toastIcon: 'warn',
      toastMessage: 'place check mail',
    }
    const store = mockStore({ base: { mail: 'ss', pass: 'ss' } })
    event = { preventDefault: () => { } }
    expect(store.dispatch(actions.login(event))).toEqual(expectedAction)
  })

  it('login no user', () => {
    const expectedAction = {
      type: 'OPEN_TOAST',
      showToast: true,
      toastIcon: 'warn',
      toastMessage: "err.reason",
    }
    var fake = sinon.fake.returns({
      type: 'OPEN_TOAST',
      showToast: true,
      toastIcon: "warn",
      toastMessage: "err.reason",
    });
    Meteor.loginWithPassword = fake
    const store = mockStore({ base: { mail: 'xx@xxx.com', pass: 'xxxx' } })
    event = { preventDefault: () => { } }
    expect(store.dispatch(actions.login(event))).toEqual(expectedAction)
  })

  it('sign up', () => {
    const expectedAction = {
      type: 'OPEN_TOAST',
      showToast: true,
      toastIcon: "warn",
      toastMessage: "err.reason",
    }
    var fake = sinon.fake.returns({
      type: 'OPEN_TOAST',
      showToast: true,
      toastIcon: "warn",
      toastMessage: "err.reason",
    });
    Accounts.createUser = fake
    const store = mockStore({ base: { mail: 'test@test.com', name: 'xxxx', pass: 'xxxx' } })
    event = { preventDefault: () => { } }
    expect(store.dispatch(actions.signup(event))).toEqual(expectedAction)
  })

  it('logout', () => {
    const expectedAction = {
      type: 'OPEN_TOAST',
      showToast: true,
      toastIcon: "warn",
      toastMessage: "err.reason",
    }
    var fake = sinon.fake.returns({
      type: 'OPEN_TOAST',
      showToast: true,
      toastIcon: "warn",
      toastMessage: "err.reason",
    });
    Meteor.logout = fake
    const store = mockStore({ base: { mail: 'test@test.com', name: 'xxxx', pass: 'xxxx' } })
    event = { preventDefault: () => { } }
    expect(store.dispatch(actions.logout(event))).toEqual(expectedAction)
  })
})
