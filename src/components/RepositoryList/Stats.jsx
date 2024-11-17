import { StyleSheet, View } from "react-native";

import Stat from "./Stat";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around"
    }
});

const Stats = ({ stargazersCount, forksCount, reviewCount, ratingAverage }) => {
    return (
        <View style={styles.container}>
            <Stat type="Stars" count={stargazersCount}></Stat>
            <Stat type="Forks" count={forksCount}></Stat>
            <Stat type="Reviews" count={reviewCount}></Stat>
            <Stat type="Rating" count={ratingAverage}></Stat>
        </View>
    );
};

export default Stats;