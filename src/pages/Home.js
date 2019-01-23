// @flow
import React, { Component } from 'react';
import Main from '../containers/main/Main';
import {type ContextRouter } from 'react-router-dom';
import PageTemplate from '../components/common/PageTemplate';

type Props = {

}

class Home extends Component<Props> {
    render () {
        return (
            <PageTemplate>
                <Main/>
            </PageTemplate>
        )
    }
}

export default Home