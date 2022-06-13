import React, { createContext } from 'react';
import tracking from '../tracking';

export const TrackingContext = createContext();

export const EVENT_ANALYTICS_DATE_CHANGE = 'analytics general date change';
export const EVENT_ANALYTICS_TABS_CHANGE = 'analytics general tabs change';
export const EVENT_ANALYTICS_NARRATION_DETAIL =
  'analytics general narration detail';
export const EVENT_NARRATION_SEARCH = 'narration search';
export const EVENT_NARRATION_CLICK = 'narration click';
export const EVENT_NARRATION_DETAIL = 'narration detail';
export const EVENT_NARRATION_DETAIL_EDIT = 'narration detail edit';
export const EVENT_NARRATION_COPY_EMBED_CODE = 'narration copy embed code';
export const EVENT_USER_LOGIN_ERROR = 'user login error';
export const EVENT_USER_LOGIN_SUCCESS = 'user login success';

const TrackingProvider = ({ children }) => {
  const value = {
    ...tracking,

    trackAnalyticsDateChange: (payload) =>
      tracking.trackEvent(EVENT_ANALYTICS_DATE_CHANGE, payload),

    trackAnalyticsTabsChange: (payload) =>
      tracking.trackEvent(EVENT_ANALYTICS_TABS_CHANGE, payload),

    trackAnalyticsNarrationDetail: (payload) =>
      tracking.trackEvent(EVENT_ANALYTICS_NARRATION_DETAIL, payload),

    trackNarrationSearch: (payload) =>
      tracking.trackEvent(EVENT_NARRATION_SEARCH, payload),

    trackNarrationClick: (payload) =>
      tracking.trackEvent(EVENT_NARRATION_CLICK, payload),

    trackNarrationDetail: (payload) =>
      tracking.trackEvent(EVENT_NARRATION_DETAIL, payload),

    trackNarrationDetailEdit: (payload) =>
      tracking.trackEvent(EVENT_NARRATION_DETAIL_EDIT, payload),

    trackNarrationCopyEmbedCode: () =>
      tracking.trackEvent(EVENT_NARRATION_COPY_EMBED_CODE),

    trackUserLoginError: () => tracking.trackEvent(EVENT_USER_LOGIN_ERROR),

    trackUserLoginSuccess: ({ email }) => {
      tracking.trackUser(email);
      tracking.trackEvent(EVENT_USER_LOGIN_SUCCESS, { email });
    },
  };

  return (
    <TrackingContext.Provider value={value}>
      {children}
    </TrackingContext.Provider>
  );
};

export default TrackingProvider;
