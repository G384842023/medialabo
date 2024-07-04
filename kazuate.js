// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

let kai = document.querySelector('#print')
kai.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    // ユーザーの入力を取得
    let i = document.querySelector('input[name="yoso"]');
	  let yoso = Number(i.value); 
    // 回数を増やす
    kaisu += 1;
 
  
    // コンソールに回数と予想を出力
    console.log(kaisu + '回目の予想: ' + yoso);
  
    // 正解判定
    if (kaisu >= 4) {
      console.log('答えは ' + kotae + ' でした．すでにゲームは終わっています');
    } else if (yoso === kotae) {
      console.log('正解です．おめでとう!');
    } else if (kaisu === 3) {
      console.log('まちがい．残念でした答えは ' + kotae + ' です．');
    } else if (yoso < kotae) {
      console.log('まちがい．答えはもっと大きいですよ');
    } else if (yoso > kotae) {
      console.log('まちがい．答えはもっと小さいですよ');
    }

    // HTML要素に結果を出力するための要素を取得
    let kaisuElement = document.getElementById('kaisu');
    let answerElement = document.getElementById('answer');
    let resultElement = document.getElementById('result');

    // 回数と予想をHTMLに表示
    kaisuElement.textContent = kaisu + '回目の予想:'+yoso;

    // 正解判定
    if (kaisu >= 4) {
      resultElement.textContent = '答えは ' + kotae + ' でした。すでにゲームは終わっています';
  } else if (yoso === kotae) {
      resultElement.textContent = '正解です。おめでとう!';
      kaisu = 4; // ゲームを終了するために kaisu を 4 に設定
  } else if (kaisu === 3) {
      resultElement.textContent = 'まちがい。残念でした答えは ' + kotae + ' です。';
  } else if (yoso < kotae) {
      resultElement.textContent = 'まちがい。答えはもっと大きいですよ';
  } else if (yoso > kotae) {
      resultElement.textContent = 'まちがい。答えはもっと小さいですよ';
  }

}