
const initState = {
  showToast: false,
  toastIcon: "warn",
  toastMessage: "",
  activeTab: "home",
  title: "home",
  desc: "home"
}

const base = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        [action.name]: action.value,
      }
    case 'CLOSE_TOAST':
      return {
        ...state,
        showToast: false
      }
    case 'OPEN_TOAST':
      return {
        ...state,
        showToast: true,
        toastIcon: action.toastIcon,
        toastMessage: action.toastMessage,
        toastRedirect: action.toastRedirect,
      }
    case 'REDIRECT':
      return {
        ...state,
        redirect: action.redirect
      }
    case 'SWTICH_TAB':
      return {
        ...state,
        activeTab: action.name,
        title: action.title,
        desc: action.desc
      }
    default:
      return state
  }
}

export default base
