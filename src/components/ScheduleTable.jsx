import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import queryFormatter from './service/queryFormatter.js';
import ScheduleRow from './ScheduleRow';

// Table style
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
/**
 * Table Component with listed destination schedules
 */
function ScheduleTable(props) {
    const classes = useStyles();

    let TRAVEL_QUERY = queryFormatter(
        props.data.states.startingCoordinates,
        props.data.states.destinationCoordinates
    )
    // Fetching data query from api
    // pollInterval 180000: set that function will recall updated data from databae every 3 minutes
    const { loading, error, data } = useQuery(TRAVEL_QUERY, {
        pollInterval: 180000,
    });

    // Loader div animation is showing, while apolloquery is fetching data
    if (loading) return <div className="loader"></div>
    // If data is failed to fetch it will show unavailable message
    if (error) return <div className="info">Service is unavailable!</div>

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} arial-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">
                            <span className="text-size-lg">Departure</span>
                        </TableCell>
                        <TableCell align="center">
                            <span className="text-size-lg">Transportation numbers</span>
                            </TableCell>
                        <TableCell align="center">
                            <span className="text-size-lg">Arrival</span>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  <ScheduleRow itineraries={data.plan.itineraries}/>
                </TableBody>
            </Table>
        </TableContainer>
    )
}



export default ScheduleTable;
