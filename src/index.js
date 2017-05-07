import warningMessages from './defaultWarningMessages';

const warningMessage = (defaultWarningMessages = warningMessages) => {
  const date = (message) => (
    message ||
    defaultWarningMessages.date
  );

  const datetime = (message) => (
    message ||
    defaultWarningMessages.datetime
  );

  const email = (message) => (
    message ||
    defaultWarningMessages.email
  );

  const exactly = (target, message) => {
    let exactlyWarningMessage = defaultWarningMessages.exactly;

    if (message !== undefined) {
      return message(target);
    }

    exactlyWarningMessage = exactlyWarningMessage.replace(RegExp('__VAR1__'), target);

    return exactlyWarningMessage;
  };

  const float = (message) => (
    message ||
    defaultWarningMessages.float
  );

  const integer = (message) => (
    message ||
    defaultWarningMessages.integer
  );

  const maxChar = (max, message) => {
    let maxCharWarningMessage = defaultWarningMessages.maxChar;

    if (message !== undefined) {
      return message(max);
    }

    maxCharWarningMessage = maxCharWarningMessage.replace(RegExp('__VAR1__'), max);

    return maxCharWarningMessage;
  };

  const minChar = (min, message) => {
    let minCharWarningMessage = defaultWarningMessages.minChar;

    if (message !== undefined) {
      return message(min);
    }

    minCharWarningMessage = minCharWarningMessage.replace(RegExp('__VAR1__'), min);

    return minCharWarningMessage;
  };

  const minMaxChar = (min, max, message) => {
    let minMaxCharWarningMessage = defaultWarningMessages.minMaxChar;

    if (message !== undefined) {
      return message(min, max);
    }

    minMaxCharWarningMessage = minMaxCharWarningMessage.replace(RegExp('__VAR1__'), min);
    minMaxCharWarningMessage = minMaxCharWarningMessage.replace(RegExp('__VAR2__'), max);

    return minMaxCharWarningMessage;
  };

  const not = (value, message) => {
    let notWarningMessage = defaultWarningMessages.not;

    if (message !== undefined) {
      return message(value);
    }

    notWarningMessage = notWarningMessage.replace(RegExp('__VAR1__'), value);

    return notWarningMessage;
  };

  const number = (message) => (
    message ||
    defaultWarningMessages.number
  );

  const phonenumber = (message) => (
    message ||
    defaultWarningMessages.phonenumber
  );

  const requiredField = (message) => (
    message ||
    defaultWarningMessages.requiredField
  );

  const time = (message) => (
    message ||
    defaultWarningMessages.time
  );

  const url = (message) => (
    message ||
    defaultWarningMessages.url
  );

  const validation = (message) => (
    message ||
    defaultWarningMessages.validation
  );

  return {
    date,
    datetime,
    email,
    exactly,
    float,
    integer,
    maxChar,
    minChar,
    minMaxChar,
    not,
    number,
    phonenumber,
    requiredField,
    time,
    url,
    validation,
  };
};

export default warningMessage;
