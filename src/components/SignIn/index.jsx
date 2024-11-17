import { StyleSheet, View, TextInput, Pressable } from "react-native";

import { useFormik } from "formik";
import * as yup from "yup";

import Text from "../Text";

import theme from "../../theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: theme.colors.signInBackground,
        padding: 6
    },
    inputBox: {
        margin: 6,
        padding: 12,
        borderColor: theme.colors.textSecondary,
        borderWidth: 1,
        borderRadius: 3
    },
    submitButton: {
        margin: 6,
        padding: 12,
        backgroundColor: theme.colors.primary,
        borderRadius: 3,
        alignItems: "center"
    },
    errorBorder: {
        borderColor: theme.colors.error
    },
    whiteColor: {
        color: "white"
    },
    errorColor: {
        color: theme.colors.error
    }
});

const initialValues = {
    username: "",
    password: ""
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required("Username is required"),
    password: yup
        .string()
        .required("Password is required")
});

const SignIn = () => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return <View style={styles.container}>
        <TextInput placeholder="Username" value={formik.values.username} onChangeText={formik.handleChange("username")} style={[styles.inputBox, formik.touched.username && formik.errors.username && styles.errorBorder]} />
        {formik.touched.username && formik.errors.username && (<Text style={styles.errorColor}>{formik.errors.username}</Text>)}
        <TextInput placeholder="Password" value={formik.values.password} secureTextEntry={true} onChangeText={formik.handleChange("password")} style={[styles.inputBox, formik.touched.password && formik.errors.password && styles.errorBorder]} />
        {formik.touched.password && formik.errors.password && (<Text style={styles.errorColor}>{formik.errors.password}</Text>)}
        <Pressable onPress={formik.handleSubmit} style={styles.submitButton}>
            <Text style={styles.whiteColor}>Sign in</Text>
        </Pressable>
    </View>;
};

export default SignIn;