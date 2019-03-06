import React from 'react'
import { Link } from 'react-router-dom';
import {
    GridIcon,
    GridLabel
} from 'react-weui';

import homeRoutes from '../../../startup/route/homeRoutes'

const HomeTab = () => {
    const grids = homeRoutes.map(d => {
        return (
            <Link className="weui-grid" key={d.tabpath} to={"/tab/" + d.tabname + "/" + d.tabpath}>
                <GridIcon>{d.icon}</GridIcon>
                <GridLabel>{d.label}</GridLabel>
            </Link>
        )
    })

    return (
        <div className="weui-grids">
            {grids}
        </div>
    );
}

export default HomeTab