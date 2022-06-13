import actions from './actions';
// import produce from 'immer';

const initState = {
  status: {
    name: '',
    isFetching: false,
    isSuccess: false,
    error: '',
  },
};

export default function statusReducer(state = initState, action) {
  switch (action.type) {
    case actions.START_REQUEST:
      return {
        ...state,
        status: {
          ...initState.status,
          name: action.payload,
          isFetching: true,
        },
      };
    case actions.FINISH_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          name: action.payload.action,
          isFetching: false,
          error: action.payload.error,
          isSuccess: action.payload.error ? false : true,
        },
      };
    case actions.CLEAN_STATUS:
      return {
        ...state,
        status: { ...initState.status },
      };
    default:
      break;
  }
  return state;
}
