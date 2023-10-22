import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles.jsx';
import VehicleTypeRow from '../VehicleTypeRow';

import typesData from '../../assets/data/types';
import {ScrollView} from 'react-native-gesture-handler';

const VehicleTypes = props => {
  const confirm = () => {
    console.warn('confirm');
  };

  return (
    <ScrollView>
      <View>
        {typesData.map(type => (
          <VehicleTypeRow type={type} key={type.id} />
        ))}
        <Pressable
          onPress={confirm}
          style={{
            backgroundColor: 'black',
            padding: 10,
            margin: 10,
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm Ride</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default VehicleTypes;
