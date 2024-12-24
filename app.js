let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0; //試行回数

//HTML要素の取得
const guessInput = document.getElementById("guess");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");

//判定ボタンを押したときの処理
checkBtn.addEventListener("click", () => {
  const guess = Number(guessInput.value) //入力値を数値に変換
  attempts++; //試行回数をプラスする

//入力をチェック
  if (!guess) {
    message.textContent = "数字を入力してください！"
    return;
  }

  //判定
  if (guess < secretNumber) {
    message.textContent = "もっと大きい数字です！"
  } else if (guess > secretNumber) {
    message.textContent = "もっと小さな数字です！"
  } else {
    message.textContent = `おめでとうございます！正解です！ (${attempts}回で正解）`;
    checkBtn.disabled = true; //ボタンの無効化
    resetBtn.style.display = "inline"; //リセットボタンを表示
  }
});

//リセットボタンを押したときの処理
resetBtn.addEventListener ( "click", () => {
  secretNumber = Math.floor(Math.random() * 100) + 1; //新しい数字を設定
  attempts = 0; //試行回数をリセット
  message.textContent = ""; //メッセージをリセット
  guessInput.value = ""; //入力欄を空にする
  checkBtn.disabled = false; //ボタンの有効化
  resetBtn.style.display = "none"; //リセットボタンを隠す
});