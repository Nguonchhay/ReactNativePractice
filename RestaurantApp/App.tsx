import React from 'react';
import { Provider } from 'react-redux';
import { NativeBaseProvider } from 'native-base';

import { theme, colorModeManager} from './src/theme';
import store from './src/redux/store';
import Screens from './src/screens';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
        <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>
          <Screens />
        </NativeBaseProvider>
    </Provider>
  );
}

export default App;
