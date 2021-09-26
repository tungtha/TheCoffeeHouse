import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList, SafeAreaView, Dimensions } from 'react-native';
import { getAllStore } from '../services/Api';


const { height, width } = Dimensions.get('window');
export default function shop() {
    const [stores, getStores] = useState([])

    useEffect(() => {
        const callGetStore = async () => {
            try {
                const response = await getAllStore();
                console.log('rs', response.data); // data tu api tra ve
                getStores(response.data)

            } catch (error) {
                console.error(error);
            }
        }

        callGetStore()
    }, [])

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.items} >
            <Image style={styles.Images}
                source={{ uri: item.image_1 }} />
            <View style={{ flex: 1, marginLeft: 25 }}>
                <Text style={{ fontSize: 12, marginTop: 15, color: '#555555' }}>THE COFFEE HOUSE</Text>
                <Text style={{ color: '#000000', fontSize: 20, marginTop: 10 }} ellipsizeMode='tail' numberOfLines={2}> {item.address.full_address} </Text>
                <Text style={{ marginTop: 5, color: '#666666' }}>Chưa xác định</Text>
            </View>
        </TouchableOpacity>

    );
    return (
        <SafeAreaView style={{ height: height }}>
            <View style={styles.container}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Các cửa hàng khác: </Text>
                <FlatList
                    data={stores}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}

                />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 15,
        height: height,
        width: width


    },
    Images: {
        height: 110, width: 120, borderRadius: 10,
        marginTop: 15, marginLeft: 15, justifyContent: 'center'

    },
    items: {
        height: 140, width: 360, borderWidth: 0.3, flexDirection: 'row', backgroundColor: 'white', flex: 1,
        borderRadius: 10, marginTop: 10

    },
})