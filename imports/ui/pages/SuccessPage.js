import React, { Component } from 'react';

import {
  Msg,
  Page,
  Footer,
  FooterText
} from 'react-weui';

export default class SuccessPage extends Component {

  render() {
    return (
      <Page>
        <Msg
          type="success"
          title="Suucess"
          description="正常終了になりました。"
        />
        <Footer className="weui-footer_fixed-bottom">
          <FooterText>Copyright © 2019 wesales</FooterText>
        </Footer>
      </Page>
    );
  }
}