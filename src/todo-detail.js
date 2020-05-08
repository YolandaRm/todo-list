import React from 'react';
import { withRouter } from 'react-router-dom';

function TodoDetail(props) {
    return <h1>Todo Detail {props.match.params.id}</h1>
}

export default withRouter(TodoDetail);