# ✨ BCVAPP_UNNOFICIAL

**BCVAPP_UNNOFICIAL** es una aplicación móvil desarrollada con **Expo**, **React Native** y **TypeScript** para consultar información relacionada con las tasas del BCV de forma rápida, sencilla y moderna.

> **Importante:** este proyecto contiene únicamente el **frontend**.  
> La API de datos no está incluida en este repositorio.  
> El backend correspondiente se encuentra en:  
> [BCV-Rate-API](https://github.com/Okootsu/BCV-Rate-API)

---

## 📱 Vista general

Este proyecto fue pensado para ofrecer una interfaz ligera y funcional, consumiendo datos desde una API externa separada.  
La app está estructurada para mantener el código ordenado, escalable y fácil de mantener.

---

## 🛠️ Tecnologías utilizadas

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Axios](https://axios-http.com/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [Expo Vector Icons](https://icons.expo.fyi/)
- [React Native Picker](https://github.com/react-native-picker/picker)

---

## ✅ Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/)
- npm o yarn
- [Expo CLI](https://docs.expo.dev/more/expo-cli/)
- Un emulador Android/iOS o un dispositivo físico con **Expo Go**

---

## 🚀 Instalación

Clona el repositorio:

```bash
git clone https://github.com/Okootsu/BCVAPP_UNNOFICIAL.git
```

Entra al proyecto:

```bash
cd BCVAPP_UNNOFICIAL
```

Instala las dependencias:

```bash
npm install
```

---

## 🔌 Configuración de la API

Este proyecto consume datos desde una API externa que se mantiene en un repositorio aparte.

### Repositorio del backend:
[BCV-Rate-API](https://github.com/Okootsu/BCV-Rate-API)

Si estás trabajando en local, puedes configurar la URL del backend en tu archivo de servicios, por ejemplo:

```js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export default api;
```

> **Nota:**  
> - En un emulador Android, en algunos casos debes usar `http://10.0.2.2:3000` en lugar de `localhost`.
> - En un dispositivo físico, usa la IP local de tu computadora.

---

## ▶️ Ejecución del proyecto

Inicia el proyecto en modo desarrollo:

```bash
npm start
```

O usando Expo directamente:

```bash
npx expo start
```

### Plataformas disponibles

Ejecutar en Android:

```bash
npm run android
```

Ejecutar en iOS:

```bash
npm run ios
```

Ejecutar en web:

```bash
npm run web
```

---

## 📂 Estructura del proyecto

```txt
BCVAPP_UNNOFICIAL/
├── app/
├── assets/
├── components/
├── constants/
├── context/
├── services/
├── types/
├── app.json
├── package.json
├── tsconfig.json
└── ...
```

---

## 📦 Dependencias principales

- `expo`
- `expo-router`
- `axios`
- `react`
- `react-native`
- `@react-navigation/native`
- `react-native-reanimated`
- `@react-native-picker/picker`

---

## 🔎 Nota importante

Este repositorio contiene únicamente la interfaz de usuario y la lógica del frontend.  
La API y el backend de datos están alojados en un repositorio separado:

- **Frontend:** [BCVAPP_UNNOFICIAL](https://github.com/Okootsu/BCVAPP_UNNOFICIAL)
- **API:** [BCV-Rate-API](https://github.com/Okootsu/BCV-Rate-API)

---

## 📌 Aclaratoria

Este proyecto puede utilizarse con fines personales, educativos o de aprendizaje.  
