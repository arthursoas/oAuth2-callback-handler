export class CallbackService {
    getParamsFromUrl(url) {
        let paramsString = url.split(/#|\?/);
        paramsString = paramsString.filter(s => s !== '');
        let paramsArray = [];

        if (paramsString.length > 1) {
            paramsArray = paramsString[1].split('&');
        }

        return paramsArray;
    }

    reduceParams(params) {
        return params.reduce((paramsObject, param) => {
            const key = param.split('=')[0];
            const value = param.split('=')[1];
            paramsObject[key] = value;
            return paramsObject;
        }, {});
    }

    notifyOpener(paramsObject) {
        setTimeout(() => {
            window.opener.postMessage({...paramsObject}, '*');
        }, 100);
    }
}