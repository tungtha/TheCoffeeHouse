import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList, Dimensions, SafeAreaView } from 'react-native';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { getProductList } from '../services/Api'
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window');
export default function Order({ route, navigation }) {
    const dispatch = useDispatch();
    // const productList = useSelector((store) => store.cartReducer.products);
    const [product, setProduct] = useState([])
    const [isVisible, setIsVisible] = useState(false)
    const onCloseModal = () => setIsVisible(false)
    const productList = useSelector((store) => store.cartReducer.products);

    useEffect(() => {
        const callGetProductList = async () => {
            try {
                const response = await getProductList();
                console.log('rs', response.data.data); // data tu api tra ve
                setProduct(response.data.data)

            } catch (error) {
                console.error(error);
            }
        }

        callGetProductList()
    }, [])
    const onAddToCart = (item) => () => {
        dispatch({ type: 'ADD_CART', data: { ...item, quantity: 1 } })
        // dispatch({ type: 'REMOVE_CART_TO_MODAL', data: item })
    }
    // // const onRemoveToModal = (item) => () => {
    // //     dispatch({ type: 'REMOVE_CART_TO_MODAL', data: item })
    // // }
    // const onAddToCart = (item) => () => {
    //     dispatch({ type: 'ADD_DETAIL', data: item })
    // }


    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.items} >
            <View style={{ flex: 1, flexDirection: 'column', margin: 15 }}>
                <Text style={{ fontWeight: 'bold' }} ellipsizeMode='tail' numberOfLines={1}>{item.product_name}</Text>
                <Text ellipsizeMode='tail' numberOfLines={2} style={{ marginTop: 5 }} >{item.description}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginTop: 20 }}>{item.price}đ </Text>
                    <TouchableOpacity style={{ margin: 18 }} onPress={onAddToCart(item)} >
                        <Icon name="plus-circle" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Image
                    style={styles.Images}
                    source={{ uri: item.image }}
                />
            </View>
        </TouchableOpacity>

    );
    return (
        <SafeAreaView style={{ height: height }}>
            <View style={styles.container} >
                <FlatList
                    data={product}
                    renderItem={renderItem}
                    keyExtractor={item => item._id?.toString()}
                    style={{ margintop: 25 }}
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
        width: width,
    },
    items: {
        height: 140, width: 360, borderWidth: 0.3, flexDirection: 'row', backgroundColor: 'white', flex: 1, margin: 5,
        borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10,

    },
    Images: {
        height: 110, width: 120, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
        margin: 15

    },
    content: {
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,
        height: height - 80
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
    closeBtn: {
        position: 'absolute',
        top: 10,
        right: 10
    },
})