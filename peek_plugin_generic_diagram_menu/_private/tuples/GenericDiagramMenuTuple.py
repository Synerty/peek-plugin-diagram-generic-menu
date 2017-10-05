from vortex.Tuple import Tuple, addTupleType, TupleField

from peek_plugin_generic_diagram_menu._private.PluginNames import genericDiagramMenuTuplePrefix


@addTupleType
class GenericDiagramMenuTuple(Tuple):
    """ GenericDiagramMenu Tuple

    This tuple is a create example of defining classes to work with our data.
    """
    __tupleType__ = genericDiagramMenuTuplePrefix + 'GenericDiagramMenuTuple'

    #:  Description of date1
    dict1 = TupleField(defaultValue=dict)

    #:  Description of date1
    array1 = TupleField(defaultValue=list)

    #:  Description of date1
    date1 = TupleField()
