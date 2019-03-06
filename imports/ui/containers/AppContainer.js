import React from 'react'
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {
  TabBar,
  TabBarItem,
} from 'react-weui';

import { swtichTab } from '../../actions'
import BasePage from '../pages/BasePage'
import WaitPage from '../pages/WaitPage'
import tabs from '../tabs'

const App = ({ ...props }) => {

  if (!props.userId) {
    return <Redirect to='/login' />
  }
  if (!props.currentUser) return <WaitPage />;

  let activeTab = props.match.params.tab ? props.match.params.tab : "home"

  let panels = tabs(props).filter(t => {
    return t.id === activeTab
  })

  if (panels.length === 0) {
    activeTab = "home"
    panels = tabs(props).filter(t => (t.id === activeTab))
  }

  const tabBar = tabs(props).map(item => {
    return (
      <TabBarItem
        key={item.id}
        active={activeTab === item.id}
        onClick={e => props.swtichTab('/tab/' + item.id, item.id, item.title, item.desc)}
        icon={item.icon}
        label={item.label}
      />
    )
  })

  return (
    <BasePage {...props} disfooter title={props.title} desc={props.desc}
      page={
        <div>
          <div className="weui-tab__panel">
            {panels[0].panel}
          </div>
          <TabBar>
            {tabBar}
          </TabBar>
        </div>
      }
    />
  );
}

App.propTypes = {
  swtichTab: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  title: state.base.title,
  desc: state.base.desc
})

const mapDispatchToProps = dispatch => ({
  swtichTab: (path, name, title, desc) => dispatch(swtichTab(path, name, title, desc)),
})

export default connect(mapStateToProps, mapDispatchToProps)
  (withTracker((props) => {
    return {
      userId: Meteor.userId(),
      currentUser: Meteor.user(),
      ...props
    };
  })(App))