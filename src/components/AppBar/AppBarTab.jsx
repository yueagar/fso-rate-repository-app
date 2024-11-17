import { StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';

import Text from '../Text';

const styles = StyleSheet.create({
    tabText: {
        color: "white",
        margin: 10
    }
});

const AppBarTab = ({ to, text }) => {
    return <View>
        <Link to={to}>
            <Text fontWeight="bold" style={styles.tabText}>{text}</Text>
        </Link>
    </View>;
};

export default AppBarTab;