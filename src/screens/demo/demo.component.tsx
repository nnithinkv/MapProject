import React from 'react';
import {Text, View} from 'react-native';
import Styles from '../map/style';

export const Demo = () => {
  return (
    <View style={Styles.demoScreen}>
      <Text style={Styles.item}>Demo screen</Text>
    </View>
  );
};

Demo.propTypes = {};

Demo.defaultProps = {};
