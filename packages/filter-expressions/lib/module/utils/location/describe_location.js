
import i18next from 'i18next';
import defaultTo from 'lodash/defaultTo';
import { describeUserAttribute } from '../user_attribute/describe_user_attribute';
import { getDistanceUnitLabels } from './get_distance_unit_labels';
const describeLat = lat => {
  const t = i18next.t.bind(i18next);
  const latAbs = Math.abs(lat).toFixed(1);
  const textNorth = t('lat degrees north', {
    ns: 'describe_location',
    lat: latAbs
  });
  const textSouth = t('lat degrees south', {
    ns: 'describe_location',
    lat: latAbs
  });
  return lat > 0 ? textNorth : textSouth;
};
const describeLon = lon => {
  const t = i18next.t.bind(i18next);
  const lonAbs = Math.abs(lon).toFixed(1);
  const textEast = t('lon degrees east', {
    ns: 'describe_location',
    lon: lonAbs
  });
  const textWest = t('lon degrees west', {
    ns: 'describe_location',
    lon: lonAbs
  });
  return lon > 0 ? textEast : textWest;
};
const box = ({
  lon,
  lat,
  lon1,
  lat1
}) => {
  const t = i18next.t.bind(i18next);
  return lon && lat && lon1 && lat1 ? t('coords1 to coords2', {
    coords1: `${describeLat(lat)}, ${describeLon(lon)}`,
    coords2: `${describeLat(lat1)}, ${describeLon(lon1)}`,
    ns: 'describe_location'
  }) : '';
};
const circle = ({
  distance,
  unit,
  lat,
  lon
}) => {
  const t = i18next.t.bind(i18next);
  return distance && unit && lat && lon ? t('distance unit from lat, lon', {
    ns: 'describe_location',
    distance,
    unit: getDistanceUnitLabels(unit),
    lat,
    lon
  }) : '';
};
const location = ({
  lat,
  lon
}) => lat && lon ? `${lat}, ${lon}` : '';
const anyvalue = () => {
  const t = i18next.t.bind(i18next);
  return t('is anywhere', {
    ns: 'describe_location'
  });
};
const describeNull = () => {
  const t = i18next.t.bind(i18next);
  return t('is null', {
    ns: 'describe_location'
  });
};
const describeNotNull = () => {
  const t = i18next.t.bind(i18next);
  return t('is not null', {
    ns: 'describe_location'
  });
};
const filterToStringMap = {
  box,
  circle,
  location,
  anyvalue,
  null: describeNull,
  notnull: describeNotNull,
  user_attribute: describeUserAttribute
};

export const describeLocation = item => defaultTo(filterToStringMap[item.type], () => '')(item);
//# sourceMappingURL=describe_location.js.map