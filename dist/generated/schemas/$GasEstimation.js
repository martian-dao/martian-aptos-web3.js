"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$GasEstimation = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$GasEstimation = {
    description: `Struct holding the outputs of the estimate gas API`,
    properties: {
        deprioritized_gas_estimate: {
            type: 'number',
            description: `The deprioritized estimate for the gas unit price`,
            format: 'uint64',
        },
        gas_estimate: {
            type: 'number',
            description: `The current estimate for the gas unit price`,
            isRequired: true,
            format: 'uint64',
        },
        prioritized_gas_estimate: {
            type: 'number',
            description: `The prioritized estimate for the gas unit price`,
            format: 'uint64',
        },
    },
};
//# sourceMappingURL=$GasEstimation.js.map