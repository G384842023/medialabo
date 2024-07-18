//ボタン処理
let b = document.querySelector('button#getWeather');
b.addEventListener('click', showSelectResult);

function showSelectResult() {
    let cityId = document.querySelector('select#city-select').value;
    if (cityId) {
        console.log('都市id:' + cityId);
        sendRequest(cityId);
    } else {
        alert('都市を選択してください');
    }
}

function sendRequest(cityId) {
    // URL を設定
    let url = `https://www.nishita-lab.org/web-contents/jsons/openweather/${cityId}.json`;

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;
    print(data); // データを表示
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

function print(data) {
  const resultInfo = `
    <h2>${data.name}</h2>
    <p>天気: ${data.weather[0].description}</p>
    <p>最低気温: ${data.main.temp_min} °C</p>
    <p>最高気温: ${data.main.temp_max} °C</p>
    <p>湿度: ${data.main.humidity} %</p>
    <p>風速: ${data.wind.speed} m/s</p>
  `;
  document.getElementById('weather-info').innerHTML = resultInfo;
}
