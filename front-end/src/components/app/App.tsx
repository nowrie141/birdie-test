import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ListElement } from '@App/components/app/ListElement';
import { RootState } from '@App/store/reducers';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Observation } from '@App/types/Observation';
// import Title from '@App/components/Title';
// import Logo from '@App/components/Logo';
// import SubTitle from '@App/components/SubTitle';

// const LogoUrl = require('../../assets/images/logo-birdie.svg');

interface AppProps {
}

interface AppState {
  observations: Observation[];
}

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: #F9F9F9;
    > div {
      height: 100%;
    }
  }
`;

// const AppContainer = styled.div`
//  width: 100%;
//  height: 100%;
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  flex-direction: column;
// `;

class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    observations: [],
  };

  componentDidMount() {
    fetch('http://localhost:8000/data')
      .then(res => res.json())
      .then(res => this.setState({
        observations: res.data
      }));
  }

  public constructor(props: AppProps) {
    super(props);
  }

  public render() {
    return (
      <>
        <GlobalStyle />
        <div className="App-intro">
          <ul role="list">
            {
              this.state.observations.map(element =>
                <ListElement
                  key={element.id}
                  id={element.id}
                  payload={element.payload}
                />)
            }
          </ul>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: object) => { };

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => { };

export default connect(mapStateToProps, mapDispatchToProps)(App);