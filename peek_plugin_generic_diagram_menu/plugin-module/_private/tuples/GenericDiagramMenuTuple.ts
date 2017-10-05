import {addTupleType, Tuple} from "@synerty/vortexjs";
import {genericDiagramMenuTuplePrefix} from "../PluginNames";


@addTupleType
export class GenericDiagramMenuTuple extends Tuple {
    public static readonly tupleName = genericDiagramMenuTuplePrefix + "GenericDiagramMenuTuple";

    //  Description of date1
    id : number;

    //  Description of string1
    string1 : string;

    //  Description of int1
    int1 : number;

    constructor() {
        super(GenericDiagramMenuTuple.tupleName)
    }
}