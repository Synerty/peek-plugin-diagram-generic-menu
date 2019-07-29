import {addTupleType, Tuple} from "@synerty/vortexjs";
import {objectGenericMenuTuplePrefix} from "../PluginNames";


@addTupleType
export class ObjectGenericMenuTuple extends Tuple {
    public static readonly tupleName = objectGenericMenuTuplePrefix + "ObjectGenericMenuTuple";

    //  Description of date1
    id : number;

    modelSetKey : string | null;
    coordSetKey : string | null;
    faIcon : string | null;
    title : string;
    url : string;

    constructor() {
        super(ObjectGenericMenuTuple.tupleName)
    }
}