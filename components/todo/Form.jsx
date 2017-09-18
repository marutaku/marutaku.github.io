import React, {Component} from'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
    margin: 12
};

class Form extends Component {



    render() {
        const style = {
            width: '100%'
        }

        return (
            <div>
                <form onSubmit={this.props.onSubmit} className="center" >
                    <TextField
                        hintText="Title"
                        floatingLabelText="Title"
                        style={style}
                    /><br />
                    <TextField
                        hintText="Task description"
                        multiLine={true}
                        rows={1}
                        rowsMax={4}
                        style={style}
                    /><br />
                    <RaisedButton type="submit" label="submit" style={style} />
                </form>
            </div>
        );
    }
}

export default Form;