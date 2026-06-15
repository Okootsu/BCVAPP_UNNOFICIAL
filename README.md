# BCVAPP_UNNOFICIAL

Aplicación móvil desarrollada con **Expo**, **React Native** y **TypeScript** para consultar información relacionada con las tasas del BCV.

> **Importante:** este proyecto es solo el **frontend**.  
> No incluye la API de datos.  
> El backend utilizado pertenece a este repositorio:  
> [BCV-Rate-API](https://github.com/Okootsu/BCV-Rate-API)

---

## Tecnologías utilizadas

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

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/)
- npm o yarn
- [Expo CLI](https://docs.expo.dev/more/expo-cli/)
- Un emulador Android/iOS o un dispositivo físico con Expo Go

---

## Instalación

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

## Configuración de la API

Este proyecto consume datos desde una API externa separada.

Repositorio de la API:

```txt
https://github.com/Okootsu/BCV-Rate-API
```

Si tienes una instancia local del backend, configura la URL en tu archivo de servicios, por ejemplo:

```js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export default api;
```

> Si usas un emulador Android, puede que debas usar `http://10.0.2.2:3000` en lugar de `localhost`.  
> Si usas un dispositivo físico, usa la IP local de tu PC.

---

## Ejecución del proyecto

Inicia el proyecto en modo desarrollo:

```bash
npm start
```

O con Expo directamente:

```bash
npx expo start
```

### Plataformas

Ejecutar en Android:

```bash
npm run android
```

Ejecutar en iOS:

```bash
npm run ios
```

## Estructura del proyecto

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

## Dependencias principales

- `expo`
- `expo-router`
- `axios`
- `react`
- `react-native`
- `@react-navigation/native`
- `react-native-reanimated`
- `@react-native-picker/picker`

---

## Nota importante

Este repositorio contiene únicamente la interfaz de usuario y la lógica del frontend.  
La API y el backend de datos están alojados en un repositorio separado:

- **Frontend:** [BCVAPP_UNNOFICIAL](https://github.com/Okootsu/BCVAPP_UNNOFICIAL)
- **API:** [BCV-Rate-API](https://github.com/Okootsu/BCV-Rate-API)

---

## Aclaratoria

Este proyecto puede utilizarse con fines personales, educativos o de aprendizaje.  
