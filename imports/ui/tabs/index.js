import React from 'react'
import HomeTab from "./home"
import MessageTab from "./message"
import ContactTab from "./contact"
import SettingTab from "./setting"

const tabs = (props) => {
    //console.log(props)
    return ([
        {
            id: "home",
            label: "home",
            title: "home",
            desc: "home",
            icon:
                <span className="weui-tabbar_notice">
                    <img src="/images/icon_tabbar.png" />
                    <span className="weui-badge weui-badge_dot weui-tabbar_dot"></span>
                </span>,
            panel: <HomeTab {...props} />
        },
        {
            id: "message",
            label: "message",
            title: "message",
            desc: "message",
            icon:
                <span className="weui-tabbar_notice">
                    <img src="/images/icon_tabbar.png" />
                    <span className="weui-badge weui-tabbar_badge">5</span>
                </span>,
            panel: <MessageTab {...props} />
        },
        {
            id: "contact",
            label: "contact",
            title: "contact",
            desc: "contact",
            icon:
                <span className="weui-tabbar_notice">
                    <img src="/images/icon_tabbar.png" />
                    <span className="weui-badge weui-tabbar_badge">81</span>
                </span>,
            panel: <ContactTab {...props} />
        },
        {
            id: "setting",
            label: "setting",
            title: "setting",
            desc: "setting",
            icon: <img src="/images/icon_tabbar.png" />,
            panel: <SettingTab {...props} />
        }
    ])
}
export default tabs