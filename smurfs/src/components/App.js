import React, { Component } from "react";
import styled from "styled-components";
import Smurfs from "./Smurfs";
import GlobalStyle from "./styled/GlobalStyle";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
const AppWrapper = styled.div`
  margin: 4rem auto;
  width: 100%;
  height: 100%;
`;
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <AppWrapper>
          <Smurfs />
        </AppWrapper>
      </React.Fragment>
    );
  }
}

export default App;
