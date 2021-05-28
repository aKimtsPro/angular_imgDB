import { Byte } from "@angular/compiler/src/util";

export interface FileModel {
    name: string;
    type: string;
    bytes: Byte[];
}