import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default class IconCustom extends React.Component {
  render() {
    const { completed, icon, size, color } = this.props;
    const iconName = completed
      ? 'md-checkmark-circle'
      : 'md-information-circle';
    const iconColor = completed ? 'green' : 'red';
    return (
      <Ionicons
        name={icon ? icon : iconName}
        size={size ? size : 24}
        color={color ? color : iconColor}
      />
    );
  }
}
