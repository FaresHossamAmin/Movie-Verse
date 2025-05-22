import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { MovieContext } from "../../context/MovieProvider";
import MovieCard from "../../components/Cards/MovieCard";

const GenresScreen = () => {
  const { genresMovies } = useContext(MovieContext);

  const renderGenre = ({ item }) => (
    <View style={styles.genreSection}>
      <View style={styles.genreTitleRow}>
        <MaterialIcons name="category" size={24} color="rgba(76, 175, 80, 1)" />
        <Text style={styles.genreTitle}>{item.name}</Text>
      </View>

      <FlatList
        horizontal
        data={item.movies}
        keyExtractor={(movie) => movie.id.toString()}
        renderItem={({ item: movie }) => <MovieCard movie={movie} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
        initialNumToRender={3}
        maxToRenderPerBatch={5}
        windowSize={1}
        removeClippedSubviews={true}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Genres</Text>
      <FlatList
        data={genresMovies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderGenre}
        contentContainerStyle={styles.listContentContainer}
        showsVerticalScrollIndicator={false}
        initialNumToRender={2}
        maxToRenderPerBatch={3}
        windowSize={5}
        removeClippedSubviews={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 12,
    backgroundColor: "rgba(15, 15, 26, 1)", 
  },
  listContentContainer: {
    paddingBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 1)", 
    paddingHorizontal: 5,
    marginBottom: 20,
    marginTop: 10,
  },
  genreSection: {
    marginBottom: 24,
  },
  genreTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  genreTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 1)", 
    marginLeft: 8,
  },
  horizontalList: {
    paddingLeft: 5,
    marginBottom: 15,
  },
});

export default GenresScreen;
