// eslint-disable-next-line no-useless-escape
export const VALIDATE_EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const VALIDATE_URL_REGEX = new RegExp(
  // eslint-disable-next-line no-useless-escape
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
  'gm',
);

export const VALIDATE_SHORTLINK_REGEX = /r'^[-a-zA-Z0-9_]+\Z'/;

export const TOOLTIP_DATA_LIMIT = 5;
