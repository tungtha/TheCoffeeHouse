import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function Order() {
    return (
        <ScrollView style={styles.container}>
            <View >
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cà Phê Gói- Cà Phê Uống Liền </Text>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Thùng Cà Phê 24 Lon</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>336.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/park24-__1__ba24a4d993364269b39031bf246a8be8_master.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Cà Phê Sữa Đá Hòa Tan</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>46.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_master.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Combo 6 Lon Cà Phê Sữa Đá</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>84.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_master.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>combo 6 Lon Cafe Sữa Đá</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>135.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/2-park6x2-_3a33eead1ae2453099dce993095722c8_master.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
            </View>

            <View >
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Cà Phê  </Text>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Bạc Sỉu </Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>32.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/bac-siu_13856adaa2354499aa61251b8b1e9fd6_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Cà Phê Đen </Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>32.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/cafe-den-da_18234c186f2f44f0a2d7ec1ce0e58158_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Cà Phê Sữa </Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>32.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/cafe-sua-da_9073dfe2143d428a91a370e79df77e49_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Cappuccino Nóng</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>50.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/capu-nong_a2a47a422fa94e8194e9d4c4badba9d3_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Caramel macchiato</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>50.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/caramel-macchiato-nong_667b90cf1e20493899e6727ae8c1b071_master.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Cold brew</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>45.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/cold-brew-classic_0627eece2e014fa1aeacb724e954011d_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>espresso</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>40.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/espresso-nong_4b32833e9a5f48768ea5d5d2a4df0303_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Latte Nóng</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>50.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/latte-nong_ffcd92de11f74937bce4197823246d07_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Mocha Nóng</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>50.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/mocha-nong_66ebb6f03a874a4391fc80ad69264ea5_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
            </View>

            <View >
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>TRÀ TRÁI CÂY - TRÀ SỮA </Text>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Trà Long Nhãn Hạt Chia</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>45.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/605da09f717e5d00114a3cd8_app_long_nhan_hat_chia_copy-min_15afd5872ab74b5fbb55414e965768bd_large.png'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Trà Hạt Sen</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>45.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/tra-hat-sen_66a4b5d319314b408021b3765e07a003_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Trà Đào Cam Sả</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>45.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/tra-dao-cam-sapng_58268b7877cd4209b8fc3fa1d4909511_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Trà Sữa Mắc Ca Trân Châu</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>50.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/ts-macca-tran-chau-trang_2116ef0b88fe448492f9994611f689ec_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Trà Phúc Bồn Tử</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>50.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/tra-pbt_d8ab6bfe329e488386e940bb9672e3dd_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Hồng Trà Latte macchiato</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>55.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/ht-latte-macchiato_fe7fa1571b974b48a5d750bd2e9e84eb_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Hồng Trà Sữa Trân Châu Trắng</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>55.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/hong-tra-sua_34930e4739c443d59a9319c746b47bae_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
            </View>

            <View >
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>ĐÁ XAY - MATCHA - CHOCOLATE  </Text>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Chanh Xả Đá XAY</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>59.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/chanh-sa-da-xay_fd95c70496714848a16a64c60b04ccf6_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Cà Phê Đá Xay</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>59.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/cafe-da-say_3de4ce716b534b1183736c2ce0cdbc25_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Phúc Bồn Tử Cam Đá Xay</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>59.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/cam-pbt-da-xay_06ca55fce8e84389ab9d707f4bd753a7_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Cookies Đá Xay</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>59.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/cookie-da-xay_43c2bc99f313405aa253b803dcd59030_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Matcha Đá Xay</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>59.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/matcha-da-xay_7f214144321f43ff81f78f67f05a0b22_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>SocoLa Đá</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>59.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/socola_c212fbafcdc94b50be1f217591122c81_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Yogurt Dưa Lưới(Specail)</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>59.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/yogurt-dua-luoi_30e104322e764a8aa4794e09c1ff74ab_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
            </View>

            <View >
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>BÁNH & SNACK </Text>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Bánh Bao 2 Trứng</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>25.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/bbao-2-trung_883feca9c9974d11ad062a83e246808f_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Bánh Mì Chà Bông Phô Mai</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}> 32.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/bmi-cha-bong-pho-mai_a1cedd81aab643afad75dc01242e42ce_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Bánh Mì Que</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>12.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/banh-mi-que_097b65c8e7c749398f1bdae4ae23d2ed_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Bông Lan Trứng Muối</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>29.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/bong-lan-trung-muoi_538c729b19ce49b5aabaaca242171a51_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Gà Xé Lá Chanh</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>25.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/ga-xe-la-chanh_2df170f8ae1f4d17b34481a79cec291a_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Heo Sấy Xông Khói</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/thit-heo-xong-khoi_98acac131de04338b1f918d309aebf0c_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Mít Sấy</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>20.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/mit-say_55b6e29da3154535925cc4e47fbb3f2d_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Mochi Kem Chocolate</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>19.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/mochi-choco_8165ee40058f4023a15783e3b7c014b6_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Mousse Tiramisu</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>32.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/tiramisu_9d4baf1c996640a8b4516a2a5be4d43e_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Mousse Passion Cheese</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>29.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/chanh-day_00a2d1c0dddf4f53916f1f8a58d446c4_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
            </View>

            <View >
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>BỘ SƯU TẬP VÀ QUÀ TẶNG </Text>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Bình Giữ Nhiệt Inox Con Thuyền</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>300.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/binh-inox-thuyen_6acaecf7cf634e39830483501008e53b_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Bình Giữ Nhiệt Inox Đen</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}> 300.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/binh-inox-den-500ml_dd50813c142543d189af5b56d0a2d70c_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Ly Inox Ống Hút Xanh Biển</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>280.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/binh-inox-ong-hut-xanh-bien_502d4985e2bc4dbebd2be144cdf6da06_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Bộ Ống Hút Inox</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>79.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/merchandise_hinh_len_webong_hut_inox_den_8e5748631dcd4cc9a7371c2c488f56b4_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Cốc Sứ The Coffee House Gơn Sóng</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>100.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/coc-su-tch-soc-ziczac_610f6906574242faa3e09a16589c4deb_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Ly Inox Ống Hút Đen Nhám</Text>
                            <Text style={{ marginTop: 20, color: '#000000' }}>280.000 đ</Text>
                        </View>
                        <Image
                            style={styles.Images}
                            source={{
                                uri: 'https://product.hstatic.net/1000075078/product/binh-inox-ong-hut-den-nham_95d5c9f1f18742a88bf8ab78fa477a05_large.jpg'
                            }} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 15,
    },
    items: {
        height: 110, width: 360, borderWidth: 0.3, flexDirection: 'row', backgroundColor: 'white', flex: 1,
        borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10

    },
    Images: {
        height: 90, width: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
        marginTop: 10, marginRight: 15

    },
})