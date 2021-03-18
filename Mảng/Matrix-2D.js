function sumEven(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] % 2 == 0) {
          sum += array[i][j];
        }
      }
    }
    return sum;
  }

  function sumMainLine(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i][i];
    }
    return sum;
  }

  function sumLine(array) {
    let sum = 0;
    let number = array.length - 1;
    for (let i = 0; i < array.length; i++) {
      sum += array[i][number];
      number--;
    }
    return sum;
  }
  //   0: (5) [4, 5, 4, 1, 4]
  //   1: (5) [2, 5, 5, 3, 3]
  //   2: (5) [2, 1, 5, 4, 2]
  //   3: (5) [1, 5, 3, 2, 3]
  //   4: (5) [3, 1, 2, 5, 5]
  // lặp array -1
  //  n =4;

  function sumNgang1(array) {
    let sum = 0;
    let n = array.length - 1;
    for (let i = 0; i < array.length ; i++) {
      let m = 0;
      sum += array[m][n - (array.length - 1)];
      n++;
    }
    return sum - array[0][0];
  }

  function sumNgang2(array) {
    let sum = 0;
    let n = array.length - 1;
    for (let i = 0; i < array.length; i++) {
      let m = array.length - 1;

      sum += array[m][n - (array.length - 1)];
      n++;
    }
    return sum - array[array.length - 1][0];
  }

  function sumDoc2(array) {
    let sum = 0;
    let n = array.length - 1;
    for (let i = 0; i < array.length; i++) {
      let m = 0;
      sum += array[n - (array.length - 1)][m];
      n++;
    }
    return sum;
  }

  function sumDoc1(array) {
    let sum = 0,
      n = 0;
    for (let i = 0; i < array.length; i++) {
      let m = array.length - 1;
      sum += array[n][m];
      n++;
    }
    return (
      sum -
      array[0][array.length - 1] -
      array[array.length - 1][array.length - 1]
    );
  }