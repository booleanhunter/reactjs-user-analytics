import { UserInteraction, } from './resources/userInteractionResource';
import { withTracking } from './react/components/withTracking';
import { withDataContext, } from './react/components/withDataContext';
import { DataContext } from './react/contexts/dataContext';
import { workerInstance } from './data-processing/web-worker';
import { initializeBeacon } from './browser/storage';
export { UserInteraction, withTracking, withDataContext, DataContext, workerInstance, initializeBeacon, };
