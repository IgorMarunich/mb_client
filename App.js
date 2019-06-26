import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  COLOR,
  ThemeContext,
  getTheme,
  Button,
  BottomNavigation,
} from 'react-native-material-ui';

const uiTheme = {
  palette: {
    primaryColor: COLOR.green400,
    accentColor: COLOR.purple400,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

class Main extends Component {
  state = {
    active: '',
  };
  render() {
    return (
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <View style={styles.container}>
          <Button primary text="Primary" />
          <Button accent text="Accent" />
          <Button raised primary text="Primary" />
          <Button raised accent text="Accent" />
          <Button disabled text="Disabled" />
          <Text>Easy Learn Anything</Text>
        </View>
        <BottomNavigation active={this.state.active} hidden={false}>
          <BottomNavigation.Action
            key="today"
            icon="today"
            label="Today"
            onPress={() => this.setState({ active: 'today' })}
          />
          <BottomNavigation.Action
            key="people"
            icon="people"
            label="People"
            onPress={() => this.setState({ active: 'people' })}
          />
          <BottomNavigation.Action
            key="bookmark-border"
            icon="bookmark-border"
            label="Bookmark"
            onPress={() => this.setState({ active: 'bookmark-border' })}
          />
          <BottomNavigation.Action
            key="settings"
            icon="settings"
            label="Settings"
            onPress={() => this.setState({ active: 'settings' })}
          />
        </BottomNavigation>
      </ThemeContext.Provider>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Text>App with Material UI</Text>
        </View>
        <Main />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
