import React from 'react';
import { StatusBar } from 'react-native';
import UploadScreen from '../Components/uploadButton';
const Upload = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <UploadScreen />
    </>
  );
};
export default Upload;