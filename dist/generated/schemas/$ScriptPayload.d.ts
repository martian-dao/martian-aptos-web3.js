export declare const $ScriptPayload: {
    readonly description: "Payload which runs a script that can run multiple functions";
    readonly properties: {
        readonly code: {
            readonly type: "MoveScriptBytecode";
            readonly isRequired: true;
        };
        readonly type_arguments: {
            readonly type: "array";
            readonly contains: {
                readonly type: "MoveType";
            };
            readonly isRequired: true;
        };
        readonly arguments: {
            readonly type: "array";
            readonly contains: {
                readonly properties: {};
            };
            readonly isRequired: true;
        };
    };
};
//# sourceMappingURL=$ScriptPayload.d.ts.map