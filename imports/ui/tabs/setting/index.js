import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
    Badge,
    Cells,
    Cell,
    CellBody,
    CellFooter,
    CellHeader,
    CellsTitle,
    ButtonArea,
    Button
} from 'react-weui';

import { logout } from '../../../actions'

const SettingTab = ({ logout }) => {
    return (
        <div className="badge">
            <CellsTitle>Footer Notification Badge</CellsTitle>
            <Cells>
                <Cell access>
                    <CellBody>Label</CellBody>
                    <CellFooter>
                        Details
                    <Badge dot preset="footer" />
                    </CellFooter>
                </Cell>
            </Cells>

            <CellsTitle>Header & Body Badge</CellsTitle>
            <Cells>
                <Cell>
                    <CellHeader style={{ position: 'relative', marginRight: '10px' }}>
                        <img src={"/images/icon_tabbar.png"} style={{ width: '50px', display: 'block' }} />
                        <Badge preset="header">8</Badge>
                    </CellHeader>
                    <CellBody>
                        <p>Contact Name</p>
                        <p style={{ fontSize: '13px', color: '#888888' }}>Descriptions</p>
                    </CellBody>
                </Cell>
                <Cell access>
                    <CellBody>
                        Label
                    <Badge preset="body">8</Badge>
                    </CellBody>
                    <CellFooter />
                </Cell>
                <Cell access>
                    <CellBody>
                        Label
                    <Badge preset="body">8</Badge>
                    </CellBody>
                    <CellFooter>
                        Details
                </CellFooter>
                </Cell>
                <Cell access>
                    <CellBody>
                        Label
                    <Badge preset="body">new</Badge>
                    </CellBody>
                    <CellFooter />
                </Cell>
            </Cells>
            <ButtonArea>
                <Button type="default" onClick={logout}>
                    Logout
                </Button>
            </ButtonArea>
        </div>
    );
}

SettingTab.propTypes = {
    logout: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
    logout: e => dispatch(logout(e)),
})

export default connect(null, mapDispatchToProps)(SettingTab)