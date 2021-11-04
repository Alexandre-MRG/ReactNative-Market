import React, { useEffect, useState, useContext } from 'react';
import { SafeAreaView, Image, Text, View, TextInput, StyleSheet } from 'react-native';
import SubSection from './SubSection';
import ContactForm from './ContactForm';

const CVmain = () => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={{ flexDirection: 'row', height: "25%" }}>
                <View style={{ backgroundColor: "white", flex: 1.2 }}>
                    <Image source={{ uri: "https://www.signivis.com/img/custom/avatars/member-avatar-01.png" }} style={[styles.profileImg, styles.center]} />
                </View>
                <View style={{ backgroundColor: "white", flex: 1 }}>
                    <Text style={[{ marginTop: '33%' }, styles.presentation]}>Alexandre </Text>
                    <Text style={styles.presentation}>MARGRAFF </Text>
                    <Text style={styles.presentation}>24 ans </Text>
                </View>
            </View>

            <View style={{ backgroundColor: "white", flex: 5 }}>
                <View style={{ flexDirection: 'column', flex: 1 }}>

                    <View style={[{ backgroundColor: "orange", flex: 2 }, styles.bloc]}>
                        <SubSection
                            title={"Expériences profesionnelles"}
                            text={
                                [
                                    {
                                        main: "Frontend",
                                        sub: "développeur React"
                                    },
                                    {
                                        main: "Backend",
                                        sub: "développeur php et nodejs"
                                    },
                                    {
                                        main: "Administration système",
                                        sub: "windows serveur, ubuntu"
                                    }
                                ]
                            }
                        />
                    </View>

                    <View style={{ flexDirection: 'row', flex: 2 }}>
                        <View style={[{ backgroundColor: "lightblue", flex: 2 }, styles.bloc]}>
                            <SubSection
                                title={"Formations"}
                                text={
                                    [
                                        {
                                            main: "- BAC"
                                        },
                                        {
                                            main: "- BTS"
                                        }
                                    ]
                                }
                            />
                        </View>
                        <View style={[{ backgroundColor: "cyan", flex: 2, fontWeight: 'bold' }, styles.bloc]}>
                            <SubSection
                                title={"Formations"}
                                text={
                                    [
                                        {
                                            main: "- Jeux vidéos"
                                        },
                                        {
                                            main: "- Netflix"
                                        }
                                    ]
                                }
                            />
                        </View>
                    </View>

                    <View style={{ backgroundColor: "white", flex: 1 }}>
                        {/* <ContactForm></ContactForm> */}
                    </View>
                </View>
            </View>
        </SafeAreaView>
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

export default CVmain;