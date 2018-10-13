//button that adds form value to state
//takes path of next view and redux action as props
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import STAGE_ACTIONS from '../../redux/actions/STAGE_ACTIONS';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ArrowForward from '@material-ui/icons/ArrowForward';

let nextPath = '';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

class NextButton extends Component {

    handleNextAction = () => {
        this.props.history.push(nextPath)
        this.props.dispatch({ type: STAGE_ACTIONS.NEXT_STAGE })
    }

    setPath = props => {
        switch (props) {
            case 1:
                nextPath = '/feedback/2';
                break;
            case 2:
                nextPath = '/feedback/3';
                break;
            case 3:
                nextPath = '/feedback/4';
                break;
            case 4:
                nextPath = '/complete';
                break;
        }
    }

    componentDidMount() {
        this.setPath(this.props.stage);
    }

    render() {
        return (
            <div>
                <Button variant="contained" color="primary" size="large" onClick={this.handleNextAction}>
                    Next
                    <ArrowForward className={this.props.classes.rightIcon} />
                </Button>
            </div>
        );
    }
}

const mapStateToProps = ({ stage }) => ({ stage });

export default withStyles(styles)(withRouter(connect(mapStateToProps)(NextButton)));