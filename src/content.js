import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TodoList from './todo-list';

const TodoForm = React.lazy(() => import('./todo-form'));
const TodoDetail = React.lazy(() => import('./todo-detail'));

// class Lazy extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             Component: null
//         }
//     }
//     componentDidMount() {
//         this.props.load().then((Component) => {
//             this.setState({ Component })
//         })
//     }
//     render() {
//         const { Component } = this.state;
//         if (!Component) { return null; }
//         return <Component />
//     }
// }

export function Content() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path="/add">
                    <TodoForm />
                </Route>
                <Route path="/:id">
                    <TodoDetail />
                </Route>
                <Route path="/">
                    <TodoList />
                </Route>
            </Switch>
        </React.Suspense>
    )
}