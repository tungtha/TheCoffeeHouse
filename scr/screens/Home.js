import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Dimensions, FlatList, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import { DATA1, DATA2, DATA3 } from '../components/homeScreens/Data';

const { height, width } = Dimensions.get('window');
const renderItem = ({ item }) => {
    return (
        <View style={{ marginBottom: 10, marginRight: 15 }}>
            <View>
                <Image source={{ uri: item.img }} style={styles.imgItem} />
                <Text style={styles.textItem}>{item.title}</Text>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Icon name='calendar-outline' style={{ fontSize: 16, marginRight: 10, marginLeft: 10 }} />
                    <Text>{item.skedule}</Text>
                </View>
            </View>
        </View>
    )
}
export default function Home({ navigation }) {


    const [data, setData] = useState(DATA1)
    return (

        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={{
                marginTop: 30, margin: 20,
                flexDirection: 'row', borderWidth: 0.2, height: 80, width: '90%',
                borderTopLeftRadius: 5, borderTopRightRadius: 5, borderBottomLeftRadius: 5, borderBottomRightRadius: 5
            }}>
                <TouchableOpacity style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRightWidth: 0.3 }}>
                    <Image
                        style={{ height: 40, width: 100, }}
                        source={{
                            uri: 'https://cdn.ntlogistics.vn/images/NTX/new_images/danh-gia-shipper-giao-hang-nhanh-qua-viec-dam-bao-an-toan-hang-hoa.jpg'
                        }} />
                    <Text style={{ fontSize: 15, marginTop: 5 }}>Giao hàng</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Order')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                    <Image
                        style={{ height: 40, width: 100 }}
                        source={{
                            uri: 'https://cdn2.iconfinder.com/data/icons/drinks-60/100/coffee-sharing-3-drinks-coffee-shop-cafe-cafeteria-takeaway-paper-cup-hot-serving-give-hand-512.png'
                        }} />
                    <Text style={{ fontSize: 15, marginTop: 5 }}>Mang đi</Text>
                </TouchableOpacity>
            </View>
            <Swiper style={styles.wrap} height={250} autoplay >
                <View style={{ alignItems: 'center' }}>
                    <Image
                        style={styles.wrapper}
                        source={{
                            uri: 'http://file.hstatic.net/1000075078/article/800x400.jpg'
                        }} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        style={styles.wrapper}
                        source={{
                            uri: 'https://cdn-www.vinid.net/2020/03/20200316_AppVinID_BannerWeb_TCH_30k.jpg'
                        }} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        style={styles.wrapper}
                        source={{
                            uri: 'https://file.hstatic.net/1000335596/file/web-02_6c342cba4a31418bb53a6a397378cb20.jpg'
                        }} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        style={styles.wrapper}
                        source={{
                            uri: 'https://feed.thecoffeehouse.com/content/images/2020/08/A--n-T8noti.jpg'
                        }} />
                </View>
            </Swiper>
            <View style={{
                marginTop: 30, margin: 20,
                flexDirection: 'row', borderWidth: 0.2, height: 130, width: '90%',
                borderTopLeftRadius: 5, borderTopRightRadius: 5, borderBottomLeftRadius: 5, borderBottomRightRadius: 5
            }}>
                <View>
                    <Text style={{ marginTop: 10, marginLeft: 20, fontSize: 20, fontWeight: 'bold' }}>Đặt gần đây: </Text>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }} >
                        <Image
                            style={{ height: 70, width: 80, borderTopLeftRadius: 5, borderTopRightRadius: 5, borderBottomLeftRadius: 5, borderBottomRightRadius: 5, marginLeft: 20 }}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/bac-siu_13856adaa2354499aa61251b8b1e9fd6_large.jpg'
                            }} />
                        <Text style={{ margin: 30, fontSize: 17, fontWeight: 'bold' }}>Bạc xỉu</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{
                    height: 23, width: 70, borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20,
                    backgroundColor: '#FF7F24', justifyContent: 'center', alignItems: 'center', marginTop: 80, marginLeft: 30
                }}>
                    <Text style={{ fontSize: 14, color: 'white', justifyContent: 'center', alignItems: 'center' }}>32.000</Text>


                </TouchableOpacity>

            </View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>Khám phá thêm <Icon name="flag-outline" size={20} color="#FF7F24" /> :</Text>
            <View style={styles.bodyMore}>
                <TouchableOpacity onPress={() => setData(DATA1)}>
                    <Text style={{ fontWeight: 'bold', padding: 10, fontSize: 16 }}>Ưu đãi đặc biệt</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setData(DATA2)}>
                    <Text style={{ fontWeight: 'bold', padding: 10, fontSize: 16 }}>Cập nhật từ Nhà</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setData(DATA3)}>
                    <Text style={{ fontWeight: 'bold', padding: 10, fontSize: 16 }}>#CoffeeLovers</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                numColumns={2}
            />




        </ScrollView >

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        height: height,
        width: width
    },
    wrap: {},
    wrapper: {
        height: height * 0.3,
        width: width * 0.9,
        borderRadius: 15


    },
    bodyMore: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,

    },
    imgItem: {
        width: width / 2 - 20,
        height: height / 2 - 150,
        borderRadius: 10,
        marginLeft: 10
    },
    textItem: {
        width: width / 2 - 25,
        marginTop: 5,

        marginLeft: 10
    }


})
