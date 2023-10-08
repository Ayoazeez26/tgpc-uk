// import { AxiosError } from "axios";

export const getErrorMessage = (err) => {
  const { response } = err;
  // console.log({ response });
  let errorText = "Something went wrong, please try again";
  if (response) {
    // const { data: { error }, } = response;
    if (response.data.error) {
      errorText = response.data.message;
    }
  }
  return errorText;
};
