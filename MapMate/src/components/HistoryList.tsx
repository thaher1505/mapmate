import React from "react";
import { Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { Place } from "../types";

interface Props {
  history: Place[];
  onSelect: (place: Place) => void;
}

export default function HistoryList({ history, onSelect }: Props) {
  return (
    <FlatList
      data={history}
      keyExtractor={(item, index) => `${item.name}-${index}`}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onSelect(item)} style={styles.item}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.address}>{item.address}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  name: {
    fontWeight: "bold",
  },
  address: {
    fontSize: 12,
    color: "#555",
  },
});
