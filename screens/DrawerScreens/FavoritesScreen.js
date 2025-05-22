import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { MovieContext } from "../../context/MovieProvider";
import MovieCard from "../../components/Cards/MovieCard";

const FavoritesScreen = () => {
  const { favorites } = useContext(MovieContext);
  const favoriteMoviesArray = Object.values(favorites);

  if (favoriteMoviesArray.length === 0) {
    return (
      <View style={styles.center}>
        <MaterialIcons
          name="favorite-border"
          size={48}
          color="rgba(76, 175, 80, 1)"
        />
        <Text style={styles.noFavoritesText}>No favorite movies yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorites</Text>
      <FlatList
        data={favoriteMoviesArray}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieCard movie={item} />}
        contentContainerStyle={styles.listContentContainer}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: "rgba(15, 15, 26, 1)",
    paddingTop: 40,
    marginBottom: 45,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 1)",
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  listContentContainer: {
    paddingBottom: 50,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(15, 15, 26, 1)",
  },
  noFavoritesText: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 1)",
  },
});

export default FavoritesScreen;
