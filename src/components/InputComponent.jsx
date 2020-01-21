import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { connect } from 'react-redux'
import axios from 'axios';

/**
 * Function will try get geolocation coordinates from given addreess
 * @param {String} address: Given address parameter
 * @return {String} address::lat,lnt
 */
const getCoordinates = async (address) => {
  try {
    const result = await axios.get(`https://api.digitransit.fi/geocoding/v1/search?text=${address}&size=1`)
      .then(result => {
        let coordinates = result.data.features[0].geometry.coordinates
        return address + "::" + coordinates[1] + "," + coordinates[0]
      })
      .catch(err => {
        console.error(err)
        return ""
      })
    return result
  } catch (err) {
    console.error(err)
  }
}

function InputComponent(props) {
  const [startingPoint, setStartingPoint] = useState("");
  const [destination, setDestination] = useState("");


  /**
   * Checking valid valid characters only and returns if input fields are empty.
   * Saves given addresses to the redux state
   */
  const findSchedule = async () => {
    const regex = /^[\s\da-zA-ZåäöÅÄÖ-]+$/
    if (regex.test(startingPoint) && regex.test(destination)) {
      if (startingPoint.trim().length < 1 && destination.trim().length < 1) return

      const add1 = await getCoordinates(startingPoint)
      const add2 = await getCoordinates(destination)

      props.saveStartingCoord(add1)
      props.saveDestCoord(add2)
    }
  }
  /**
   * Set eficode hq addrees as destination
   */
  const addEfiHqAddress = () => {
    setDestination('Pohjoinen Rautatiekatu 25')
  }

  /**
   * Switch addresses
   */
  const switchAddress = () => {
    setStartingPoint(destination)
    setDestination(startingPoint)
  }

  return (
    <div className="container">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <TextField
                id="startingPoint"
                label="Starting point"
                value={startingPoint}
                onChange={e => setStartingPoint(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                id="destination"
                label="Destination"
                value={destination}
                onChange={e => setDestination(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <Button variant="contained"
                onClick={findSchedule}
                color="primary">
                Search
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained"
                onClick={addEfiHqAddress}
                color="primary">
                Eficode HQ
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained"
                onClick={switchAddress}
                color="primary">
                switch
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        states: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        saveStartingCoord: (obj) => {
          const action = { type: 'SAVE_STARTING_COORDINATE', query: obj}
          dispatch(action)
        },
        saveDestCoord: (obj) => {
          const action = { type: 'SAVE_DESTINATION_COORDINATE', query: obj }
          dispatch(action)
      }
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);
