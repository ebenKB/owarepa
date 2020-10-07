import React, { Component } from 'react';

const initialState = {}
export const AppContext = React.createContext(initialState);

class AppContextProvider extends Component {
  state = {
    language: 'EN',
    navType: 'transparent',
    position: 'default',
  }

  setAppState = (data) => {
    console.log('We want to set app state', data)
    this.setState(data);
  }

  render() {
    return (
      <AppContext.Provider value={{data: this.state, setAppState: this.setAppState}}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
};

export default AppContextProvider;