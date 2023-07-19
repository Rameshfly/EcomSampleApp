import React from 'react';
import {View, SafeAreaView, Text, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../constants/colors';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Icons} from '../../constants/icons';
import {scale, verticalScale} from 'react-native-size-matters';

const ProductDetail = ({navigation, route}) => {
  const plant = route.params;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={Icons.ArrowLeft} size={scale(20)} />
        </TouchableOpacity>
        <FontAwesomeIcon icon={Icons.ShoppingCart} size={scale(20)} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={plant.img} style={{resizeMode: 'contain', flex: 1}} />
      </View>
      <View style={styles.detailsContainer}>
        <View
          style={{
            marginLeft: scale(18),
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={styles.line} />
          <Text style={{fontSize: scale(16), fontWeight: 'bold'}}>
            Best choice
          </Text>
        </View>
        <View
          style={{
            marginLeft: scale(18),
            marginTop: verticalScale(16),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: scale(18), fontWeight: 'bold'}}>
            {plant.name}
          </Text>
          <View style={styles.priceTag}>
            <Text
              style={{
                marginLeft: scale(15),
                color: colors.white,
                fontWeight: 'bold',
                fontSize: scale(13),
              }}>
              ${plant.price}
            </Text>
          </View>
        </View>
        <View
          style={{paddingHorizontal: scale(18), marginTop: verticalScale(8)}}>
          <Text style={{fontSize: scale(17), fontWeight: 'bold'}}>About</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: scale(14),
              lineHeight: 22,
              marginTop: verticalScale(7),
            }}>
            {plant.about}
          </Text>
          <View
            style={{
              marginTop: verticalScale(18),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.borderBtn}>
                <Text style={styles.borderBtnText}>-</Text>
              </View>
              <Text
                style={{
                  fontSize: scale(18),
                  marginHorizontal: scale(10),
                  fontWeight: 'bold',
                }}>
                1
              </Text>
              <View style={styles.borderBtn}>
                <Text style={styles.borderBtnText}>+</Text>
              </View>
            </View>

            <View style={styles.buyBtn}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: scale(16),
                  fontWeight: 'bold',
                }}>
                Buy
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
