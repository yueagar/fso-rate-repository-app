import { StyleSheet, View } from "react-native";

import theme from "../../theme";

import Text from "../Text";

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        flexDirection: "column",
        flexGrow: 1,
        flexShrink: 1
    },
    itemMargin: {
        marginBottom: 10
    },
    languageTag: {
        padding: 5,
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        alignSelf: "flex-start"
    },
    whiteColor: {
        color: "white"
    }
});

const Info = ({ fullName, description, language }) => {
    return (
        <View style={styles.container}>
            <Text fontWeight="bold" style={styles.itemMargin}>{fullName}</Text>
            <Text color="textSecondary" style={styles.itemMargin}>{description}</Text>
            <View style={styles.languageTag}>
                <Text style={styles.whiteColor}>{language}</Text>
            </View>
        </View>
    );
};

export default Info;