export const getErrorMessage = (error) => {
  const msg =
    (error.response && error.response.data && error.response.data.messsage) ||
    error.message ||
    error.toString();
  return msg;
};
