import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.pointer} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Text style={styles.header}>Header</Text>
            <TextInput placeholder="Username" style={styles.textInput} />
            <View style={styles.btnContainer}>
              <Button title="Submit" onPress={() => null} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  pointer: {
    position: 'absolute',
    bottom: 29,
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: '#8a2eae',
  },
  container: {
    flex: 1,
    borderWidth: 5,
    borderColor: '#1a1a1a',
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export default App;
