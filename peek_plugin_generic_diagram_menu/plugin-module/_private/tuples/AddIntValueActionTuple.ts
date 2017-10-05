 import {addTupleType, Tuple, TupleActionABC} from "@synerty/vortexjs";
import {genericDiagramMenuTuplePrefix} from "../PluginNames";

@addTupleType
export class AddIntValueActionTuple extends TupleActionABC {
    static readonly tupleName = genericDiagramMenuTuplePrefix + "AddIntValueActionTuple";

    genericDiagramMenuId: number;
    offset: number;

    constructor() {
        super(AddIntValueActionTuple.tupleName)
    }
}