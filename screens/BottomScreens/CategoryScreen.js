import { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { MovieContext } from "../../context/MovieProvider";
import routes from "../../utils/routes";
import MovieCard from "../../components/Cards/MovieCard";
import SearchBar from "../../components/UI/SearchBar";

const categoryTitles = {
  [routes.pop]: "Popular Movies",
  [routes.now]: "Now Playing",
  [routes.top]: "Top Rated",
};

const CategoryScreen = ({ route }) => {
  const { category } = route.params;
  const { popularMovies, nowPlayingMovies, topRatedMovies } =
    useContext(MovieContext);

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    switch (category) {
      case routes.pop:
        setMovies(popularMovies);
        break;
      case routes.now:
        setMovies(nowPlayingMovies);
        break;
      case routes.top:
        setMovies(topRatedMovies);
        break;
      default:
        setMovies([]);
    }
  }, [category, popularMovies, nowPlayingMovies, topRatedMovies]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  const renderMovie = ({ item }) => <MovieCard movie={item} />;

  return (
    <View style={styles.container}>
      <SearchBar query={query} setQuery={setQuery} />
      <Text style={styles.header}>{categoryTitles[category]}</Text>
      <FlatList
        data={filteredMovies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMovie}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        initialNumToRender={4}
        maxToRenderPerBatch={6}
        windowSize={1}
        contentContainerStyle={styles.listContent}
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
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 1)",
    paddingHorizontal: 5,
    marginBottom: 20,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default CategoryScreen;
