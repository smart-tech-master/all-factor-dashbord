const debug = (message, context = 'DEBUG') => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[${context}]`, message);
  }
};

export default debug;
