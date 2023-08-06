import isFalsy from './isFalsy';

const isTruthy = (value) => {
  return !isFalsy(value);
};

export default isTruthy;
