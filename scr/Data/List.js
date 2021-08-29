import React, { useState } from 'react'
import { View, Text, FlatList, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'

const DATA1 = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "d1First Item"
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "d1Second Item"
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "d1Third Item"
    }
];
const DATA2 = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "d2First Item"
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "d2Second Item"
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "d2Third Item"
    }
];

export default function List() {
    const [dataState, setDataState] = useState([]);
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return (
        <View>
            <Text>Shop</Text>
            <ScrollView horizontal>
                <TouchableOpacity
                    style={{ borderWidth: 1, borderColor: "red", marginRight: 10 }}
                    onPress={() => setDataState(DATA1)}
                >
                    <Text>Uu dai khac biet</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ borderWidth: 1, borderColor: "green" }}
                    onPress={() => setDataState(DATA2)}
                >
                    <Text>cap nha tu nha</Text>
                </TouchableOpacity>
            </ScrollView>
            <FlatList
                data={dataState}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    title: {
        fontSize: 32
    }
});