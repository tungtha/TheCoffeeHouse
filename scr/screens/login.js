import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TextInput, Dimensions, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { Login } from '../services/Api'
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/FontAwesome';
import PhoneInput from 'react-native-phone-number-input';



const { height } = Dimensions.get('window');
const height_logo = height * 0.28;



export default function login({ navigation }) {
    const [phone, setPhone] = useState('978755105')
    const [code, setCode] = useState()
    const [isVisible, setIsVisible] = useState(false)

    console.log('height', height)

    const onChangePhone = (val) => setPhone(val)
    const onChangeCode = (val) => setCode(val)
    const onCloseModal = () => setIsVisible(false)

    const onVerifyPhone = async () => {
        try {
            const response = await Login({ phone: phone });
            console.log('rs', response.data.data); // data tu api tra ve
            setIsVisible(true) // // hien thi modal nhap code len
        } catch (error) {
            console.error(error.response);
        }

    }
    const onVerifyCode = async () => {
        try {
            const response = await Login({ phone: phone, otp: code });
            console.log('rs', response.data); // data tu api tra ve
            setIsVisible(false) // an modal nhap code di
            // save lai token
            navigation.navigate('Trang chủ')
        } catch (error) {
            console.error(error.response);
        }

    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://images.foody.vn/res/g78/776617/prof/s576x330/foody-upload-api-foody-mobile-the-coffee-house-190104191813.jpg'
                    }} />
            </View>
            <View style={styles.footer}>
                <Text style={{ fontSize: 18 }}>Chào mừng bạn đến với </Text>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 30 }}>THe CoFFee HoUse</Text>
                <PhoneInput
                    onChangeText={onChangePhone}
                    value={phone}
                    placeholder="Nhập số điện thoại"
                    defaultCode='VN' />
                <TouchableOpacity style={{
                    height: 50, backgroundColor: '#FF7F24',
                    width: 280,
                    margin: 10,
                    marginTop: 30,
                    padding: 10, borderRadius: 5,
                    justifyContent: 'center', alignItems: 'center'
                }} onPress={onVerifyPhone} >
                    <Text style={{ fontSize: 20 }}>Đăng nhập</Text>
                </TouchableOpacity>
                <Text style={{ color: '#A9A9A9', fontSize: 15, marginTop: 20 }}>----------------------------Hoặc----------------------------</Text>
                <TouchableOpacity style={{
                    height: 42, backgroundColor: '#1874CD',
                    width: 280,
                    margin: 10,
                    marginTop: 30,
                    padding: 10, borderRadius: 5,
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 15, color: 'white' }}> <Icon name="facebook-official" size={20} color="white" />   Tiếp tục bằng Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    height: 42, backgroundColor: 'white',
                    width: 280, borderWidth: 0.5,
                    margin: 10,
                    marginTop: 10,
                    padding: 10, borderRadius: 5,
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 15 }}> <Icon name="google-plus-official" size={20} color="black" />  Tiếp tục bằng Google</Text>
                </TouchableOpacity>
                <Text style={{ marginTop: 10 }}>Tiếng Việt</Text>
            </View>
            <Modal
                testID={'modal'}
                isVisible={isVisible}
                onSwipeComplete={onCloseModal}
                swipeDirection={['up', 'left', 'right', 'down']}
                style={{ justifyContent: 'flex-end', margin: 0 }}>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.closeBtn} onPress={onCloseModal}>
                        <Icon name="close" size={30} color="black" />
                    </TouchableOpacity>
                    <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Xác thực mã OTP</Text>
                        <Text style={{ fontSize: 17, marginTop: 10 }}>Một mã xác thực gồm 6 số đã được gửi đến số </Text>
                        <Text style={{ fontSize: 17 }}>điện thoại {phone}</Text>
                    </View>
                    <View style={{ marginTop: 80 }}>
                        <Text style={{ fontSize: 17 }}>Nhập mã để tiếp tục</Text>
                        <TextInput
                            style={{ height: 45, borderWidth: 1, borderRadius: 5, marginTop: 20, width: 200 }}
                            onChangeText={onChangeCode}
                            value={code}
                        />
                        <TouchableOpacity
                            onPress={onVerifyCode}
                            style={{ marginTop: 20, borderWidth: 1, borderRadius: 5, padding: 15, width: 200, backgroundColor: 'grey' }}>
                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>Send Code</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFA54F'

    },
    header: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'


    },
    footer: {
        flex: 7,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 50,
        paddingHorizontal: 30,
        alignItems: 'center',
    },
    logo: {
        height: height_logo,
        width: '100%',
    },
    content: {
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        height: height - 50
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