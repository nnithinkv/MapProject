import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Styles from './style';
import Images from '../../res/images';
import {useDispatch, useSelector} from 'react-redux';
import {switchMode} from '../../redux-store/actions';
import {darkModeMapTheme} from '../../redux-store/darkModeMapTheme';
import AppColors from '../../res/colors';
export const MapComponent = () => {
  const [markers, setMarkers] = useState([
    {
      title: 'Local Hamburger',
      description: '3rd Street',
      latlng: {latitude: 37.79125, longitude: -122.4324},
      icon: Images.hamburger,
      isSelected: true,
    },
    {
      title: 'Wine shop',
      description: 'Baker street',
      latlng: {latitude: 37.78925, longitude: -122.4354},
      icon: Images.wine_glass,
      isSelected: false,
    },
    {
      title: 'Cafe Coffee Day',
      description: 'CCD Junction',
      latlng: {latitude: 37.78715, longitude: -122.4354},
      icon: Images.coffee,
      isSelected: false,
    },
    {
      title: 'Beer Parlour',
      description: 'Gotham city',
      latlng: {latitude: 37.78715, longitude: -122.4324},
      icon: Images.beer,
      isSelected: false,
    },
  ]);
  const [searchText, setSearchText] = useState('');
  const [barName, setBarName] = useState('Local Hamburger');
  const [locationName, setLocationName] = useState('3rd Street');
  const searchTextRef = useRef(null);
  // get the current theme
  const theme = useSelector(state => state.theme);
  // initialize action dispatcher
  const dispatch = useDispatch();
  // define a component mode state
  const [mode, setMode] = useState(theme.mode);
  // Handle changing the theme mode
  const handleThemeChange = () => {
    dispatch(switchMode(theme.mode === 'light' ? 'dark' : 'light'));
  };

  // Update the app Incase the theme mode changes
  useEffect(() => {
    setMode(theme.mode);
    console.log(theme.mode, 'theme.mode');
  }, [theme]);

  const ThemeChangeButton = () => {
    return (
      <TouchableOpacity
        style={
          mode === 'dark'
            ? Styles.themeChangeContainerDark
            : Styles.themeChangeContainer
        }
        activeOpacity={1}
        onPress={handleThemeChange}>
        <Image
          source={Images.toggle_icon}
          style={mode === 'dark' ? Styles.mapIconDark : Styles.mapIcon}
          resizeMode={'cover'}
        />
      </TouchableOpacity>
    );
  };

  const SearchView = () => {
    return (
      <View
        style={
          mode === 'dark'
            ? Styles.searchBarContainerDark
            : Styles.searchBarContainer
        }>
        <View style={Styles.searchBar}>
          <View style={Styles.searchIconView}>
            <Image
              source={Images.search_icon}
              style={
                mode === 'dark' ? Styles.searchIconDark : Styles.searchIcon
              }
              resizeMode={'cover'}
            />
          </View>
          <View style={Styles.searchTextContainer}>
            <TextInput
              blurOnSubmit={false}
              ref={searchTextRef}
              placeholder={'Search here'}
              placeholderTextColor={
                mode === 'dark'
                  ? AppColors.extras.textSearch
                  : AppColors.extras.textGray
              }
              onChangeText={setSearchText}
              value={searchText}
              style={
                mode === 'dark' ? Styles.searchTextDark : Styles.searchText
              }
            />
          </View>
        </View>
        {searchText.length > 0 && (
          <View style={{height: 150}}>
            <FlatList
              data={[{key: 'Bar'}, {key: 'Restaurant'}, {key: 'Club'}]}
              renderItem={({item}) => (
                <Text style={mode === 'dark' ? Styles.itemDark : Styles.item}>
                  {item.key}
                </Text>
              )}
            />
          </View>
        )}
      </View>
    );
  };
  const PopupView = () => {
    return (
      <View
        style={
          mode === 'dark' ? Styles.popupContainerDark : Styles.popupContainer
        }>
        <View style={Styles.popupImage}>
          <Image
            source={Images.bar_image}
            style={Styles.popupIcon}
            resizeMode={'cover'}
          />
        </View>
        <View style={Styles.popupTextContainer}>
          <Text
            style={
              mode === 'dark'
                ? Styles.popupHeaderTextDark
                : Styles.popupHeaderText
            }>
            {barName}
          </Text>
          <Text
            style={
              mode === 'dark'
                ? Styles.popupSubHeaderTextDark
                : Styles.popupSubHeaderText
            }>
            {locationName}
          </Text>
        </View>
      </View>
    );
  };
  const NavigationButton = () => {
    return (
      <TouchableOpacity
        style={
          mode === 'dark'
            ? Styles.navigationIconContainerDark
            : Styles.navigationIconContainer
        }
        activeOpacity={1}>
        <Image
          source={Images.compass_icon}
          style={mode === 'dark' ? Styles.mapIconDark : Styles.mapIcon}
          resizeMode={'cover'}
        />
      </TouchableOpacity>
    );
  };
  return (
    // <KeyboardAwareView style={Styles.map}>
    <View style={Styles.map}>
      <MapView
        customMapStyle={mode === 'dark' ? darkModeMapTheme : []}
        provider={PROVIDER_GOOGLE}
        style={Styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            tracksViewChanges
            coordinate={marker.latlng}
            onPress={() => {
              if (!marker.isSelected) {
                setMarkers(
                  markers.map(data =>
                    data === marker
                      ? {...data, isSelected: true}
                      : {...data, isSelected: false},
                  ),
                );
                setBarName(marker.title);
                setLocationName(marker.description);
              }
            }}>
            {marker.isSelected ? (
              <View
                style={
                  mode === 'dark'
                    ? Styles.mapMarkerSelectedDark
                    : Styles.mapMarkerSelected
                }>
                <Image
                  source={marker.icon}
                  style={Styles.mapMarkerIconSelected}
                  resizeMode={'cover'}
                />
              </View>
            ) : (
              <View style={Styles.markerContainer}>
                <View
                  style={
                    mode === 'dark' ? Styles.mapMarkerDark : Styles.mapMarker
                  }>
                  <Image
                    source={marker.icon}
                    style={Styles.mapMarkerIcon}
                    resizeMode={'cover'}
                  />
                </View>
              </View>
            )}
          </Marker>
        ))}
      </MapView>
      <ThemeChangeButton />
      <NavigationButton />
      <SearchView />
      <PopupView />
    </View>
    // </KeyboardAwareView>
  );
};

MapComponent.propTypes = {};

MapComponent.defaultProps = {};
