import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../constants/colors';
import {scale, verticalScale} from 'react-native-size-matters';

export default styles = StyleSheet.create({
  header: {
    paddingHorizontal: scale(20),
    marginTop: verticalScale(18),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: verticalScale(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: colors.light,
    borderRadius: 20,
    marginTop: verticalScale(28),
    paddingTop: verticalScale(26)
  },
  line: {
    width: scale(23),
    height: verticalScale(2),
    backgroundColor: colors.black,
    marginBottom: verticalScale(5),
    marginRight: scale(3),
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(45),
    height: verticalScale(40),
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: scale(120),
    height: verticalScale(44),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: colors.primary,
    width: scale(76),
    height: verticalScale(36),
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});
