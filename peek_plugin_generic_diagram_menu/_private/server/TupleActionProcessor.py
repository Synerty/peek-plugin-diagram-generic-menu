from vortex.handler.TupleActionProcessor import TupleActionProcessor

from peek_plugin_generic_diagram_menu._private.PluginNames import genericDiagramMenuFilt
from peek_plugin_generic_diagram_menu._private.PluginNames import genericDiagramMenuActionProcessorName
from .controller.MainController import MainController


def makeTupleActionProcessorHandler(mainController: MainController):
    processor = TupleActionProcessor(
        tupleActionProcessorName=genericDiagramMenuActionProcessorName,
        additionalFilt=genericDiagramMenuFilt,
        defaultDelegate=mainController)
    return processor
