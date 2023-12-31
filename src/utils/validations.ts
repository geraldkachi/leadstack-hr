// eslint-disable-next-line no-useless-escape
export const passwordCondition = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.*)");


export const containsLowerCase = (str: string) => {
    return str?.toUpperCase() !== str;
}

export const containsUpperCase = (str: string) => {
    return str?.toLowerCase() !== str;
}

export const containsNumber = (myString: string) => {
    return /\d/.test(myString);
}
export const containsSpecialChars = (str: string) => {
    // eslint-disable-next-line no-useless-escape
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}
const truncateString = (str: string, num: number) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  
  export default truncateString;
