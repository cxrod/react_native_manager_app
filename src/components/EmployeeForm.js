import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <View>
                <CardSection>
                    <Input 
                        value={this.props.name}
                        label="Name"
                        placeholder="Jane"
                        onChangeText={
                            text => this.props.employeeUpdate({ prop: 'name', value: text })
                            }
                    />
                </CardSection>
            
                <CardSection>
                    <Input 
                        value={this.props.phone}
                        label="Phone"
                        placeholder="555-555-5555"
                        onChangeText={
                            text => this.props.employeeUpdate({ prop: 'phone', value: text })
                            }
                    />
                </CardSection>
            
                <CardSection style={{ flexDirection: 'column' }} >
                    <Text style={styles.pickerTextStyle} >Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
