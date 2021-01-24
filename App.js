import React from 'react';
import {createAppContainer} from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import {createStackNavigator} from 'react-navigation-stack';
import Tutorial from './src/screens/tutorial';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import WelcomeScreen from './src/screens/Welcome';
import TestMenu from './src/screens/TestMenu';
import AmslerGrid from './src/screens/AmslerGrid';
import ColourVision from './src/screens/ColorVision';
import PaintScreen from './src/screens/PaintScreen';
import CBResults from './src/screens/CBResults';
import iBlur from './src/screens/iBlur';
import Practice from './src/screens/Practice';
import CameraContainer from './src/screens/ImageRec';
import ResultsPage from './src/screens/ResultsPage';
import UploadScreen from './src/Components/uploadButton';
import ScreenA from './src/Components/ScreenA';
import ScreenB from './src/Components/ScreenB';


import Pretest from './src/Pretest';

import CameraCalibrater from './src/screens/Scan/Calibrate';
import Scan from './src/screens/Scan/Scan'
import ResultsDetail from './src/screens/ResultDetails'

//import GoogleApi from './src/screens/GoogleAPI';


const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Tutorial: Tutorial,
    ResultsShow: ResultsShowScreen,
    Welcome: WelcomeScreen,
    Menu: TestMenu,
    Amsler: PaintScreen,
    Colour: ColourVision,
    Paint: PaintScreen,
    CB: CBResults,
    iBlur: iBlur,
    Pract: Practice,
    ImageAPI: CameraContainer,
    AmslerTest: PaintScreen,
    Resultsp: ResultsPage,
    ScanD: Scan,
    //up: UploadScreen,
    Pract: Practice,
    ImageAPI : CameraContainer,
    Resultsp: ResultsPage,
    ResultsD:ResultsDetail,
    ImageCalib: CameraCalibrater,
    Pret : Pretest,

  },
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      title: 'i-Gnosis Intelligence Application',
    },
  },
);

const AppContainer = createAppContainer(navigator);

const App = () => {
  return <AppContainer />;
};

export default App;
