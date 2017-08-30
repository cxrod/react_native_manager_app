import React from 'react';
import { View, Text, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, onAccept, onDecline, visible }) => {

    const { containerStyle, textStyle, cardSectionStyle } = styles;

    return (
        <Modal
            transparent
            visible={visible}
            animationType="fade"
            onRequestClose={() => console.log('Modal has been closed.')}
        >
            <View style={containerStyle} >
                <CardSection style={cardSectionStyle} >
                    <Text style={textStyle} >{children}</Text>
                </CardSection>
                <CardSection>
                    <Button 
                        onPress={onAccept}
                        buttonText="Yes" 
                    />
                    <Button 
                        onPress={onDecline}
                        buttonText="No" 
                    />
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
};

export { Confirm };
