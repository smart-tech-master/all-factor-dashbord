const actions = {
  START_REQUEST: 'START_REQUEST',
  FINISH_REQUEST: 'FINISH_REQUEST',
  CLEAN_STATUS: 'CLEAN_STATUS',
  startRequest: (action) => ({
    type: actions.START_REQUEST,
    payload: action,
  }),
  finishRequest: (action, error) => ({
    type: actions.FINISH_REQUEST,
    payload: { action, error },
  }),
  cleanStatus: () => ({
    type: actions.CLEAN_STATUS,
  }),
};

export default actions;
