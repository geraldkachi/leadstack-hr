// eslint-disable-next-line no-useless-escape
export const passwordCondition = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.*)");


export const containsLowerCase = (str) => {
    return str?.toUpperCase() !== str;
}

export const containsUpperCase = (str) => {
    return str?.toLowerCase() !== str;
}

export const containsNumber = (myString) => {
    return /\d/.test(myString);
}
export const containsSpecialChars = (str) => {
    // eslint-disable-next-line no-useless-escape
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}
const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  
  export default truncateString;