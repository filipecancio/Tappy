/*Retorna um array com propriedades de ij de uma tabela
 * @param {Array} tabela
 * @return {Array} propriedades ij */
const getMatrixIndex = array => {
  let response: Array<any>;
  if (isObject(array)) {
    response = [array.length, 1];
    array.map(i => {
      if (i !== null) {
        if (isObject(i) && i.length > response[1]) response[1] = i.length;
      }
    });
  } else {
    response = [0, 0];
  }
  return response;
};

/*Converte o array em matriz
 * @param {Array}
 * @return {Array} em matriz.*/
const toMatrix = array => {
  let prop = getMatrixIndex(array);
  return array.map(i => {
    i = isObject(i) ? i : [i];
    while (i.length < prop[1]) {
      i.push('');
    }
    return i;
  });
};

/*Retorna a matriz transposta
 * @param {Array}
 * @return {Array} transposto*/
const transpose = array => {
  array = toMatrix(array);
  return array[0].map((column, i) => array.map(row => row[i]));
};

/*Mapeia a matriz realizando operações
 *@param {Array}
 *@param {Function}
 * @return {Array}
 */
const mapMatrix = (array, fn) => {
  return array.map((row, i) => row.map((item, j) => fn(item, i, j)));
};
