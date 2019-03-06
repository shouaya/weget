import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    Toast,
    Footer,
    FooterText
} from 'react-weui';
import { closeToast } from '../../actions'

const BasePage = ({ title, desc, toast, page, redirect, ...props }) => {

    if (toast.showToast) {
        setTimeout(() => props.dispatch(closeToast()), 1000)
    }

    return (
        <div className="page tabbar js_show">
            <div className="page__bd">
                <div className="weui-tab">
                    <div className="page__hd">
                        <div className="page__title">{title}</div>
                        <div className="page__desc">{desc}</div>
                    </div>
                    {page}
                    <Toast icon={toast.toastIcon} show={toast.showToast}>{toast.toastMessage}</Toast>
                    {
                        !props.disfooter && (
                            <Footer className="weui-footer_fixed-bottom">
                                <FooterText>Copyright © 2019 wesales</FooterText>
                            </Footer>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

BasePage.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    toast: PropTypes.object.isRequired,
    page: PropTypes.node.isRequired,
}

const mapStateToProps = state => ({
    toast: {
        showToast: state.base.showToast,
        toastIcon: state.base.toastIcon,
        toastMessage: state.base.toastMessage,
        toastRedirect: state.base.toastRedirect
    },
    redirect: state.base.redirect
})

export default connect(mapStateToProps)(BasePage)