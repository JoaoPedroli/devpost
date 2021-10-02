import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { backgrounds, primary } from '../global/theme.json';
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

// contexts
import { AuthContext } from '../contexts/auth';

export const Routes = () => {
  const { signed, loading } =  useContext(AuthContext);

  return loading
  ? <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      background: backgrounds[0],
    }}>
      <ActivityIndicator size={50} color={primary}/>
    </View>

  : signed ? <AppRoutes/> : <AuthRoutes/>
}
