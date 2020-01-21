import React from "react";
import moment from 'moment';
import TrainIcon from '@material-ui/icons/Train';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import TramIcon from '@material-ui/icons/Tram';
import SubwayIcon from '@material-ui/icons/Subway';


/**
 * Component loop given leg type vehicle or walk and set starting time 
 * @param {Array} props: List of vehicles
 */
function Vehicles(props) {
    const vehicles = props.legs
      // eslint-disable-next-line
      .map((vehicle, i) => {
        if (vehicle.mode === "WALK") {
          return (
            <div key={i} className="vehicles">
                <div className="leg-container">
                  <AccessibilityIcon style={{ fontSize: 17 }} />
                </div>
                {moment(vehicle.startTime).format("HH:mm")} 
            </div>
          );
        } else {
          return (
            <div key={i} className="vehicles">
                <div className="leg-container">
                  {vehicleIcon(vehicle.mode)}
                  {vehicle.route.shortName}
                </div>
                {moment(vehicle.startTime).format("HH:mm")} 
            </div>
          );
        }
      });
    return <div>{vehicles}</div>;
}


/**
 * Function take vehicle mode as parameter and select right icon for it
 * @param {String} mode: wich vehicle 
 * @Return icon component
 */
const vehicleIcon = (mode) => {
    switch(mode) {
        case 'BUS': 
            return (<DirectionsBusIcon style={{ fontSize: 17 }} />)
        case 'RAIL':
            return (<TrainIcon style={{ fontSize: 17 }} />)
        case 'TRAM':
            return (<TramIcon style={{ fontSize: 17 }} />)
        case 'SUBWAY':
            return (<SubwayIcon style={{ fontSize: 17 }} />)
        default:
            return
    }
}

export default Vehicles;
