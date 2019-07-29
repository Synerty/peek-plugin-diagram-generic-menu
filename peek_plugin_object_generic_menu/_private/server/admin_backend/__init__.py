from .ObjectGenericMenuTableHandler import makeObjectGenericMenuTableHandler
from .SettingPropertyHandler import makeSettingPropertyHandler
from vortex.handler.TupleDataObservableHandler import TupleDataObservableHandler


def makeAdminBackendHandlers(tupleObservable: TupleDataObservableHandler,
                             dbSessionCreator):
    yield makeObjectGenericMenuTableHandler(tupleObservable, dbSessionCreator)

    yield makeSettingPropertyHandler(dbSessionCreator)
    pass
