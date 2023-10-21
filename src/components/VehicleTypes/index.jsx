import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles.jsx';
import VehicleTypeRow from '../VehicleTypeRow';

import typesData from '../../assets/data/types';

const VehicleTypes = props => {
  const confirm = () => {
    console.warn('confirm');
  };

  return (
    <View>
      {typesData.map(type => (
        <VehicleTypeRow type={type} />
      ))}
      <Pressable
        onPress={confirm}
        style={{
          backgroundColor: 'black',
          padding: 20,
          margin: 10,
          alignItems: 'center',
          borderRadius: 15,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm Ride</Text>
      </Pressable>
    </View>
  );
};

export default VehicleTypes;
