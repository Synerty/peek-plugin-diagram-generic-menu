from peek_plugin_base.PeekVortexUtil import peekServerName
from peek_plugin_object_generic_menu._private.PluginNames import objectGenericMenuFilt
from peek_plugin_object_generic_menu._private.PluginNames import objectGenericMenuActionProcessorName
from vortex.handler.TupleActionProcessorProxy import TupleActionProcessorProxy


def makeTupleActionProcessorProxy():
    return TupleActionProcessorProxy(
                tupleActionProcessorName=objectGenericMenuActionProcessorName,
                proxyToVortexName=peekServerName,
                additionalFilt=objectGenericMenuFilt)
