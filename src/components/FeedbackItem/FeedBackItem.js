//used as return for map function in Admin component
import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox'


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
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

class FeedBackItem extends Component {

    deleteFeedback = id => {
        axios({
            method: 'DELETE',
            url: '/api/feedback',
            params: {
                id: id,
            }
        })
            .then(() => {
                this.props.setFeedback();
            })
            .catch(err => {
                console.log(err);
                alert('Error deleting feedback from database.');
            })
    }

    flagFeedback = () => {   
        axios({
            method: 'PUT',
            url: '/api/feedback',
            data: { flagged: !this.props.feedback.flagged},
            params: {
                id: this.props.feedback.id,
            }
        })
        .then(results => {
            console.log(results);
            this.props.setFeedback();
        })
        .catch(err => {
            console.log(err);
            alert('Error flagging feedback.');
        })
    }

    render() {
        return (
            <TableRow className={this.props.classes.row} key={this.props.feedback.id}>
                <TableCell padding="checkbox">
                    <Checkbox
                        checked={this.props.feedback.flagged}
                        onChange={this.flagFeedback}
                    />
                </TableCell>
                <CustomTableCell>{this.props.feedback.feeling}</CustomTableCell>
                <CustomTableCell>{this.props.feedback.understanding}</CustomTableCell>
                <CustomTableCell>{this.props.feedback.support}</CustomTableCell>
                <CustomTableCell>{this.props.feedback.comments}</CustomTableCell>
                <CustomTableCell><Button variant="contained" size="small" onClick={() => this.deleteFeedback(this.props.feedback.id)}>Delete</Button></CustomTableCell>
            </TableRow>
        );
    }
}

export default withStyles(styles)(FeedBackItem);