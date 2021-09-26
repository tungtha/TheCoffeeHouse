import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'

import CartView from '../components/CartView'
import { useDispatch, useSelector } from "react-redux";

export default function Special() {

    const dispatch = useDispatch();
    const productList = useSelector((store) => store.cartReducer.products);

    console.log('productList', productList)

    const onChangeQuantity = (type, item) => () => {
        if (type === 'reduce' && item.quantity === 1) {
            dispatch({ type: 'REMOVE_ITEM', data: item })
        } else {
            dispatch({ type: 'CHANGE_QUANTITY', data: item, changeQuantityType: type })
        }

    }


    const onRemoveItem = (item) => () => {
        dispatch({ type: 'REMOVE_ITEM', data: item })
    }
    const onRemoveAll = () => {
        dispatch({ type: 'REMOVE_ALL' })
    }


    const renderItem = ({ item }) => {
        return (
            <CartView style={{ flex: 1, margin: 5, flexDirection: 'row' }}>
                <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius: 10, }} />
                <View style={{ marginVertical: 10, width: '100%', flex: 1, marginLeft: 15 }}>
                    <Text style={{ fontSize: 18, marginRight: 10 }} ellipsizeMode='tail' numberOfLines={1}>{item.product_name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, width: '100%' }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 30 }}>
                            <Text style={{ fontSize: 18, marginRight: 10, fontWeight: 'bold' }}>{item.price}đ</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                    <TouchableOpacity onPress={onChangeQuantity('reduce', item)}>
                                        <Ionicons name="md-remove" size={25} color={'black'} />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 20, marginHorizontal: 10 }}>{item?.quantity}</Text>
                                    <TouchableOpacity onPress={onChangeQuantity('increase', item)}>
                                        <Ionicons name="add-outline" size={25} color={'black'} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity onPress={onRemoveItem(item)} style={{ marginTop: 20 }}>
                            <Ionicons name="ios-trash-outline" size={30} color={'black'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </CartView>
        );
    };


    return (
        <ScrollView>
            <FlatList
                style={{ backgroundColor: '	#FFFFFF' }}
                data={productList}
                renderItem={renderItem}
                keyExtractor={(item) => item._id?.toString()}
            // extraData={ }
            />
            ListFooterComponent={
                <View>
                    {
                        productList?.length ?
                            <TouchableOpacity style={{ marginTop: 10, marginLeft: 10, marginBottom: 50 }} onPress={onRemoveAll}>
                                <Text style={{ color: 'white' }}>
                                    Remove all
                                </Text>
                            </TouchableOpacity> : null
                    }

                    {!productList?.length && (
                        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <Text>Nothing here!</Text>
                        </View>)
                    }

                </ScrollView>
    )
}

            const styles = StyleSheet.create({
                wishlistIcon: {
                marginRight: 5,
            position: 'absolute',
            top: 5,
            right: 5,
            zIndex: 1
    },

});