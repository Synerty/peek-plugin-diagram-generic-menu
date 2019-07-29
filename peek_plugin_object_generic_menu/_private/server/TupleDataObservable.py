from vortex.handler.TupleDataObservableHandler import TupleDataObservableHandler

from peek_plugin_object_generic_menu._private.PluginNames import objectGenericMenuFilt
from peek_plugin_object_generic_menu._private.PluginNames import objectGenericMenuObservableName

from .tuple_providers.ObjectGenericMenuTupleProvider import ObjectGenericMenuTupleProvider
from peek_plugin_object_generic_menu._private.storage.ObjectGenericMenuTuple import ObjectGenericMenuTuple


def makeTupleDataObservableHandler(ormSessionCreator):
    """" Make Tuple Data Observable Handler

    This method creates the observable object, registers the tuple providers and then
    returns it.

    :param ormSessionCreator: A function that returns a SQLAlchemy session when called

    :return: An instance of :code:`TupleDataObservableHandler`

    """
    tupleObservable = TupleDataObservableHandler(
                observableName=objectGenericMenuObservableName,
                additionalFilt=objectGenericMenuFilt)

    # Register TupleProviders here
    tupleObservable.addTupleProvider(ObjectGenericMenuTuple.tupleName(),
                                     ObjectGenericMenuTupleProvider(ormSessionCreator))
    return tupleObservable
