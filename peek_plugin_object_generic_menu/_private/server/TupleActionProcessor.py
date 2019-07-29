from vortex.handler.TupleActionProcessor import TupleActionProcessor

from peek_plugin_object_generic_menu._private.PluginNames import objectGenericMenuFilt
from peek_plugin_object_generic_menu._private.PluginNames import objectGenericMenuActionProcessorName
from .controller.MainController import MainController


def makeTupleActionProcessorHandler(mainController: MainController):
    processor = TupleActionProcessor(
        tupleActionProcessorName=objectGenericMenuActionProcessorName,
        additionalFilt=objectGenericMenuFilt,
        defaultDelegate=mainController)
    return processor
