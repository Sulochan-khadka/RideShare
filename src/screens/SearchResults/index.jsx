import React from 'react';
import {View, Dimensions} from 'react-native';
import RouteMap from '../../components/RouteMap';
import VehicleTypes from '../../components/VehicleTypes';

const SearchResults = props => {
  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap />
      </View>

      <View style={{height: 400}}>
        <VehicleTypes />
      </View>
    </View>
  );
};

export default SearchResults;
