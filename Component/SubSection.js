import React, { useEffect, useState, useContext } from 'react';
import { Button, Text, View, TextInput, StyleSheet } from 'react-native';

const SubSection = ({ title, text }) => {
    return (
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={{ marginLeft: '10%' }}>
          {
            text.map((line) => {
              console.log(line);
              if (line.sub) {
                return (
                  <View>
                    <Text>{line.main} </Text>
                    <Text style={{ fontSize: 12 }}>- {line.sub}</Text>
                  </View>
                )
              }
              else {
                return (
                  <View>
                    <Text>{line.main} </Text>
                  </View>
                )
              }
            })
          }
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: 'blue'
    },
  
    bloc: {
      borderRadius: 10,
      margin: 5
    },
    title: {
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 17
    },
    profileImg: {
      height: 200,
      width: 80,
      borderRadius: 40,
      marginLeft: 0
    },
    presentation: {
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      fontSize: 20,
      fontWeight: 'bold'
    },
    center: {
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      width: '100%'
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }
  });

export default SubSection;