import { StyleSheet, View, ScrollView } from "react-native";
import Constants from "expo-constants";

import theme from "../../theme";

import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBarBackground
    }
});

const AppBar = () => {
    return <View style={styles.container}>
        <ScrollView horizontal>
            <AppBarTab text="Repositories" to="/" />
            <AppBarTab text="Sign in" to="/signin" />
        </ScrollView>
    </View>;
};

export default AppBar;