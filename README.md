# Air Quality Checker

A simple web app that shows the current **Air Quality Index (AQI)** for any city you type in.

## Features
- Enter a city name and get the latest AQI value.
- Uses the [World Air Quality Index API](https://aqicn.org/api/).
- Clean, minimal interface built with **HTML**, **CSS**, and **JavaScript**.

## How It Works
1. The user types a city into the input field and clicks **Check AQI**.
2. A request is sent to  
   `https://api.waqi.info/feed/{CITY}/?token=demo`  
   (demo token for testing).
3. The app displays the AQI value returned by the API.

## Files
- **index.html** – page layout  
- **styles.css** – basic styling  
- **script.js** – fetches data and updates the UI

## Setup
1. Clone or download this repository.
2. Open `index.html` in your browser.

> ⚠️ The demo token works only for limited testing.  
> For production, sign up for a free account at [aqicn.org](https://aqicn.org/api/) and replace `token=demo` in `script.js` with your own API key.

## License
MIT License.

---

*Learning project created with ChatGPT assistance while practicing modern JavaScript.*
