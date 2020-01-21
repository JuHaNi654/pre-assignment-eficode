import React from "react";
import moment from 'moment';
import Vehicles from './Vehicles'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

/**
 * Table row component
 */
function ScheduleRow(props) {
    return props.itineraries.map((item, i) => (
        <TableRow className="table-row" key={i}>
            <TableCell align="center">
                <p className="text-size-md">{moment(item.startTime).format("HH:mm")}</p>
            </TableCell>
            <TableCell align="center">
                <Vehicles legs={item.legs} />
            </TableCell>
            <TableCell align="center">
                <p className="text-size-md">{moment(item.endTime).format("HH:mm")}</p>
            </TableCell>
        </TableRow>
    ));
}

export default ScheduleRow