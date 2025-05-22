import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { GENRE_MAP, IMAGE_BASE_URL } from "../utils/tmdb";

const DetailsScreen = () => {
  const route = useRoute();
  const movie = route.params?.movie || route.params;

  if (!movie) {
    return (
      <View style={styles.center}>
        <Text>No movie data found.</Text>
      </View>
    );
  }

  const releaseDate = new Date(movie.release_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        style={styles.scrollView}
      >
        {/* Backdrop */}
        <View style={styles.backdropContainer}>
          <Image
            source={{ uri: IMAGE_BASE_URL + movie.backdrop_path }}
            style={styles.backdrop}
            resizeMode="cover"
          />
        </View>

        <View style={styles.content}>
          {/* Poster + info */}
          <View style={styles.header}>
            <Image
              source={{ uri: IMAGE_BASE_URL + movie.poster_path }}
              style={styles.poster}
              resizeMode="cover"
            />
            <View style={styles.headerInfo}>
              <Text style={styles.title}>{movie.title}</Text>

              <View style={styles.ratingContainer}>
                <View style={styles.ratingCircle}>
                  <Text style={styles.ratingText}>
                    {movie.vote_average.toFixed(1)}
                  </Text>
                </View>
                <Text style={styles.voteCount}>{movie.vote_count} votes</Text>
              </View>

              <Text style={styles.releaseDate}>{releaseDate}</Text>
              <Text style={styles.language}>
                Language: {movie.original_language.toUpperCase()}
              </Text>
            </View>
          </View>

          {/* Overview */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Overview</Text>
            <Text style={styles.overview}>{movie.overview}</Text>
          </View>

          {/* Additional details */}
          <View style={styles.detailsRow}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Adult</Text>
              <Text style={styles.adult}>{movie.adult ? "Yes" : "No"}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Genres</Text>
              <Text style={styles.detailValue}>
                {movie.genre_ids
                  .map((id) => GENRE_MAP[id] || "Unknown")
                  .join("\n")}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15, 15, 26, 1)",
    marginBottom: 45,
  },
  scrollView: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(15, 15, 26, 1)", // #0f0f1a
  },
  backdropContainer: {
    height: 250,
    width: "100%",
  },
  backdrop: {
    width: "100%",
    height: "100%",
  },
  content: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    marginBottom: 20,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 10,
    marginRight: 20,
  },
  headerInfo: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 1)",
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  ratingCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(76, 175, 80, 1)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  ratingText: {
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "bold",
    fontSize: 16,
  },
  voteCount: {
    color: "rgba(161, 161, 161, 1)",
    fontSize: 14,
  },
  releaseDate: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    marginBottom: 6,
  },
  language: {
    color: "rgba(161, 161, 161, 1)",
    fontSize: 14,
    marginBottom: 4,
  },
  adult: {
    color: "rgba(161, 161, 161, 1)",
    fontSize: 14,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  actionButton: {
    alignItems: "center",
    backgroundColor: "rgba(31, 31, 46, 1)",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
  },
  actionText: {
    color: "rgba(255, 255, 255, 1)",
    marginTop: 5,
    fontSize: 12,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  overview: {
    color: "rgba(209, 209, 209, 1)",
    fontSize: 15,
    lineHeight: 22,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  detailItem: {
    backgroundColor: "rgba(31, 31, 46, 1)",
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  detailLabel: {
    color: "rgba(161, 161, 161, 1)",
    fontSize: 12,
    marginBottom: 5,
  },
  detailValue: {
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "bold",
    textAlign: "center",
  },
  bottomControls: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(31, 31, 46, 1)",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  bottomButton: {
    backgroundColor: "rgba(76, 175, 80, 1)",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  bottomButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default DetailsScreen;
