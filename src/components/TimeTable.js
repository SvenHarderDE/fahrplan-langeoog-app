import React from 'react';
import { View, Text, FlatList } from 'react-native';

import ListItem from './common/ListItem';

const TimeTable = ({ day, location }) => (
  <View>
    <Text>
      Timetable {location} {day}
    </Text>
    <FlatList
      data={[
        { key: '1', time: '9:00', company: 'SL' },
        { key: '2', time: '11:00', company: 'DW' }
      ]}
      renderItem={({ item }) => <ListItem item={item} />}
    />
  </View>
);

export default TimeTable;
