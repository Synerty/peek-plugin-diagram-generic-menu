import {addTupleType, Tuple} from "@synerty/vortexjs";
import {genericDiagramMenuTuplePrefix} from "../PluginNames";


@addTupleType
export class GenericDiagramMenuTuple extends Tuple {
    public static readonly tupleName = genericDiagramMenuTuplePrefix + "GenericDiagramMenuTuple";

    //  Description of date1
    id : number;

    modelSetKey : string | null;
    coordSetKey : string | null;
    faIcon : string | null;
    title : string;
    url : string;

    constructor() {
        super(GenericDiagramMenuTuple.tupleName)
    }
}