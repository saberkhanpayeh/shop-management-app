function setCookie(name, value) {
  const maxAge = 30 * 24 * 60 * 60; //max age of a cookie to expire is 1 month(30 day *24 hour *60 minute *60 second)
  document.cookie = `${name}=${value}; max-age=${maxAge}; path=/`;
}
function getCookie(name) {
  const value = `; ${document?.cookie}`;
  const parts = value?.split(`; ${name}=`);
  if (parts?.length === 2) return parts?.pop()?.split(";")?.shift();
}

export{setCookie,getCookie}
