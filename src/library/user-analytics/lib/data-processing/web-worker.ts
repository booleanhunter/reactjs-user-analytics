// @ts-ignore
import worker from 'workerize-loader!../data-processing/compression'; // eslint-disable-line import/no-webpack-loader-syntax

export function init() {
    const instance = worker();
    return instance;
}
