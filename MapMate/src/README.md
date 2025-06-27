# 📍 PlaceFinder

A React Native mobile application built with **Expo + TypeScript**, allowing users to search for locations using the **Google Places API**, view them on a map, and maintain a local search history.

---

## 🚀 Features

- 🔎 **Place Search** – Type to get real-time suggestions via Google Places API  
- 🗺️ **Map View** – Display selected place on Google Map  
- 🕘 **Search History** – View and reselect previously searched places  
- 💾 **Local Storage** – History persists using `AsyncStorage`  
- 🎯 **Clean UI** – Built with modular, maintainable components

---

## 📦 Tech Stack

- [Expo](https://expo.dev/) with TypeScript  
- [React Native Maps](https://docs.expo.dev/versions/latest/sdk/map-view/)  
- [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview)  
- [AsyncStorage](https://docs.expo.dev/versions/latest/sdk/async-storage/)  
- [Lodash.debounce](https://lodash.com/docs/#debounce)

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/thaher1505/mapmate.git
cd placefinder
```

### 2. Install dependencies

```bash
yarn install
```

> Or use npm:
```bash
npm install
```

### 3. Start the Expo server

```bash
yarn start
```

> Or:
```bash
npx expo start
```

---

## 🔑 Google Maps API Key

The Google Maps API key is **hardcoded** in the project for simplicity.

### How to configure:

1. Open the file:  
   `services/placesApi.ts`

2. Replace `'XXXX'` with your actual Google API key:

```ts
const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY_HERE';
```

3. Enable the following APIs in your [Google Cloud Console](https://console.cloud.google.com/):
   - ✅ **Places API**
   - ✅ **Maps JavaScript API**

> ⚠️ **Billing must be enabled** on your Google Cloud project, even for free-tier usage.

---

## 📁 Project Structure

```
.
├── App.tsx
├── components
│   ├── SearchBar.tsx
│   └── HistoryList.tsx
├── screens
│   └── HomeScreen.tsx
├── services
│   └── placesApi.ts
├── types.ts
└── ...
```

---

## ✅ Notes

- Developed using **Node.js v20.x** (use `nvm` if needed)  
- Compatible with **Expo SDK 50+**  
- Designed for both Android and iOS (tested on Expo Go)  
- **API key is hardcoded** for simplicity — in production, use `.env` and `@env` for security

---

## ✨ Future Improvements

- 🔄 Clear search history option  
- ⏳ Loading spinner while fetching suggestions  
- 📍 Enhanced map marker with details  
- 🌓 Dark/light theme support  
- 📡 User geolocation & "nearby places" feature

---

## 🧑‍💻 Author

Made with ❤️ by [Mohammed Thaher Ali]
