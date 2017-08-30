import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {

    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onSavePress() {
        const { name, phone, shift, employee } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: employee.uid });
    }
    
    onTextPress() {
        const { phone, shift } = this.props;
        text(phone, `Your upcoming shift is on ${shift}`);
    }
    
    onToggleModal() {
        this.setState({
            showModal: !this.state.showModal
        });
    }
    
    fireEmployee() {
        this.onToggleModal();
        this.props.employeeDelete({ uid: this.props.employee.uid });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button 
                        onPress={this.onSavePress.bind(this)}
                        buttonText='Save Changes' 
                    />
                </CardSection>
                <CardSection>
                    <Button 
                        onPress={this.onTextPress.bind(this)}
                        buttonText='Text Schedule' 
                    />
                </CardSection>
                <CardSection>
                    <Button 
                        onPress={this.onToggleModal.bind(this)}
                        buttonText='Fire Employee' 
                    />
                </CardSection>

                <Confirm 
                    visible={this.state.showModal}
                    onAccept={this.fireEmployee.bind(this)}
                    onDecline={this.onToggleModal.bind(this)}
                >
                    Are you sure you want to fire this employee?
                </Confirm>

            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { 
    employeeUpdate, 
    employeeSave,
    employeeDelete 
})(EmployeeEdit);
