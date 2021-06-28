import { Api } from './api';

export class DataApi {
  fetchCities() {
    return Api.get('/cities');
  }
  fetchDistricts(cityId) {
    return Api.get('/districts', {
      city: cityId,
    });
  }
}
