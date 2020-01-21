import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Schedule from './components/Schedule.jsx'
import store from './components/reducer/store'
import InputComponent from './components/InputComponent.jsx'

const client = new ApolloClient({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
})

function App() {
  return ( 
      <div>
        <header className="App-header">
          <h3>Transportation Schedule</h3>
        </header>
        <div className="body-container">
          <InputComponent store={store}/>
          <ApolloProvider client={client}>
            <Schedule store={store} />
          </ApolloProvider>
        </div>
      </div>

  );
}

export default App;
