import { TEST_ACTION } from '../constant/index';

export const testReducer = (state = null, action) => {
  switch (action.type) {
    case TEST_ACTION:
      console.log('from action', action);
      return state;
    default:
      return state;
  }
};
