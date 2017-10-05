from abc import ABCMeta, abstractmethod

from peek_plugin_generic_diagram_menu.tuples.DoSomethingTuple import DoSomethingTuple


class GenericDiagramMenuApiABC(metaclass=ABCMeta):

    @abstractmethod
    def doSomethingGood(self, somethingsDescription:str) -> DoSomethingTuple:
        """ Add a New Task

        Add a new task to the users device.

        :param somethingsDescription: An arbitrary string
        :return: The computed result contained in a DoSomethingTuple tuple

        """
