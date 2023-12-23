import React from 'react';
import { ActivityIndicator } from 'react-native';

export function Load() {

  return (
    <ActivityIndicator
      color= 'blue'
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    />
  );
}