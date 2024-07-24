let re = document.querySelector('div#result');
let p1 = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('p');
let p4 = document.createElement('p');
let p5 = document.createElement('p');
let p6 = document.createElement('p');

    // ボタン処理
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
        alert('天気情報を取得できませんでした。エラー: ' + err.message);
    }

    // 通信の最後にいつも実行する処理
    function finish() {
        console.log('Ajax 通信が終わりました');
    }

    function print(data) {
        p1.textContent = "都市名 : " + data.name;
        re.insertAdjacentElement('beforeend', p1);

        p2.textContent = "天気 : " + data.weather[0].description;
        re.insertAdjacentElement('beforeend', p2); 

        p3.textContent = "最低気温 : " + data.main.temp_min + "℃";
        re.insertAdjacentElement('beforeend', p3); 

        p4.textContent = "最高気温 : " + data.main.temp_max + "℃";
        re.insertAdjacentElement('beforeend', p4); 

        p5.textContent = "湿度 : " + data.main.humidity + "%";
        re.insertAdjacentElement('beforeend', p5);
      }