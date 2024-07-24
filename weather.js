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

  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  // データを表示する関数を呼び出し
  print(data);
}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
  alert('天気情報を取得できませんでした。');
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}

function print(data) {
  const weatherInfo = document.getElementById('weather-info');

  // Clear previous content
  weatherInfo.textContent = '';

  // Create elements for each piece of information
  const cityHeading = document.createElement('h2');
  cityHeading.textContent = data.name;

  const weatherDesc = document.createElement('p');
  weatherDesc.textContent = `天気: ${data.weather[0].description}`;

  const minTemp = document.createElement('p');
  minTemp.textContent = `最低気温: ${data.main.temp_min} °C`;

  const maxTemp = document.createElement('p');
  maxTemp.textContent = `最高気温: ${data.main.temp_max} °C`;

  const humidity = document.createElement('p');
  humidity.textContent = `湿度: ${data.main.humidity} %`;

  const windSpeed = document.createElement('p');
  windSpeed.textContent = `風速: ${data.wind.speed} m/s`;

  // Append elements to weatherInfo container
  weatherInfo.appendChild(cityHeading);
  weatherInfo.appendChild(weatherDesc);
  weatherInfo.appendChild(minTemp);
  weatherInfo.appendChild(maxTemp);
  weatherInfo.appendChild(humidity);
  weatherInfo.appendChild(windSpeed);
}


function clearWeatherInfo() {
    document.getElementById('weather-info').textContent = '';
}
