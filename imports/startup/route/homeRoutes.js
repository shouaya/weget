import React from 'react'

import ButtonPage from '../../ui/tabs/home/pages/button'
import PreviewPage from '../../ui/tabs/home/pages/preview'
import ArticlePage from '../../ui/tabs/home/pages/article'
import SliderPage from '../../ui/tabs/home/pages/slider'
import FormPage from '../../ui/tabs/home/pages/form'
import UploaderPage from '../../ui/tabs/home/pages/uploader'
import IconPage from '../../ui/tabs/home/pages/icon'
import MsgPage from '../../ui/tabs/home/pages/msg'
import PickerPage from '../../ui/tabs/home/pages/picker'
import ProgressPage from '../../ui/tabs/home/pages/progress'
import PanelPage from '../../ui/tabs/home/pages/panel'
import LoadMorePage from '../../ui/tabs/home/pages/loadmore'

const homeRoutes = [
    {
        icon: <img src="/images/icon_tabbar.png" />,
        label: 'Button',
        tabpath: 'button',
        tabname: 'home',
        tabpage: ButtonPage,
    },
    {
        icon: <img src="/images/icon_tabbar.png" />,
        label: 'Preview',
        tabpath: 'preview',
        tabname: 'home',
        tabpage: PreviewPage,
    },
    {
        icon: <img src="/images/icon_tabbar.png" />,
        label: 'Article',
        tabpath: 'article',
        tabname: 'home',
        tabpage: ArticlePage,
    },
    {
        icon: <img src="/images/icon_tabbar.png" />,
        label: 'Slider',
        tabpath: 'slider',
        tabname: 'home',
        tabpage: SliderPage,
    },
    {
        icon: <img src="/images/icon_tabbar.png" />,
        label: 'Form',
        tabpath: 'form',
        tabname: 'home',
        tabpage: FormPage,
    },
    {
        icon: <img src="/images/icon_tabbar.png" />,
        label: 'Uploader',
        tabpath: 'uploader',
        tabname: 'home',
        tabpage: UploaderPage,
    },
    {
        icon: <img src="/images/icon_tabbar.png" />,
        label: 'Icon',
        tabpath: 'icon',
        tabname: 'home',
        tabpage: IconPage,
    },
    {
        icon: <img src="/images/icon_tabbar.png" />,
        label: 'Msg',
        tabpath: 'msg',
        tabname: 'home',
        tabpage: MsgPage,
    },
    {
        icon: <img src="/images/icon_tabbar.png" />,
        label: 'Picker',
        tabpath: 'picker',
        tabname: 'home',
        tabpage: PickerPage,
    },
    {
        icon: <img src="/images/icon_tabbar.png" />,
        label: 'Progress',
        tabpath: 'progress',
        tabname: 'home',
        tabpage: ProgressPage,
    },
    {
        icon: <img src="/images/icon_tabbar.png" />,
        label: 'Panel',
        tabpath: 'panel',
        tabname: 'home',
        tabpage: PanelPage,
    },
    {
        icon: <img src="/images/icon_tabbar.png" />,
        label: 'LoadMore',
        tabpath: 'loadmore',
        tabname: 'home',
        tabpage: LoadMorePage,
    }
]

export default homeRoutes