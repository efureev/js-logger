import { ConsoleDriver } from "./index";
import Message from "../Message";
declare class ConsoleBufferDriver extends ConsoleDriver {
    buffer: string[];
    protected perform(msg: Message, type: string): void;
    clearBuffer(): void;
}
export default ConsoleBufferDriver;
