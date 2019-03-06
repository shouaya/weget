import React, { Component } from 'react';

import {
  Page,
  Msg,
  Footer,
  FooterText
} from 'react-weui';

export default class ErrorPage extends Component {

  render() {
    return (
      <Page>
        <Msg
          type="warn"
          title="Page not Found"
          description="ページが見つかりません "
        />
        <Footer  className="weui-footer_fixed-bottom">
          <FooterText>Copyright © 2019 wesales</FooterText>
        </Footer>
      </Page>
    );
  }
}
