from peek_plugin_base.PeekVortexUtil import peekServerName
from peek_plugin_generic_diagram_menu._private.PluginNames import genericDiagramMenuFilt
from peek_plugin_generic_diagram_menu._private.PluginNames import genericDiagramMenuObservableName
from vortex.handler.TupleDataObservableProxyHandler import TupleDataObservableProxyHandler


def makeDeviceTupleDataObservableProxy():
    return TupleDataObservableProxyHandler(observableName=genericDiagramMenuObservableName,
                                           proxyToVortexName=peekServerName,
                                           additionalFilt=genericDiagramMenuFilt)
