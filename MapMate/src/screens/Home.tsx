import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import MapViewComponent from '../components/MapViewComponent';
import HistoryList from '../components/HistoryList';
import { Place } from '../types';
import { savePlace, loadHistory } from '../utils/storage';

export default function HomeScreen() {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [history, setHistory] = useState<Place[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const saved = await loadHistory();
      setHistory(saved);
    };
    fetchHistory();
  }, []);

  const handlePlaceSelect = useCallback(async (place: Place) => {
    setSelectedPlace(place);
    await savePlace(place);
    const updated = await loadHistory();
    setHistory(updated);
  }, []);

  const handleHistorySelect = (place: Place) => {
    setSelectedPlace(place);
  };

  return (
    <View style={styles.container}>
      <SearchBar onPlaceSelect={handlePlaceSelect} />
      <MapViewComponent place={selectedPlace} />
      <Text style={styles.historyTitle}>Search History</Text>
      <HistoryList history={history} onSelect={handleHistorySelect} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
});
