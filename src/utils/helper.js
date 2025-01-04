const shortenProductId = (id) => {
  const array = id.split("-");
  //we want to return a phrase in form "1c58****5k9x"
  //   console.log(array)
  return array[0].slice(0, 4).concat("****", array[array.length - 1].slice(-4));
};

export { shortenProductId };
