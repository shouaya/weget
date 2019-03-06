import { Accounts } from 'meteor/accounts-base'
import { push } from 'react-router-redux';

const validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const changeInput = (name, value) => ({
  type: 'CHANGE_INPUT',
  name,
  value
})

export const closeToast = () => ({
  type: 'CLOSE_TOAST',
})

export const swtichTab = (path, name, title, desc) => {
  return dispatch => {
    dispatch({ type: 'SWTICH_TAB', name, title, desc });
    return dispatch(push(path))
  };
}

export const login = (e) => {
  e.preventDefault();
  return (dispatch, getState) => {
    const state = getState().base
    if (!state.mail || !state.pass) {
      return dispatch({
        type: 'OPEN_TOAST',
        toastIcon: 'warn',
        toastMessage: 'place check mail or pass',
      });
    }
    if (!validateEmail(state.mail)) {
      return dispatch({
        type: 'OPEN_TOAST',
        toastIcon: 'warn',
        toastMessage: 'place check mail',
      });
    }
    return Meteor.loginWithPassword(state.mail, state.pass, (err) => {
      if (err) {
        return dispatch({
          type: 'OPEN_TOAST',
          showToast: true,
          toastIcon: "warn",
          toastMessage: err.reason,
        });
      }
      return dispatch(push('/'))
    });
  };
}

export const forgotPassword = (e) => {
  e.preventDefault();
  return (dispatch, getState) => {
    const state = getState().base
    if (!state.mail) {
      return dispatch({
        type: 'OPEN_TOAST',
        toastIcon: 'warn',
        toastMessage: 'place check mail',
      });
    }
    if (!validateEmail(state.mail)) {
      return dispatch({
        type: 'OPEN_TOAST',
        toastIcon: 'warn',
        toastMessage: 'place check mail',
      });
    }
    return Accounts.forgotPassword({ email: state.mail }, (err) => {
      if (err) {
        return dispatch({
          type: 'OPEN_TOAST',
          showToast: true,
          toastIcon: "warn",
          toastMessage: err.reason,
        });
      }
      return dispatch(push('/success'))
    });
  }
}

export const signup = (e) => {
  e.preventDefault();
  return (dispatch, getState) => {
    const state = getState().base
    if (!state.mail || !state.name || !state.pass) {
      return dispatch({
        type: 'OPEN_TOAST',
        toastIcon: 'warn',
        toastMessage: 'place check name , mail or pass',
      });
    }
    if (!validateEmail(state.mail)) {
      return dispatch({
        type: 'OPEN_TOAST',
        toastIcon: 'warn',
        toastMessage: 'place check mail',
      });
    }
    return Accounts.createUser({ email: state.mail, username: state.name, password: state.pass }, (err) => {
      if (err) {
        return dispatch({
          type: 'OPEN_TOAST',
          showToast: true,
          toastIcon: "warn",
          toastMessage: err.reason,
        });
      }
      return dispatch(push('/'))
    });
  }
}

export const resetPassword = (token, e) => {
  e.preventDefault();
  return (dispatch, getState) => {
    const state = getState().base
    //console.log(token, state)
    if (!state.pass || !token) {
      return dispatch({
        type: 'OPEN_TOAST',
        toastIcon: 'warn',
        toastMessage: 'place check url or pass',
      });
    }
    return Accounts.resetPassword(token, state.pass, (err) => {
      if (err) {
        return dispatch({
          type: 'OPEN_TOAST',
          showToast: true,
          toastIcon: "warn",
          toastMessage: err.reason,
        });
      }
      return dispatch(push('/'))
    });
  }
}

export const logout = (e) => {
  e.preventDefault();
  return dispatch => {
    return Meteor.logout((err) => {
      if (err) {
        return dispatch({
          type: 'OPEN_TOAST',
          showToast: true,
          toastIcon: "warn",
          toastMessage: err.reason,
        });
      }
      return dispatch(push('/login'))
    });
  };
}