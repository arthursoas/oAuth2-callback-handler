import React, { Component } from 'react';
import logo from '../assets/images/loading.svg';

export default class Loading extends Component {
    render() {
        return (
            <div>
                <img
                    src={logo}
                    alt="loading"
                    height={this.props.iconHeight || 50}
                />
            </div>
        )
    }
}