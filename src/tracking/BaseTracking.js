import debug from '../utils/debug';

export default class Tracking {
  TRACKING_DEBUG_CONTEXT = 'Tracking';

  trackUser(userId) {
    debug({ method: 'trackUser', userId }, this.TRACKING_DEBUG_CONTEXT);
  }

  trackEvent(eventName, eventProperties = {}) {
    debug(
      { method: 'trackingEvent', eventName, eventProperties },
      this.TRACKING_DEBUG_CONTEXT,
    );
  }
}
