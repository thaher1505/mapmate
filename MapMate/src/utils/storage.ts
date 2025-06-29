import AsyncStorage from "@react-native-async-storage/async-storage";
import { Place } from "../types";

const HISTORY_KEY = "search_history";

export async function savePlace(place: Place) {
  const existing = await AsyncStorage.getItem(HISTORY_KEY);
  const history: Place[] = existing ? JSON.parse(existing) : [];
  history.unshift(place);
  await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 10))); // limit history to 10
}

export async function loadHistory(): Promise<Place[]> {
  const data = await AsyncStorage.getItem(HISTORY_KEY);
  return data ? JSON.parse(data) : [];
}
