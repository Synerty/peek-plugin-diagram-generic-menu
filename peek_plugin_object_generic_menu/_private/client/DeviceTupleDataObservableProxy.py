from peek_plugin_base.PeekVortexUtil import peekServerName
from peek_plugin_object_generic_menu._private.PluginNames import objectGenericMenuFilt
from peek_plugin_object_generic_menu._private.PluginNames import objectGenericMenuObservableName
from vortex.handler.TupleDataObservableProxyHandler import TupleDataObservableProxyHandler


def makeDeviceTupleDataObservableProxy():
    return TupleDataObservableProxyHandler(observableName=objectGenericMenuObservableName,
                                           proxyToVortexName=peekServerName,
                                           additionalFilt=objectGenericMenuFilt)
