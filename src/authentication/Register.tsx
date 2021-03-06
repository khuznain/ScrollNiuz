import React from 'react';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {BorderlessButton} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Box, Text, PrimaryWrapper, TextInput, Button} from '../components';
import {StackNavigationProps, Routes} from '../navigation';
import BottomButton from './components/BottomButton';
import LoginBox from './components/LoginBox';

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Register = ({navigation}: StackNavigationProps<Routes, 'Register'>) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {email: '', username: '', password: ''},
    validationSchema: SignUpSchema,
    onSubmit: (values) => console.log(values),
  });

  return (
    <PrimaryWrapper>
      <KeyboardAwareScrollView
        scrollEnabled={false}
        contentContainerStyle={{flex: 1}}>
        <Box flex={1} justifyContent="center" alignItems="center">
          <LoginBox>
            <Box padding="m">
              <Text variant="body" paddingVertical="m" textAlign="center">
                {`We just need to get a few details form \n you to get you signed up for the \n service.`}
              </Text>

              <Box>
                <TextInput
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  error={errors.username}
                  touched={touched.username}
                  placeholder="Username"
                  icon="user"
                />
                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                  icon="mail"
                  autoCompleteType="email"
                  placeholder="Email"
                />
                <TextInput
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  error={errors.password}
                  touched={touched.password}
                  secureTextEntry
                  autoCompleteType="password"
                  icon="lock"
                  placeholder="Password"
                />
                <Button onPress={handleSubmit} label="SIGN UP" />
                <Box alignItems="center" paddingBottom="m">
                  <Box flexDirection="row">
                    <Text color="shadow2">───</Text>
                    <Text color="black" paddingHorizontal="s">
                      or
                    </Text>
                    <Text color="shadow2">───</Text>
                  </Box>
                  <Text variant="body">you can also signup with</Text>
                </Box>
              </Box>
            </Box>
          </LoginBox>
          <BottomButton
            onPress={() => navigation.navigate('Login')}
            text="Already have account ?"
            buttonText="Log In"
          />
        </Box>
      </KeyboardAwareScrollView>
    </PrimaryWrapper>
  );
};

export default Register;
