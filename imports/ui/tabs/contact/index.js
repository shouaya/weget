import React from 'react';
import {
    Cells,
    CellsTitle,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
} from 'react-weui';

const ContactTab = (props) => (
    <div className="cell" >
        <CellsTitle>List with description</CellsTitle>
        <Cells>
            <Cell>
                <CellBody>
                    Title
                </CellBody>
                <CellFooter>
                    Description
                </CellFooter>
            </Cell>
        </Cells>

        <CellsTitle>List with Icon & Description</CellsTitle>
        <Cells>
            <Cell>
                <CellHeader>
                    <img src={'/images/icon.png'} alt="" style={{ display: `block`, width: `20px`, marginRight: `5px` }} />
                </CellHeader>
                <CellBody>
                    Title
                </CellBody>
                <CellFooter>
                    Description
                </CellFooter>
            </Cell>
            <Cell>
                <CellHeader>
                    <img src={'/images/icon.png'} alt="" style={{ display: `block`, width: `20px`, marginRight: `5px` }} />
                </CellHeader>
                <CellBody>
                    Title
                </CellBody>
                <CellFooter>
                    Description
                </CellFooter>
            </Cell>
        </Cells>

        <CellsTitle>List with link</CellsTitle>
        <Cells>
            <Cell href="javascript:;" access>
                <CellBody>
                    Title
                </CellBody>
                <CellFooter />
            </Cell>
            <Cell access>
                <CellBody>
                    Title
                </CellBody>
                <CellFooter />
            </Cell>
        </Cells>

        <CellsTitle>List with title & link</CellsTitle>
        <Cells>
            <Cell href="javascript:;" access>
                <CellBody>
                    Title
                </CellBody>
                <CellFooter>
                    Description
                </CellFooter>
            </Cell>
            <Cell access>
                <CellBody>
                    Title
                </CellBody>
                <CellFooter>
                    Description
                </CellFooter>
            </Cell>
        </Cells>

        <CellsTitle>List with Icon & Link</CellsTitle>
        <Cells>
            <Cell href="javascript:;" access>
                <CellHeader>
                    <img src={'/images/icon.png'} alt="" style={{ display: `block`, width: `20px`, marginRight: `5px` }} />
                </CellHeader>
                <CellBody>
                    Title
                </CellBody>
                <CellFooter>
                    Description
                </CellFooter>
            </Cell>
            <Cell access>
                <CellHeader>
                    <img src={'/images/icon.png'} alt="" style={{ display: `block`, width: `20px`, marginRight: `5px` }} />
                </CellHeader>
                <CellBody>
                    Title
                </CellBody>
                <CellFooter>
                    Description
                </CellFooter>
            </Cell>
        </Cells>
    </div>
);

export default ContactTab;