
export function UserCreator() {
  const obj = Object.create(wxUser)
  return obj
}

const wxUser = {
  address: null,
  city: null,

  coo: null,
  coordinate: null,
  coordinates: null,
  lat: null,
  lon: null,

  country: null,
  county: null,
  name: null,
  region: null,
  state: null,
  state_long: null,
  tz: null,
  zip: null,
  zip_code: null,

  temp_unit: null,

}
