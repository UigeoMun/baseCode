//@flow
import React, { type Node } from 'react';
import BackgroundColor from '../../common/BackgroundColor';
import './MainTemplate.scss';
import { Grid } from '@material-ui/core';

type Props = {
    children: Node,
    sidebar : Node
}

const MainTemplate = ({children, sidebar} : Props) => (
    <Grid className="MainTemplate">
        <BackgroundColor color="#f1f3f5" />
        {sidebar}
        {children}
    </Grid>
)

export default MainTemplate;