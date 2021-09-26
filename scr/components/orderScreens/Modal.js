import React from 'react'
import { View, Text } from 'react-native'

export default function Modal() {
    return (
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

                </View>
            </View>
        </Modal>
    )
}
