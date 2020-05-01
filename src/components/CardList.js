import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList } from 'react-native';

import colors from '../assets/var/colors'

const CardList = ({ service }) => {
    const [services, setServices] = useState({
        body: {
            id: 1,
            title: 'ola',
            desc: 'oi'
        }
    })
    return (
        <>
            <View style={styles.Container}>
                <Text>Você Viu:</Text>
                <FlatList
                    style={styles.list}
                    data={services}
                    keyExtractor={item => item.body.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <>
                            <View style={styles.ContainerImage} >
                            </View>
                            <Text style={styles.TextTitle}>{services.body.title}</Text>
                            <Text style={styles.TextDesc}>{services.body.desc}</Text>
                        </>
                    )}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    Container: {
        maxHeight: 350,
        backgroundColor: '#121212'
    },
    list: {

    },
    ContainerImage: {
        height: '60%',
        backgroundColor: colors.secondary
    },
    TextTitle: {
        textAlign: "left",
        color: colors.purpleLight,
        fontSize: 20,
        fontWeight: '200',
        marginTop: 20,
        marginBottom: 10
    },
    TextDesc: {
        fontSize: 16,
        color: colors.purpleDark
    }
})

export default CardList