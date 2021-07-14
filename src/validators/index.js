module.exports = {
  asyncFirstNameValidator: async (value) => {
    return new Promise((resolve) => {
      console.error('asyncFirstNameValidator', value);
      setTimeout(() => {
        resolve({ isValid: false, error: 'firstName.duplicated' });
      }, 500);
    });
  },
};
