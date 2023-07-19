import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../constants/colors';
import plantsData from '../../constants/productsData';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Icons} from '../../constants/icons';

const ProductList = ({navigation}) => {
  const ProductCard = ({plants}) => {
    return (
      <TouchableOpacity
        style={{flex: 0.6, padding: scale(4)}}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('ProductDetail', plants)}>
        <View style={styles.card}>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={[
                styles.favoriteIcon,
                {
                  backgroundColor: plants.like
                    ? 'rgba(245, 42, 42,0.2)'
                    : 'rgba(0,0,0,0.2) ',
                },
              ]}>
              <FontAwesomeIcon
                icon={Icons.Heart}
                // size={scale(18)}
                color={plants.like ? 'red' : colors.black}
              />
              {/* <Icon
                name="favorite"
                size={scale(18)}
                color={plants.like ? 'red' : colors.black}
              /> */}
            </View>
          </View>

          <View
            style={{
              height: verticalScale(100),
              alignItems: 'center',
            }}>
            <Image
              source={plants.img}
              style={{
                flex: 1,
                resizeMode: 'contain',
              }}
            />
          </View>

          <Text style={styles.title}>{plants.name}</Text>

          <View style={styles.priceCounterContainer}>
            <Text style={styles.price}>${plants.price}</Text>

            <View style={styles.plusIconContainer}>
              <Text style={styles.plusText}>+</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      contentContainerStyle={{
        backgroundColor: colors.white,
        padding: scale(10),
      }}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      data={plantsData}
      renderItem={({item}) => {
        return <ProductCard key={item.id} plants={item} />;
      }}
    />
  );
};

export default ProductList;
