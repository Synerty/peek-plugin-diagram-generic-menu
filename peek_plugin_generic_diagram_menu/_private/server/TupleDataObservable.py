from vortex.handler.TupleDataObservableHandler import TupleDataObservableHandler

from peek_plugin_generic_diagram_menu._private.PluginNames import genericDiagramMenuFilt
from peek_plugin_generic_diagram_menu._private.PluginNames import genericDiagramMenuObservableName

from .tuple_providers.GenericDiagramMenuTupleProvider import GenericDiagramMenuTupleProvider
from peek_plugin_generic_diagram_menu._private.storage.GenericDiagramMenuTuple import GenericDiagramMenuTuple


def makeTupleDataObservableHandler(ormSessionCreator):
    """" Make Tuple Data Observable Handler

    This method creates the observable object, registers the tuple providers and then
    returns it.

    :param ormSessionCreator: A function that returns a SQLAlchemy session when called

    :return: An instance of :code:`TupleDataObservableHandler`

    """
    tupleObservable = TupleDataObservableHandler(
                observableName=genericDiagramMenuObservableName,
                additionalFilt=genericDiagramMenuFilt)

    # Register TupleProviders here
    tupleObservable.addTupleProvider(GenericDiagramMenuTuple.tupleName(),
                                     GenericDiagramMenuTupleProvider(ormSessionCreator))
    return tupleObservable
