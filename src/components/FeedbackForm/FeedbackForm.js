//input form to accept feedback
//takes question as props
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ArrowForward from '@material-ui/icons/ArrowForward';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

class FeedbackForm extends Component {

    state = {
        inputValue: '',
    }

    handleInputChange = event => {
        let newInput = event.target.value;
        this.props.dispatch({ type: this.props.formAction, payload: newInput})
        this.setState({
            inputValue: newInput,
        })
    }

    handleNextAction = () => {
        this.props.history.push(this.props.path);
        this.props.dispatch({type: this.props.stageAction})
    }

    render() {
        return (
            <form autoComplete="off">
            <h3 className="form-header">{this.props.prompt}</h3>
                <FormControl>
                    <InputLabel htmlFor="reflectorSelector">{this.props.label}</InputLabel>
                    <Select
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        inputProps={{
                            name: this.props.label,
                            id: 'reflectorSelector',
                        }}
                    >
                        <MenuItem value={1}>One</MenuItem>
                        <MenuItem value={2}>Two</MenuItem>
                        <MenuItem value={3}>Three</MenuItem>
                        <MenuItem value={4}>Four</MenuItem>
                        <MenuItem value={5}>Five</MenuItem>

                    </Select>
                    <Button className={this.props.button} variant="contained" color="primary" size="large" onClick={this.handleNextAction}>
                        Next
                        <ArrowForward className={this.props.classes.rightIcon} />
                    </Button>
                </FormControl>
            </form>
        );
    }
}

export default withRouter(withStyles(styles)(connect()(FeedbackForm)));

