import { Grid, Row, Icon } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function SplashScreen() {
  return (
    <Grid>
      <Row style={styles.splash}>
        <Icon name="power-outline" style={styles.splashIcon} />
      </Row>
    </Grid>
  );
}

const styles = StyleSheet.create({
  splash: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashIcon: { fontSize: 70 },
});
