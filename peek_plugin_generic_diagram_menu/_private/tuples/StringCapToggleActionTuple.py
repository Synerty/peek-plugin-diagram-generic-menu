from vortex.Tuple import addTupleType, TupleField
from vortex.TupleAction import TupleActionABC

from peek_plugin_generic_diagram_menu._private.PluginNames import genericDiagramMenuTuplePrefix


@addTupleType
class StringCapToggleActionTuple(TupleActionABC):
    __tupleType__ = genericDiagramMenuTuplePrefix + "StringCapToggleActionTuple"

    genericDiagramMenuId = TupleField()
