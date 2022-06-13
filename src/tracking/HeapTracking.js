import BaseTracking from './BaseTracking';

export default class HeapTracking extends BaseTracking {
  trackUser(userId) {
    if (window.heap) {
      window.heap.identify(userId);
    }
  }

  trackEvent(eventName, eventProperties) {
    if (window.heap) {
      window.heap.track(eventName, eventProperties);
    }
  }
}
