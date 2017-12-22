import logging

from peek_plugin_generic_diagram_menu._private.PluginNames import genericDiagramMenuFilt
from peek_plugin_generic_diagram_menu._private.storage.GenericDiagramMenuTuple import GenericDiagramMenuTuple
from vortex.TupleSelector import TupleSelector
from vortex.handler.TupleDataObservableHandler import TupleDataObservableHandler
from vortex.sqla_orm.OrmCrudHandler import OrmCrudHandler, OrmCrudHandlerExtension

logger = logging.getLogger(__name__)

# This dict matches the definition in the Admin angular app.
filtKey = {"key": "admin.Edit.GenericDiagramMenuTuple"}
filtKey.update(genericDiagramMenuFilt)


# This is the CRUD hander
class __CrudHandler(OrmCrudHandler):
    pass


class __ExtUpdateObservable(OrmCrudHandlerExtension):
    """ Update Observable ORM Crud Extension

    This extension is called after events that will alter data,
    it then notifies the observer.

    """
    def __init__(self, tupleDataObserver: TupleDataObservableHandler):
        self._tupleDataObserver = tupleDataObserver

    def _tellObserver(self, tuple_, tuples, session, payloadFilt):
        selector = {}
        # Copy any filter values into the selector
        # selector["lookupName"] = payloadFilt["lookupName"]
        tupleSelector = TupleSelector(GenericDiagramMenuTuple.tupleName(),
                                      selector)
        self._tupleDataObserver.notifyOfTupleUpdate(tupleSelector)
        return True

    afterUpdateCommit = _tellObserver
    afterDeleteCommit = _tellObserver


# This method creates an instance of the handler class.
def makeGenericDiagramMenuTableHandler(tupleObservable, dbSessionCreator):
    handler = __CrudHandler(dbSessionCreator, GenericDiagramMenuTuple,
                            filtKey, retreiveAll=True)

    logger.debug("Started")
    handler.addExtension(GenericDiagramMenuTuple, __ExtUpdateObservable(tupleObservable))
    return handler