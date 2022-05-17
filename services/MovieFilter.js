import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoder';

export const getGeoLocation = async () => {
  return new Promise((resolve, reject) => {
    const onReceiveLocation = geolocation => {
      resolve(geolocation);
    };
    const onError = error => {
      reject(error);
    };
    Geolocation.getCurrentPosition(onReceiveLocation, onError, {
      enableHighAccuracy: false,
      timeout: 20000,
    });
  });
};

export const filterByCountry = async (movies, geoPosition) => {
  const location = await Geocoder.geocodePosition({
    lat: geoPosition.coords.latitude,
    lng: geoPosition.coords.longitude,
  });

  const nationalMovies = movies.filter((item, index) => {
    return (
      item.Country.indexOf(location[0].country) !== -1 ||
      item.Country.indexOf(location[0].countryCode) !== -1
    );
  });
  return nationalMovies;
};
