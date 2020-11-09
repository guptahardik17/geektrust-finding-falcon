export const customError = new Error('Something Went Wrong');

export const validateResponse = response => {
  if (response != null && response.data != null) {
    return true;
  } else {
    throw customError;
  }
};
