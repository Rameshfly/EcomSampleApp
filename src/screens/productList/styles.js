import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../constants/colors';
import {scale, verticalScale} from 'react-native-size-matters';

export default styles = StyleSheet.create({
  productListContainer: {
    flex: 1,
    // width: "100%",
    backgroundColor: colors.black,
    // paddingLeft: scale(10),
    // paddingRight: scale(10),
    paddingVertical: verticalScale(10),
    // paddingHorizontal: scale(10)
  },
  card: {
    height: verticalScale(220),
    backgroundColor: colors.light,
    borderRadius: 10,
    padding: scale(12),
  },
  favoriteIcon: {
    width: scale(30),
    height: scale(30),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: scale(14),
    marginTop: verticalScale(12),
  },
  priceCounterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(3),
  },
  price: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  plusIconContainer: {
    height: scale(30),
    width: scale(30),
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    fontSize: scale(20),
    color: colors.white,
    fontWeight: 'bold',
  },
});
