import React, { useState, useMemo } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import debounce from 'lodash.debounce';
import { fetchPlaceSuggestions, fetchPlaceDetails } from '../services/placesApi';
import { Place } from '../types';

interface Props {
  onPlaceSelect: (place: Place) => void;
}

export default function SearchBar({ onPlaceSelect }: Props) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);

  // ✅ Debounce only once using useMemo
  const debouncedSearch = useMemo(
    () =>
      debounce(async (text: string) => {
        if (text.length > 2) {
          const results = await fetchPlaceSuggestions(text);
          setSuggestions(results);
        } else {
          setSuggestions([]);
        }
      }, 300),
    []
  );

  const handleTextChange = (text: string) => {
    setQuery(text);
    debouncedSearch(text);
  };

  const handleSelect = async (placeId: string) => {
    const place = await fetchPlaceDetails(placeId);
    if (place) {
      onPlaceSelect(place);
      setQuery('');
      setSuggestions([]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search for places..."
        value={query}
        onChangeText={handleTextChange}
        style={styles.input}
      />
      {suggestions.length > 0 && (
        <FlatList
          data={suggestions}
          keyExtractor={(item) => item.place_id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelect(item.place_id)} style={styles.item}>
              <Text>{item.description}</Text>
            </TouchableOpacity>
          )}
          keyboardShouldPersistTaps="handled"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    zIndex: 1000,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});
