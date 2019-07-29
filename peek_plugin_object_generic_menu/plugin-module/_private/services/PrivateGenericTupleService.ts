import {Injectable, NgZone} from "@angular/core";
import {
    TupleActionPushNameService,
    TupleActionPushOfflineService,
    TupleActionPushOfflineSingletonService,
    TupleDataObservableNameService,
    TupleDataOfflineObserverService,
    TupleOfflineStorageNameService,
    TupleOfflineStorageService,
    TupleStorageFactoryService,
    VortexService,
    VortexStatusService
} from "@synerty/vortexjs";

import {
    objectGenericMenuActionProcessorName,
    objectGenericMenuFilt,
    objectGenericMenuObservableName,
    objectGenericMenuTupleOfflineServiceName
} from "../PluginNames";


@Injectable()
export class PrivateGenericTupleService  {

    public tupleOfflineAction: TupleActionPushOfflineService;
    public tupleDataOfflineObserver: TupleDataOfflineObserverService;


    constructor(tupleActionSingletonService: TupleActionPushOfflineSingletonService,
                vortexService: VortexService,
                vortexStatusService: VortexStatusService,
                storageFactory: TupleStorageFactoryService) {


        let tupleDataObservableName = new TupleDataObservableNameService(
            objectGenericMenuObservableName, objectGenericMenuFilt);

        let storageName = new TupleOfflineStorageNameService(
            objectGenericMenuTupleOfflineServiceName);

        let tupleActionName = new TupleActionPushNameService(
            objectGenericMenuActionProcessorName, objectGenericMenuFilt);

        let tupleOfflineStorageService = new TupleOfflineStorageService(
            storageFactory, storageName);

        this.tupleDataOfflineObserver = new TupleDataOfflineObserverService(
            vortexService,
            vortexStatusService,
            tupleDataObservableName,
            tupleOfflineStorageService);


        this.tupleOfflineAction = new TupleActionPushOfflineService(
            tupleActionName,
            vortexService,
            vortexStatusService,
            tupleActionSingletonService);

    }


}