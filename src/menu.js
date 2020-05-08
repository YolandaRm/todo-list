import React from 'react';
import MenuItem from './menuItem';

export class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: []
        }
    }
    componentDidMount() {
        this._getMenuItems();
    }
    async _getMenuItems() {
        const response = await fetch('http://localhost:3005/menu-items');
        const items = await response.json();
        this.setState({menuItems: items});
    }
    render() {
        return (
            <nav className='app__navegacion'>
                <ul className='app__navegacion__lista'>
                    {this.state.menuItems.map((item) => {
                        return <MenuItem key={item.id} text={item.text} link={item.link}></MenuItem>
                    })}
                </ul>
            </nav>
        );
    }
}