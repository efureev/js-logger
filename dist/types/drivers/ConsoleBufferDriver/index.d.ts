import ConsoleDriver from '../ConsoleDriver';
import Message from '../../Message';
export interface ConsoleBufferConfig {
    print?: boolean;
    printFragmented?: boolean;
    debugFn?: Function;
}
export default class ConsoleBuffer extends ConsoleDriver {
    private readonly print;
    private readonly printFragmented;
    private readonly debugFn;
    constructor({ print, printFragmented, debugFn }?: ConsoleBufferConfig);
    buffer: string[];
    protected perform(msg: Message, type: string): void;
    private performFragmented;
    clearBuffer(): void;
}
//# sourceMappingURL=index.d.ts.map