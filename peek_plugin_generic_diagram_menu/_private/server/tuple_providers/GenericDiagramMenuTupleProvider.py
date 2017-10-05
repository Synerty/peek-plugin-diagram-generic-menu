from typing import Union

from twisted.internet.defer import Deferred
from txhttputil.util.DeferUtil import deferToThreadWrap
from vortex.Payload import Payload
from vortex.TupleSelector import TupleSelector
from vortex.handler.TupleDataObservableHandler import TuplesProviderABC

from peek_plugin_generic_diagram_menu._private.storage.GenericDiagramMenuTuple import \
    GenericDiagramMenuTuple


class GenericDiagramMenuTupleProvider(TuplesProviderABC):
    def __init__(self, ormSessionCreator):
        self._ormSessionCreator = ormSessionCreator

    @deferToThreadWrap
    def makeVortexMsg(self, filt: dict,
                      tupleSelector: TupleSelector) -> Union[Deferred, bytes]:

        session = self._ormSessionCreator()
        try:
            tuples = session.query(GenericDiagramMenuTuple).all()

            # Create the vortex message
            return Payload(filt, tuples=tuples).toVortexMsg()

        finally:
            session.close()
