import { StyleSheet, View, Image } from "react-native";

import theme from "../../theme";

import Info from "./Info";
import Stats from "./Stats";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: theme.colors.repositoryListItemBackground
    },
    infoContainer: {
        flexDirection: "row",
        marginBottom: 10
    },
    image: {
        width: 50,
        height: 50
    }
});

const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Image source={{ uri: item.ownerAvatarUrl }} style={styles.image} />
                <Info fullName={item.fullName} description={item.description} language={item.language} />
            </View>
            <Stats
                stargazersCount={item.stargazersCount}
                forksCount={item.forksCount}
                reviewCount={item.reviewCount}
                ratingAverage={item.ratingAverage}
            />
        </View>
    );
};

export default RepositoryItem;