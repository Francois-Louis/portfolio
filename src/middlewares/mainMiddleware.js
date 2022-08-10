const mainMiddleware = (store) => (next) => (action) => {
  next(action);
  };

export default mainMiddleware;
