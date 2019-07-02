var printConnect4 = function(input) {
  //base case:
  if (!input) return null;

  let count = 1; // assume number 0-9
  let level = '';
  let box = '';

  const isLetter = /^[a-z]/;
  const isNumber = /^[0-9]/;

  for (var i = 0; i < input.length; i++) {
    if (input[i].match(isNumber)) {
      // case: num
      count = parseInt(input[i]);
      continue;
    } else if (input[i].match(isLetter)) {
      // case: letter
      box = input[i];
    } else {
      // case: invalid char
      box = '_';
    }

    // print
    while (count >= 1) {
      level = level + '|' + box;
      if (level.length === 14) {
        level += '|';
        console.log(level);
        level = '';
      }
      count--;
    }
    count = 1; // resetting count
  }
};

var test1 = '9_r4_brbrbr_3b2rb_b2r2br_r2b3rb';
printConnect4(test1);
