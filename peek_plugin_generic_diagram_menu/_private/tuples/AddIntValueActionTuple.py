from vortex.Tuple import addTupleType, TupleField
from vortex.TupleAction import TupleActionABC

from peek_plugin_generic_diagram_menu._private.PluginNames import genericDiagramMenuTuplePrefix


@addTupleType
class AddIntValueActionTuple(TupleActionABC):
    __tupleType__ = genericDiagramMenuTuplePrefix + "AddIntValueActionTuple"

    genericDiagramMenuId = TupleField()
    offset = TupleField()
