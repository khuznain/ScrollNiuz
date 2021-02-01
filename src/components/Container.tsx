import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native';
import {StyleSheet} from 'react-native';

export interface ContainerProps {
  children?: ReactNode;
}

const Container = ({children}: ContainerProps) => {
  return (
    <>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Container;
