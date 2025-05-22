import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SearchBar = ({ query, setQuery }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={22} color="#bbb" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search movies..."
        placeholderTextColor="#888"
        value={query}
        onChangeText={setQuery}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
    marginTop:15,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
  },
});

export default SearchBar;
