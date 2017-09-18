import React, {PropTypes, Component} from 'react';
import {Link, browserHistory} from 'react-router'
import {AppBar, IconButton} from 'material-ui'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import Drawer from 'material-ui/Drawer';


class Header extends Component {

    constructor() {
        super();
        this.state = {
            open: false
        };
        console.log(this.state)
    }


    changeUrl(name) {
        browserHistory.push(name);
    }


    render() {
        const style = {
            marginBottom: '0px'
        };
        return ( <header className="header">
                <AppBar
                    title="Marutaku Blog"
                    iconElementRight={
                        <IconMenu
                            iconButtonElement={
                                <IconButton>
                                    <MoreVertIcon />
                                </IconButton>
                            }
                        >
                            <MenuItem
                                onClick={() => {
                                    this.changeUrl('/')
                                }}
                            primaryText="Top" />
                            <MenuItem
                                onClick={() => {
                                    this.changeUrl('blog')
                                }}
                                primaryText="Blog" />
                            <MenuItem
                                onClick={() => {
                                    this.changeUrl('todo')
                                }}
                                primaryText="TodoList(tutorial of react)" />
                        </IconMenu>
                    }
                    style={style}
                    showMenuIconButton={false}
                />
            </header>
        )
    }
}

export default Header;