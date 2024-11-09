// TRY: 練習問題 １
const plus1 = function (x) {
  return x + 1
}
// 関数名:plus1
// 引数:x
// 返り値:x+1

// TRY: 練習問題 ２
// f1: 1, 4, 7, 10, 13, 16, ...
const f1 = function (n) {
  return 1 + 3 * n
}
// f2: 1, 10, 100, 1000, 10000, ...
const f2 = function (n) {
  return 10 ** n
}
// f3: 2, 14, 107, 1010, 10013, ...
const f3 = function (n) {
  return f1(n) + f2(n)
}
// TRY: 練習問題３
// ① ２つの引数を受け取り、それらをかけ合わせた値を返す関数 multiply を作成して正しく動くかテストしてください。
const multiply = function (x, y) {
  return x * y
}
// ② ２つの引数を受け取り、それらを足し合わせた結果を四捨五入した値を返す関数 plusRound を作成して正しく動くかテストしてください。
const plsRound = function (x, y) {
  return Math.round(x + y)
}
