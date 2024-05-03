// // set token
// export const setToken = (tokenKey, tokenValue) => {
//   // window.sessionStorage.setItem(tokenKey, tokenValue);
//   // localStorage.setItem(tokenKey,tokenValue)

//   return true;
// };

// export const getToken = (tokenKey) =>
//   // window.sessionStorage.getItem(tokenKey);
//   localStorage.getItem(tokenKey)

// export const removeToken = (tokenKey) =>
//   // window.sessionStorage.removeItem(tokenKey);
//   localStorage.removeItem(tokenKey)


// set user type

export const setUserType = (userType, userTypeValue) => {
    window.sessionStorage.setItem(userType, userTypeValue);
    return true;
  };
  
  export const getUserType = (userType) =>
    window.sessionStorage.getItem(userType);
  
  export const removeUserType = (userType) =>
    window.sessionStorage.removeItem(userType);
  
  
  //cookie
  
  
  export const setToken = (c_name, value, exdays) => {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value =
      escape(value) +
      (exdays == null ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value + "; path=/";
  }
  
  
  
  export const getToken = (c_name) => {
    var i,
      x,
      y,
      ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
      x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
      y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
      x = x.replace(/^\s+|\s+$/g, "");
      if (x == c_name) {
        return unescape(y);
      }
    }
  }
  
  export const removeToken = (c_name, value, exdays) => {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() - exdays);
    var c_value =
      escape(value) +
      (exdays == null ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value + "; path=/";
  }
  
  //set localstorage
  
  export const setLocalStorage = (value) => {
    localStorage.setItem('currentIp',value)
  }