import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { IMAGE_BASE_URL } from "../../utils/tmdb";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { MovieContext } from "../../context/MovieProvider";
import routes from "../../utils/routes";

const MovieCard = ({ movie }) => {
  const { favorites, toggleFavorite } = useContext(MovieContext);
  const isFavorited = Boolean(favorites[movie.id]);
  const nav = useNavigation();

  return (
    <View style={styles.card}>
      <TouchableOpacity
        activeOpacity={0.7} 
        onPress={() => nav.navigate(routes.det, { ...movie })}
        style={styles.touchable}
      >
        <Image
          source={{ uri: `${IMAGE_BASE_URL}${movie.poster_path}` }}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">
          {movie.title}
        </Text>
        <StarRatingDisplay
          starSize={20}
          rating={movie.vote_average / 2}
          starStyle={{ color: "rgba(76, 175, 80, 1)" }}
        />
        <View style={styles.iconSection}>
          <TouchableOpacity onPress={() => toggleFavorite(movie)}>
            <MaterialIcons
              name={isFavorited ? "favorite" : "favorite-border"}
              size={28}
              color={isFavorited ? "rgba(76, 175, 80, 1)" : "gray"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 165,
    height: 370,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "rgb(45, 62, 95)",
    elevation: 5,
    marginBottom: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "rgba(76, 175, 80, 1)", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  touchable: {
    borderRadius: 12,
    overflow: "hidden", 
    marginVertical: 8,
    marginHorizontal: 8,
    elevation: 6,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor:"rgb(255, 255, 255)"
  },
  image: {
    width: 150,
    height: 225,
    borderRadius: 12,
  },
  content: {
    flex: 1,
    paddingHorizontal: 6,
    paddingVertical: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "rgb(255,255,255)",
    lineHeight: 18,
  },
  iconSection: {
    marginTop: 5,
  },
});

export default MovieCard;
