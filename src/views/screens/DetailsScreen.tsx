import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigationTypes';
import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, View, Text, ImageSourcePropType } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import style from '../../styles/Details';

import COLORS from '../../consts/colors';

interface DetailsScreenProps {
    navigation: StackNavigationProp<RootStackParamList, 'DetailsScreen'>;
    route: RouteProp<RootStackParamList, 'DetailsScreen'>;
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({ navigation, route }) => {
  const place = route.params;  

  if (!place) {
    return <Text>No place found</Text>; 
  }  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{ flex: 0.7 }}
        source={
      place['image']
      ? place['image']
      : require('../../assets/onboardImage.jpg')
      }
        >
        <View style={style.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={navigation.goBack}
          />
          <Icon name="more-vert" size={28} color={COLORS.white} />
        </View>
        <View style={style.imageDetails}>
          <Text
            style={{
              width: '70%',
              fontSize: 30,
              fontWeight: 'bold',
              color: COLORS.white,
              marginBottom: 20,
            }}>
            {place['name'] }
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={30} color={COLORS.orange} />
            <Text
              style={{color: COLORS.white, fontWeight: 'bold', fontSize: 20}}>
              5.0
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={style.detailsContainer}>
        <View style={style.iconContainer}>
          <Icon name="favorite" color={COLORS.red} size={30} />
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Icon name="place" size={28} color={COLORS.primary} />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.primary,
            }}>
            {place['location'] }
          </Text>
        </View>
        <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 20}}>
          About the trip
        </Text>
        <Text style={{marginTop: 20, lineHeight: 22}}>{place['details'] }</Text>
      </View>
      <View style={style.footer}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: COLORS.white,
            }}>
            $100
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: COLORS.grey,
              marginLeft: 2,
            }}>
            /PER DAY
          </Text>
        </View>
        <View style={style.bookNowBtn}>
          <Text
            style={{color: COLORS.primary, fontSize: 16, fontWeight: 'bold'}}>
            Book Now
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default DetailsScreen;

