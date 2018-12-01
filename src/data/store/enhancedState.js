import state from './state';
import { pipe, partial, updateProperty } from '../utils/helpers';
import { serverDateService } from '../../services/services';
const { navbar: { title, tagline } } = require('../../../config/variables');

export default () => {
  const date = serverDateService();

  return pipe(
    partial(updateProperty, [ 'app', 'title' ], title),
    partial(updateProperty, [ 'app', 'tagline' ], tagline),
    updateProperty([ 'app', 'date' ], date, state),
  );
};