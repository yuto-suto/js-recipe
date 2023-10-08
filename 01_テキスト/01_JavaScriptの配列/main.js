// 配列の作成
const karappo = []
console.log(karappo) // => []

// SECTION: 配列のアクセス

// 配列の中にオブジェクトを入れて成績簿を表す
const seisekibo = [
  { name: "とーや", taiiku: 1, bijutsu: 5, doutoku: 5 },
  { name: "りょーた", taiiku: 3, bijutsu: 3, doutoku: 3 },
  { name: "やすなり", taiiku: 5, bijutsu: 5, doutoku: 1 },
]

console.log(seisekibo[0]) // => { name: "とーや", taiiku: 1, bijutsu: 5, doutoku: 5 }
console.log(seisekibo[0].name) // => "とーや"

seisekibo[0] = { name: "ひかきん", taiiku: 5, bijutu: 5, doutoku: 5 }
console.log(seisekibo[0]) // => { name : 'ひかきん', taiiku: 5, bijutu: 5, doutoku: 5 }

console.log(seisekibo[5]) // => undefined
console.log(seisekibo[-1]) // => undefined

// SECTION 要素の数
console.log(seisekibo.length) // => 3

// SECTION 配列とループ

// 配列の要素の数だけループする
for (let i = 0; i < seisekibo.length; i++) {
  console.log(i + "番目の要素は ", seisekibo[i])
}

// SECTION 要素の追加

const aisatsu = ["おはよう", "こんにちは"]
aisatsu.push("こんばんは")
console.log(aisatsu) // => ['おはよう', 'こんにちは', 'こんばんは']

// SECTION その他の操作

// 任意の要素が含まれているか判定する
const isExist = aisatsu.includes("おはよう")
console.log(isExist) // => true

// 任意の要素を検索して取得する
const value = aisatsu.find("こんにちは")
console.log(value) // => "こんにちは"

// 任意の位置の要素を操作する
const index = aisatsu.findIndex("こんにちは")
aisatsu[index] = "やあ"
console.log(aisatsu) // => ['おはよう', 'やあ', 'こんばんは']

// 任意の要素を削除する
aisatsu.splice(index, 1) // 1番目の'やあ'から1つ要素を削除する
console.log(aisatsu) // => ['おはよう', 'こんばんは']

// SECTION 配列の展開
const irohaIchinodan = ["い", "ろ", "は", "に", "ほ", "へ", "と"]
const irohaNinodan = ["ち", "り", "ぬ", "る", "を"]

const ichinodanToNinodan = [...irohaIchinodan, ...irohaNinodan]

console.log(ichinodanToNinodan) // => ['い','ろ','は','に','ほ','へ','と','ち','り','ぬ','る','を']
