from peek_plugin_base.PeekVortexUtil import peekServerName
from peek_plugin_generic_diagram_menu._private.PluginNames import genericDiagramMenuFilt
from peek_plugin_generic_diagram_menu._private.PluginNames import genericDiagramMenuActionProcessorName
from vortex.handler.TupleActionProcessorProxy import TupleActionProcessorProxy


def makeTupleActionProcessorProxy():
    return TupleActionProcessorProxy(
                tupleActionProcessorName=genericDiagramMenuActionProcessorName,
                proxyToVortexName=peekServerName,
                additionalFilt=genericDiagramMenuFilt)
