import { all } from 'redux-saga/effects';
import featureSagas from './feature/saga';

export default function* rootSaga() {
  yield all([featureSagas()]);
}
