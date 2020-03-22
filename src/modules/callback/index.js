import React, { Component } from 'react';
import Loading from '../../components/loading';
import { CallbackService } from '../../services/callbackService'

export default class Callback extends Component {
    constructor() {
        super();

        this.callbackService = new CallbackService();

        this.state = {
            isPopup: true,
            status: 'Starting... Please await'
        };
    }

    componentDidMount() {
        if (!window.opener) {
            this.setState({...this.state, isPopup: false});
            return;
        }

        this.setState({...this.state,  status: 'Getting data... Just a second'});
        const params = this.callbackService.getParamsFromUrl(window.location.href);

        this.setState({...this.state,  status: 'Treating data... Almost done'});
        const paramsObject = this.callbackService.reduceParams(params);

        if (Object.keys(paramsObject).length === 0) {
            paramsObject.handlerError = 'No params found.';
        }

        this.setState({...this.state,  status: 'Notifying main application...'});
        this.callbackService.notifyOpener(paramsObject);
    }

    render() {
        return (
            <div className="base">
                {this.state.isPopup &&
                    <div className="base">
                        <Loading iconHeight="40"/>
                        <p className="cl-main fs-20 warning-message break-line">{this.state.status}</p>
                    </div>
                }
                {!this.state.isPopup &&
                    <div className="base">
                        <span className="fs-40 mb-0" role="img" aria-label="stop hand">✋</span>
                        <p className="cl-error fs-20 warning-message break-line">Ooops, this page must be opened on a popup</p>
                    </div>
                }
            </div>
        );
    }
}
