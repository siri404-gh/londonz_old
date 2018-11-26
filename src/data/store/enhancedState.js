import state from './state';
import { pipe, updateProperty } from '../utils/helpers';
import { getServerDate } from '../../services/services';

export default () => {
  const date = getServerDate();

  return pipe(
    updateProperty([ 'app', 'date' ], date, state),
  );
};