import { gql } from 'apollo-boost';
/**
 * Exported queryString to the api service
 * @param {String} from: starting point address
 * @param {String} to: destination address
 */
export default function queryFormatter(from, to) {
  return gql` {
        plan(
            fromPlace: "${from}",
            toPlace: "${to}",
            numItineraries: 20,
            minTransferTime: 500,
            transportModes: [{mode: WALK}, {mode: BUS}, {mode: RAIL}, {mode: TRAM}, {mode: SUBWAY}]
        ) {
            from {name}
            to {name}
            itineraries{
              walkDistance
              duration
              startTime
              endTime
              legs {
                mode
                startTime
                endTime
                route {
                  shortName
                  longName
                }
                from {
                  name
                },
                to {
                  name
                },
              }
            }
        }
    }
` 
}






