import { instance, next } from "..";
// @ts-ignore
type Customer = any
export const custmerLogin = async (value: Partial<Customer>) => {
    const { data } = await instance(false)
      .post(`user/v1/customer/signin`, value)
      .catch((e) => next(e));
  
    //   success(data);
    return data?.data
  };