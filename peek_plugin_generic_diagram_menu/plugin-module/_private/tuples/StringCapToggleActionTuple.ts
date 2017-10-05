                                       import {addTupleType, Tuple, TupleActionABC} from "@synerty/vortexjs";
import {genericDiagramMenuTuplePrefix} from "../PluginNames";

@addTupleType
export class StringCapToggleActionTuple extends TupleActionABC {
    static readonly tupleName = genericDiagramMenuTuplePrefix + "StringCapToggleActionTuple";

    genericDiagramMenuId: number;

    constructor() {
        super(StringCapToggleActionTuple.tupleName)
    }
}