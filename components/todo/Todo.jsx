import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            desc: props.desc,
            done: props.done
        }
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({
            done: !this.state.done
        })
    }

    render() {
        const style = {
            margin: '0 auto',
            width: '50%',
            textAlign: 'center'
        };

        const inlineStyle = {
            margin: '0 auto',
            width: '100%',
        }

        if (this.state.done) {
            inlineStyle.textDecoration = 'line-through';
        }

        return (
            <Card style={style}>
                <CardHeader titleStyle={inlineStyle}
                    title={this.props.title}
                    subtitle="Subtitle"
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardActions>
                    <FlatButton label="Done" onClick={this.handleClick.bind(this)}/>
                </CardActions>
                <CardText expandable={true}>
                    {this.props.desc}
                </CardText>
            </Card>
        )
    }
}

export default Todo;