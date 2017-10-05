from sqlalchemy import Column
from sqlalchemy import Integer, String
from vortex.Tuple import Tuple, addTupleType

from peek_plugin_generic_diagram_menu._private.PluginNames import genericDiagramMenuTuplePrefix
from peek_plugin_generic_diagram_menu._private.storage.DeclarativeBase import DeclarativeBase


@addTupleType
class GenericDiagramMenuTuple(Tuple, DeclarativeBase):
    __tupleType__ = genericDiagramMenuTuplePrefix + 'GenericDiagramMenuTuple'
    __tablename__ = 'GenericDiagramMenu'

    id = Column(Integer, primary_key=True, autoincrement=True)
    modelSetKey = Column(String)
    coordSetKey = Column(String)
    faIcon = Column(String)
    title = Column(String, nullable=False)
    url = Column(String, nullable=False)