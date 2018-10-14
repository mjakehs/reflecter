//should include a table with previous feedback in it
import React, {Component} from 'react';
import {connect} from 'react-redux';
import ADMIN_ACTIONS from '../../redux/actions/ADMIN_ACTIONS';
import FeedbackItem from '../FeedbackItem/FeedBackItem';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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

    setFeedback = () => {
        axios.get('/api/feedback')
        .then(response => {
            this.props.dispatch({type: ADMIN_ACTIONS.SET_FEEDBACK_HISTORY, payload: response.data})
        })
        .catch(err => {
            console.log(err);
            alert('Error getting feedback from database.');
        })
    }

    componentDidMount() {
        this.setFeedback();
    }

    render(){
        return(
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
                            return <FeedbackItem setFeedback={this.setFeedback} feedback={feedback} />
                        })}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

const mapReduxStateToProps = ({ admin }) => ({feedbackHistory: admin})

export default withStyles(styles)(connect(mapReduxStateToProps)(Admin));