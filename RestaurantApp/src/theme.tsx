import { extendTheme, ColorMode  } from 'native-base';
import type { StorageManager } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE_APP_COLOR_MODE } from './configs/Constants';

const newColorsTheme = {
  brand: {

  }
};

export const colorModeManager: StorageManager = {
  get: async () => {
    try {
      let val = await AsyncStorage.getItem(STORAGE_APP_COLOR_MODE);
      return val === "dark" ? "dark" : "light";
    } catch (e) {
      console.log(e);
      return "light";
    }
  },
  set: async (value: ColorMode) => {
    try {
      await AsyncStorage.setItem(STORAGE_APP_COLOR_MODE, value + '');
    } catch (e) {
      console.log(e);
    }
  },
};

export const theme = extendTheme({
  colors: newColorsTheme
});