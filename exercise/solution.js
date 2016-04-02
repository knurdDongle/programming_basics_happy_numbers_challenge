const happyNumber = function(number)
{
// BEGIN
  const sum = function(num)
  {
    let arr = String(num).split('');
    let sum = 0;
    arr.forEach(
      function(elm)
      {
        sum = sum + elm * elm;
      });
    return sum;
  };

  let arr = [];
  let res = number;
  for (let i = 0; true; i++) {
    res = sum(res);
    if (res == 1)
    {
      return true;
    }
    if (arr.indexOf(res) > -1)
    {
      return false;
    }
    arr.push(res);
  }
// END
};

export default happyNumber;
