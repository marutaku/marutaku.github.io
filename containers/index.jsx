import React, {Component, PropTypes} from 'react';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';


class Index extends Component{


    render(){
        const style = {
            margin:'5px'
        }
        return (
            <div id="index">
            <div className="main" >
                <div className="headline">
                <h1 className="title">Welcome to my blog</h1>
                </div>
                <div className="contents-wrapper">
                <h2>About Me</h2>
                <p>
                    天才プログラマーになることを夢見て日々パソコンに明け暮れる20歳。<br />
                    彼女の尻に敷かれ、友達にバカにされながら未だにクールキャラになることを諦められない<br />
                    PythonオタでJavascriptに明け暮れる。
                </p>
                <h2>ポートフォリオ</h2>
                <ul>
                    <li>Twitterもどき</li>
                    <li>みんなで図書館</li>
                    <li>時間管理アプリ</li>
                    <li>STRAPSE(共同制作)</li>
                </ul>
                <h2>Access</h2>
                    <List>
                        <ListItem
                            disabled={true}
                            leftAvatar={
                                <Avatar
                                    icon={<IconButton iconClassName="muidocs-icon-custom-github" />}
                                    size={30}
                                    style={style}
                                />
                            }>
                            GitHub
                        </ListItem>
                        <ListItem
                            disabled={true}
                            leftAvatar={
                                <Avatar
                                    icon={<IconButton iconClassName="muidocs-icon-custom-github" />}
                                    size={30}
                                    style={style}
                                />
                            }>
                            Facebook
                        </ListItem>
                        <ListItem
                            disabled={true}
                            leftAvatar={
                                <Avatar
                                    icon={<IconButton iconClassName="muidocs-icon-custom-github" />}
                                    size={30}
                                    style={style}
                                />
                            }>
                            Twitter
                        </ListItem>
                    </List>
            </div>
            </div>
            </div>
        )
    }
}

export default Index;