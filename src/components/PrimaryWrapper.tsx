import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

const PrimaryWrapper = (props) => {
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: '#418B86'}} />
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="light-content" />
        {props.children}
      </SafeAreaView>
    </>
  );
};

export default PrimaryWrapper;
