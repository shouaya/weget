import React, { Component } from 'react';

import {
  Msg,
  Page,
  Footer,
  FooterText
} from 'react-weui';

export default class ErrorPage extends Component {

  render() {
    return (
      <Page>
        <Msg
          type="warn"
          title="Service Error"
          description="異常終了になりました。"
        />
        <Footer  className="weui-footer_fixed-bottom">
          <FooterText>Copyright © 2019 wesales</FooterText>
        </Footer>
      </Page>
    );
  }
}