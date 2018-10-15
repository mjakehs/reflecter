//should include a table with previous feedback in it
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ADMIN_ACTIONS from '../../redux/actions/ADMIN_ACTIONS';
import FeedbackItem from '../FeedbackItem/FeedBackItem';
import axios from 'axios';

//styles for table
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//styles for confirm dialog
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

class Admin extends Component {
    state = {
        open: false,
        toDeleteId: '',
    };

    handleClickOpen = id => {
        this.setState({ 
            ...this.state,
            open: true,
            toDeleteId: id, 
        });
    };//opens confirm dialog (as props to FeedbackItem)

    handleClose = event => {
        this.setState({
            ...this.state,
             open: false });
        if (event.target.innerHTML === 'Confirm'){
            axios({
                method: 'DELETE',
                url: '/api/feedback',
                params: {
                    id: this.state.toDeleteId,
                }
            })
            .then(() => {
                    this.setFeedback();
            })
            .catch(err => {
                    console.log(err);
                    alert('Error deleting feedback from database.');
             })
        }
    };//closes dialog and deletes if confirmed

    setFeedback = () => {
        axios.get('/api/feedback')
            .then(response => {
                this.props.dispatch({ type: ADMIN_ACTIONS.SET_FEEDBACK_HISTORY, payload: response.data })
            })
            .catch(err => {
                console.log(err);
                alert('Error getting feedback from database.');
            })
    }//get feedback + save to store

    componentDidMount() {
        this.setFeedback();
    }

    render() {
        return (
            <div className="admin">
                <Table id="admin-table">
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>Flagged</CustomTableCell>
                            <CustomTableCell>Feeling</CustomTableCell>
                            <CustomTableCell>Comprehension</CustomTableCell>
                            <CustomTableCell>Support</CustomTableCell>
                            <CustomTableCell>Comments</CustomTableCell>
                            <CustomTableCell>Delete</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.feedbackHistory.map(feedback => {
                            return <FeedbackItem handleOpen={this.handleClickOpen} setFeedback={this.setFeedback} feedback={feedback} />
                        })}
                    </TableBody>
                </Table>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <DialogTitle id="alert-dialog-title">{"Delete Feedback Item?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Feedback items are not resorable after deletion.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

const mapReduxStateToProps = ({ admin }) => ({ feedbackHistory: admin })

export default withStyles(styles)(connect(mapReduxStateToProps)(Admin));