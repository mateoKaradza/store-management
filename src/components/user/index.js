import requireAuth from '../utils/requireAuth';
import wrapper from '../utils/wrapper';
import Test from './test';

export default {
  path: 'users',
  component: requireAuth(wrapper),
  indexRoute: Test,
};
