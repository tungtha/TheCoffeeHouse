import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function Order() {
    return (
        <ScrollView style={styles.container}>
            <View >
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 15 }}>Các cửa hàng khác </Text>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cb1acd4d02032668ea_trung_20son_201.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>112-114 Đường số 9A, Xã Bình Hưng, Bình Chánh, Hồ Chí Minh, Việt Nam </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cb1acd4d02032668eb_nguyen_20anh_20thu_201.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>93/5 Nguyễn Ảnh Thủ, Hóc Môn, Hồ Chí Minh,Việt Nam </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/foody-upload-api-foody-album31960519_20805436755-180512135654_673976.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>159 Phạm Ngũ Lão, Quận 1, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cb1acd4d02032668ee_5b21f8cb1acd4d02032668ee_nguyen_20thai_20binh_201_20.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>141 Nguyễn Thái Bình, Quận 1, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d02032668f0_26952567_2022727648001251_7720224969964840044_o.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>47-49 Lê Thị Riêng, Quận 1, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5d147678696fb3596835615b_tran_quang_khai.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>180 Trần Quang Khải, Quận 1, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d02032668f1_Ba_20thang_20hai_20sg_20.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>572 Ba Tháng Hai, Quận 10, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d02032668f3_svh_201.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>798 Sư Vạn Hạnh, Quận 10, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b6d0c17fbc6860a6f541dac_5b6d0c17fbc6860a6f541dac_CT_20no_CC_82_CC_81i_20da_CC_80i_20.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>175B Cao Thắng, Quận 10, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5cda29e8696fb37239351ca7_dong_20nai_20.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>25A Đồng Nai, Quận 10, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d02032668f8_Screen_20Shot_202020-05-16_20at_2022.55.13.png'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>114-116 Nguyễn Ảnh Thủ, Quận 12, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d02032668f9_5b21f8cc1acd4d02032668f9_xuan_20thuy_201_20.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>57 Xuân Thủy, Quận 2, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b3b04d5fbc68621f3385253_5b3b04d5fbc68621f3385253_nguyen_20duy_20trinh.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>670 Nguyễn Duy Trinh, Quận 2, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b693704fbc68618ad24f8a8_cantabil_20.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>1 Song Hành, Quận 2, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5d147678696fb3596835615c_new_20city_20.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>17 Mai Chí Thọ, Quận 2, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5f742f48da71401dfa739b64_5f742f48da71401dfa739b64_Sun_20avenue_201_20.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>114-116 Đường 51, Quận 2,Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d02032668fe_5b21f8cc1acd4d02032668fe_Screen2020-05-16at22.21.18.png'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>223 Võ Văn Tần, Quận 3, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d02032668ff_5b21f8cc1acd4d02032668ff_cao_20thang_201_20.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>86 Cao Thắng, Quận 3, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5bf373e4fbc686250c465109_signature_20.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>19B Phạm Ngọc Thạch, Quận 3, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d0203266901_D41_201.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>35-37 Đuờng 41, Quận 4, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5de0d7c576c4c404b752d032_Screen_20Shot_202020-05-16_20at_2022.35.22.png'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>682 Trần Hưng Đạo, Quận 5, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d0203266902_hau_20giang_20PL_201.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>1056 Hậu Giang, Quận 6, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d0203266903_Screen_Shot_2020-05-16_at_22.37.19.png'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>111-113 Bình Phú, Quận 6, Hồ Chí Minh,Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d0203266905_huynh_20tan_20phat_201.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>400A Huỳnh Tấn Phát, Quận 7, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d0203266906_5b21f8cc1acd4d0203266906_NTT1_202.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>313 Nguyễn Thị Thập, Quận 7, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/6006813852da7a45cd2c5d62_Sky_20Garden.png'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>Lô R1-72, R4-71 Khu R20, Quận 7, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5d9c45a445de4716d451b4b2_VNG_203_20.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>VNG Campus, Quận 7, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b939f8efbc6861b956b2af2_do_20xuan_20hop_201.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>359 Đỗ Xuân Hợp, Quận 9, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d0203266907_D22.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>19 - 21 Đường 22, Quận Bình Tân, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d0203266910_thong_20nhat.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>355 Thống Nhất, Quận Gò Vấp, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d0203266903_Screen_Shot_2020-05-16_at_22.37.19.png'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>371 Nguyễn Kiệm, Quận Gò Vấp, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d0203266915_nguyen_20van_20luong_20.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>258 Nguyễn Văn Lượng, Quận Gò Vấp, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d020326691c_5b21f8cc1acd4d020326691c_hoa_20hong_202.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>43 Hoa Hồng, Quận Phú Nhuận, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d020326691d_5b21f8cc1acd4d020326691d_phan_20dang_20luu.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>141 Phan Đăng Lưu, Quận Phú Nhuận, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d0203266935_5b21f8cc1acd4d0203266935_dang_20van_20bi_201.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>201 Đặng Văn Bi, Tp Thủ Đức, Hồ Chí Minh, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cb1acd4d02032668d8_5b21f8cb1acd4d02032668d8_kim_20ma.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>259 Kim Mã, Ba Đình, Hà Nội, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5cfdd798696fb361044bf24a_5cfdd798696fb361044bf24a_pham_20van_20dong_20.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>641 Phạm Văn Đồng, Bắc Từ Liêm, Hà Nội, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cb1acd4d02032668da_5b21f8cb1acd4d02032668da_trung_20hoa.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>số 3 Trung Hòa, Cầu Giấy, Hà Nội, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cb1acd4d02032668dc_hoang_20dao_20thuy.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>UDIC Complex - N04 Hoàng Đạo Thúy, Cầu Giấy, Hà Nội, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cb1acd4d02032668e0_5b21f8cb1acd4d02032668e0_ho_20tung_20mau.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>2 Hồ Tùng Mậu, Cầu Giấy, Hà Nội, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b693704fbc68618ad24f8a6_5b693704fbc68618ad24f8a6_discovery.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>Discovery Complex 302 Cầu Giấy, Cầu Giấy, Hà Nội, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cb1acd4d02032668e1_hoang_20cau.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>68A Hoàng Cầu Mới, Đống Đa, Hà Nội, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b3b04d5fbc68621f3385252_thai_20ha.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>1 Thái Hà, Đống Đa, Hà Nội, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/foody-upload-api-foody-album31960519_20805436755-180512135654_673976_623678.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>103 Vạn Phúc, Hà Đông, Hà Nội, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b91e0e5fbc68604c565a9b6_nguyen_20khuyen.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>38 Nguyễn Khuyến, Hà Đông, Hà Nội, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cb1acd4d02032668e3_times.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>458 Minh Khai, Hai Bà Trưng, Hà Nội, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cb1acd4d02032668e5_tran_20dai_20nghia.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>159 Trần Đại Nghĩa, Hai Bà Trưng, Hà Nội, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5d2ea9ec696fb35b294ae43b_5d2ea9ec696fb35b294ae43b_ham_20nghi.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>B3-01, Gardenia Hàm Nghi, Nam Từ Liêm, Hà Nội, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5f640bcda69ed46dae2c97e4_Florence_201.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>Tầng 1, tòa nhà Florence, số 28 Trần Hữu Dực, Nam Từ Liêm, Hà Nội, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5bda6dcffbc68614df6e1995_xuan_20la.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>10 Xuân La, Tây Hồ, Hà Nội, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5fcee274abc032653714b6e5_V_C5_A9_20T_C3_B4ng_20Phan_201.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>349 Vũ Tông Phan, Thanh Xuân, Hà Nội, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b46b2d6fbc686139f4d1bf5_nguyen_20huu_20tho.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>76 Nguyễn Hữu Thọ, Thành phố Bà Rịa, Bà Rịa Vũng Tàu, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b693704fbc68618ad24f8ac_hikari.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>Hikari Bình Dương, Thành phố Thủ Dầu Một, Bình Dương, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b693704fbc68618ad24f8a7_hoa_20binh_20ct.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>8 Hòa Bình, Ninh Kiều, Cần Thơ, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5c299552fbc6862bb315fec7.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>170 Nguyễn Văn Cừ, Ninh Kiều, Cần Thơ, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cc1acd4d0203266920_TCHdan_20Tran_20hung_20dao.jpeg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>461 Trần Hưng Đạo, Quận Sơn Trà, Đà Nẵng, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/foody-the-coffee-house-777429-680-636723582952676184_928879.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>45 Phan Chu Trinh, Buôn Ma Thuột, Đắk Lắk, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/6077e0b52fb98b269f2855b2_tqk-hp.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>17 Trần Quang Khải, Hồng Bàng, Hải Phòng, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5e202d4fd546314fa82cb115_Screen_Shot_2020-05-17_at_00.05.07.png'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>Số 1 Lê Hồng Phong, Ngô Quyền, Hải Phòng, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/photo_2021-06-17_10-35-06_643296.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>382-384 Lạch Tray, Ngô Quyền, Hải Phòng, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5fc9953bb329b245b25709e5_AM_20Le_20Chan_20hai_20phong_201_20.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>TTTM Aeonmall, Đường Hồ Sen – Cầu Rào 2, Quận Lê Chân, Hải Phòng, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5d1973b0696fb3411e5ad777_Screen_20Shot_202020-05-17_20at_2000.12.34.png'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>44 Trần Phú, Thành phố Nha Trang, Khánh Hòa, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5fe922d860fd1541d13e5ce5_Big_20c_20Go_20Nha_20TRang_20.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>Lô số 4, Đường 19/5, Thành phố Nha Trang, Khánh Hòa, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5fee7f74baebd8239f01d0e2_vinwonders_201_20.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>Gian hàng số S-12A&14A, VinWonders Phú Quốc, Phú Quốc, Kiên Giang, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b86089ffbc6867f143453b5_truong_20thi.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>02 Trường Thi, Thành Phố Vinh, Nghệ An, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5bc6aa23fbc686224a6726fe_nguyen_20van_20cu_20nghe_20an.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>87A Nguyễn Văn Cừ, Thành Phố Vinh, Nghệ An, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5b693704fbc68618ad24f8ab_le_20loi.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>27 Lê Lợi, Thành phố Thanh Hóa, Thanh Hóa, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/60ad9bf29b221249fa207253_thanhhoa.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>124, đường Hạc Thành, Thành phố Thanh Hóa, Thanh Hóa, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://minio.thecoffeehouse.com/image/admin/store/5bc6aa23fbc686224a6726f7_ap_20bac.jpg'
                            }} />
                        <View style={{ flex: 1, marginLeft: 25 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: '#777777' }}>THE COFFEE HOUSE</Text>
                            <Text style={{ color: '#000000', fontSize: 18 }}>237-240 Ấp Bắc, Mỹ Tho, Tiền Giang, Việt Nam</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 15,
    },
    Images: {
        height: 100, width: 100, borderTopLeftRadius: 5, borderTopRightRadius: 5, borderBottomLeftRadius: 5, borderBottomRightRadius: 10,
        marginTop: 15, marginLeft: 15

    },
    items: {
        height: 130, width: 360, borderWidth: 0.3, flexDirection: 'row', backgroundColor: 'white', flex: 1,
        borderTopLeftRadius: 5, borderTopRightRadius: 5, borderBottomLeftRadius: 5, borderBottomRightRadius: 5,

    },
})