function main() {
  var a = [1, 3, 4, [5, 6], 1]; //[ [ 1, 3, 4, 5, 1 ], [ 6 ] ]
  var c = transpose(a);
  return mapMatrix(c,(c)=> c == '' ? 0 : c);
}