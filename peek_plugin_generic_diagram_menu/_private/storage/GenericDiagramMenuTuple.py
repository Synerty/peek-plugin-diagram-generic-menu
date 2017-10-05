from sqlalchemy import Column
from sqlalchemy import Integer, String
from vortex.Tuple import Tuple, addTupleType

from peek_plugin_generic_diagram_menu._private.PluginNames import genericDiagramMenuTuplePrefix
from peek_plugin_generic_diagram_menu._private.storage.DeclarativeBase import DeclarativeBase


@addTupleType
class GenericDiagramMenuTuple(Tuple, DeclarativeBase):
    __tupleType__ = genericDiagramMenuTuplePrefix + 'GenericDiagramMenuTuple'
    __tablename__ = 'GenericDiagramMenuTuple'

    id = Column(Integer, primary_key=True, autoincrement=True)
    string1 = Column(String(50))
    int1 = Column(Integer)