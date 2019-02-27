import { TEST_ACTION } from '../constant/index';

export const testAction = test => {
  console.log('from action', test);
  return {
    type: TEST_ACTION,
    payload: test,
  };
};
