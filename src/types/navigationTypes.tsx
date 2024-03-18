// navigationTypes.ts

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';

// Define the parameters (routes) available in your stack navigator
export type RootStackParamList = {
  OnBoardScreen: undefined;
  HomeScreen: undefined;
  DetailsScreen: undefined; // Define the parameters expected by DetailsScreen
};

// Define the type for the navigation prop in your components
export type OnBoardScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'OnBoardScreen'
>;
export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;
export type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'DetailsScreen'
>;

// Define the type for the route prop in your components
export type OnBoardScreenRouteProp = RouteProp<
  RootStackParamList,
  'OnBoardScreen'
>;
export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'HomeScreen'>;
export type DetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'DetailsScreen'
>;
