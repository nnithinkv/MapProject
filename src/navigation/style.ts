import {StyleSheet} from 'react-native';
import AppColors from '../res/colors';

export const Styles = StyleSheet.create({
  tabBarIcon: {
    with: 25,
    height: 25,
    resizeMode: 'center',
    tintColor: AppColors.extras.black,
  },
  tabBarIconDark: {
    with: 25,
    height: 25,
    resizeMode: 'center',
    tintColor: AppColors.extras.white,
  },
  tabBarIconLarge: {
    with: 40,
    height: 40,
    resizeMode: 'center',
    tintColor: 'white',
  },
  tabBarIconLargeView: {
    position: 'absolute',
    bottom: 0,
    height: 55,
    width: 55,
    backgroundColor: 'red',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Styles;
