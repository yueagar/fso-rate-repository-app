import { StyleSheet, View } from "react-native";

import Text from "../Text";

const styles = StyleSheet.create({
    container: {
        flexDirection: "column"
    }
});

const Stat = ({ type, count }) => {
    return (
        <View style={styles.container}>
            <Text fontWeight="bold">{count}</Text>
            <Text>{type}</Text>
        </View>
    );
};

export default Stat;