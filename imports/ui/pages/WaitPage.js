import React, { Component } from 'react';

import {
  LoadMore,
  Page,
  Footer,
  FooterText
} from 'react-weui';

export default class SuccessPage extends Component {

  render() {
    return (
      <Page>
        <LoadMore loading>Loading</LoadMore>
        <Footer className="weui-footer_fixed-bottom">
          <FooterText>Copyright © 2019 wesales</FooterText>
        </Footer>
      </Page>
    );
  }
}