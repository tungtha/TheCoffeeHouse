import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
export default function Other() {
    return (
        <ScrollView style={{ flexDirection: 'column', flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={{ marginTop: 10 }}>
                <Text style={{ margin: 15, fontSize: 20, fontWeight: 'bold' }}>Tiện ích</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.Item}>
                        <View style={{ margin: 15 }}>
                            <Icon name="newspaper-outline" size={30} color="#FF7F24" />
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Lịch sử đơn hàng</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Item}>
                        <View style={{ margin: 15 }}>
                            <Icon name="documents-outline" size={30} color="#D15FEE" />
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Điều khoản</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.iteam}>
                    <View style={{ margin: 10 }}>
                        <Icon name="musical-notes-outline" size={30} color="#00FF7F" />
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Nhạc đang phát</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'column', marginTop: 10 }}>
                <Text style={{ margin: 15, fontSize: 20, fontWeight: 'bold' }}>Hỗ trợ</Text>
                <View style={styles.iteam1}>
                    <TouchableOpacity style={{ margin: 15, flexDirection: 'row' }}>
                        <Icon name="star-outline" size={20} color="black" />
                        <Text style={{ fontSize: 16, marginLeft: 15, marginBottom: 15 }}>Đánh giá đơn hàng</Text>
                        <View style={{ marginLeft: 149 }}>
                            <Icon name="chevron-forward-outline" size={15} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 15 }}>
                        <Icon name="chatbox-outline" size={20} color="black" />
                        <Text style={{ fontSize: 16, marginLeft: 15 }}>Liên hệ và góp ý</Text>
                        <View style={{ marginLeft: 168 }}>
                            <Icon name="chevron-forward-outline" size={15} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'column', marginTop: 10 }}>
                <Text style={{ margin: 15, fontSize: 20, fontWeight: 'bold' }}>Hỗ trợ</Text>
                <View style={styles.iteam2}>
                    <TouchableOpacity style={{ margin: 15, flexDirection: 'row' }}>
                        <Icon name="person-outline" size={20} color="black" />
                        <Text style={{ fontSize: 16, marginLeft: 15, marginBottom: 15 }}>Thông tin cá nhân</Text>
                        <View style={{ marginLeft: 155 }}>
                            <Icon name="chevron-forward-outline" size={15} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 15 }}>
                        <Icon name="location-outline" size={20} color="black" />
                        <Text style={{ fontSize: 16, marginLeft: 15, marginBottom: 15 }}>Địa chỉ đã lưu</Text>
                        <View style={{ marginLeft: 185 }}>
                            <Icon name="chevron-forward-outline" size={15} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 15, flexDirection: 'row' }}>
                        <Icon name="star-outline" size={20} color="black" />
                        <Text style={{ fontSize: 16, marginLeft: 15, marginBottom: 15 }}>Cài đặt</Text>
                        <View style={{ marginLeft: 232 }}>
                            <Icon name="chevron-forward-outline" size={15} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 15 }}>
                        <Icon name="log-out-outline" size={20} color="black" />
                        <Text style={{ fontSize: 16, marginLeft: 15 }}>Đăng xuất</Text>
                        <View style={{ marginLeft: 211 }}>
                            <Icon name="chevron-forward-outline" size={15} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView >



    )
}
const styles = StyleSheet.create({
    Item: {
        marginLeft: 10,
        height: 80, width: 180, borderWidth: 0.3, flexDirection: 'column', backgroundColor: 'white',
        borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10

    },
    iteam: {
        marginLeft: 10, marginTop: 10,
        height: 80, width: 370, borderWidth: 0.3, flexDirection: 'column', backgroundColor: 'white',
        borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10
    },
    iteam1: {
        marginLeft: 10, marginTop: 10,
        height: 100, width: 370, borderWidth: 0.3, flexDirection: 'column', backgroundColor: 'white',
        borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10
    },
    iteam2: {
        marginLeft: 10, marginTop: 10,
        height: 200, width: 370, borderWidth: 0.3, flexDirection: 'column', backgroundColor: 'white',
        borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10
    }
})