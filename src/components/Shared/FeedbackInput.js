//input form to accept feedback
//takes question as props
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FORM_ACTIONS from '../../redux/actions/FORM_ACTIONS';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

let SELECTED_ACTION = '';
let propsName = '';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
});

class FeedbackInput extends Component {

    state = {
        prompt: '',
    }

    handleInputChange = event => {
        this.props.dispatch({ type: SELECTED_ACTION, payload: event.target.value })
        console.log(propsName);
    }

    selectActionByProps = props => {
        switch (props) {
            case 1:
                SELECTED_ACTION = FORM_ACTIONS.ADD_FEEBACK_ONE;
                propsName = 'feeling';
                this.setState({
                    prompt: 'How are you feeling today?',
                })
                break;
            case 2:
                SELECTED_ACTION = FORM_ACTIONS.ADD_FEEBACK_TWO;
                propsName = 'comprehension';
                this.setState({
                    prompt: 'How well are you understanding the content?',
                })
                break;
            case 3:
                SELECTED_ACTION = FORM_ACTIONS.ADD_FEEBACK_THREE;
                propsName = 'supported';
                this.setState({
                    prompt: 'How well are you being supported?',
                })
                break;
        }
    }

    componentDidMount() {
        this.selectActionByProps(this.props.stage);
    }

    render() {
        return (
            <form className={this.props.classes.root} autoComplete="off">
                <FormControl className={this.props.classes.formControl}>
                    <InputLabel htmlFor="reflectorSelector">{propsName}</InputLabel>
                    <Select
                        value={this.props.inputValue}
                        onChange={this.handleInputChange}
                        inputProps={{
                            name: propsName,
                            id: 'reflectorSelector',
                        }}
                    >
                        <MenuItem value={1}>One</MenuItem>
                        <MenuItem value={2}>Two</MenuItem>
                        <MenuItem value={3}>Three</MenuItem>
                        <MenuItem value={4}>Four</MenuItem>
                        <MenuItem value={5}>Five</MenuItem>

                    </Select>
                </FormControl>
               </form>
                );  
            }
        }
        
const mapStateToProps = (reduxState) => ({stage: reduxState.stage, inputValue: reduxState.feedbackForm[propsName] });
                
export default withStyles(styles)(connect(mapStateToProps)(FeedbackInput));