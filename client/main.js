import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/route/routes.js';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('react-target'));
});
