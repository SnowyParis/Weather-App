# 🌦️ Weather App

A simple and responsive weather application that allows users to search for any city and view real-time weather information about the temperature, cloud cover, humidity and wind speed for the specified city for that date.

This project was built to practice and strengthen my understanding of **JavaScript fundamentals**, working with **APIs**, and handling **asynchronous data**.

---

## 🚀 Features

* 🔍 Search weather by city name
* 🌡️ Displays current temperature
* ☁️ Shows cloud coverage
* 💧 Displays humidity levels
* 🌬️ Shows wind speed
* ⚡ Real-time data fetched from OpenWeatherMap API
* 📱 Responsive and user-friendly interface

---

## 🛠️ Technologies Used

* **HTML5** – Structure of the app
* **CSS3** – Styling and layout
* **JavaScript (Vanilla JS)** – Logic and API handling
* **OpenWeatherMap API** – Weather data source

---

## ⚙️ How It Works

1. User enters a city name into the search box
2. The app sends a request to the OpenWeatherMap API
3. Weather data is retrieved asynchronously
4. The UI updates to display:

   * Temperature
   * Cloud cover
   * Humidity
   * Wind speed

---

## 🔑 API Setup

To run this project, you will need an API key from OpenWeatherMap:

1. Go to [https://openweathermap.org/api](https://openweathermap.org/api)
2. Sign up and generate your API key
3. Replace the placeholder in your JavaScript file:

```javascript
const apiKey = "YOUR_API_KEY_HERE";
```

---

## ▶️ Getting Started

1. Clone the repository:

```bash
git clone https://github.com/SnowyParis/weather-app.git
```

2. Navigate into the project folder:

```bash
cd weather-app
```

3. Open `index.html` in your browser

---

## 📚 Learning Goals

This project helped me practice:

* Fetching data from an external API
* Working with `fetch()` and promises
* Handling JSON data
* Updating the DOM dynamically
* Building responsive UI with CSS

---

## 🔮 Future Improvements

* 📍 Add geolocation (current location weather)
* 📅 Display 5-day weather forecast
* 🌙 Add dark/light mode toggle
* ❌ Error handling for invalid city names
* ⏱️ Loading animations

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome!
Feel free to fork this repository and submit a pull request.

---
