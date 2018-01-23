import React from 'react';
import { View } from 'react-native';
import { AdMobBanner } from 'react-native-admob';

import DatePicker from '../components/DatePicker';

const DatePickerTabScreen = ({ location, navigator }) => (
  <View>
    <View style={{ alignItems: 'center', paddingTop: 6 }}>
      <AdMobBanner
        adSize="banner"
        adUnitID="ca-app-pub-3940256099942544/6300978111"
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={error => console.error(error)}
      />
    </View>
    <DatePicker location={location} navigator={navigator} />
  </View>
);

export default DatePickerTabScreen;
