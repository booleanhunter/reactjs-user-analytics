import
    UserInteractionResource,
    {
        UserInteraction,
    }
from './resources/userInteractionResource';

import { withTracking, TrackerProps } from './react/components/withTracking';
import {
    withDataContext,
} from './react/components/withDataContext';
import { DataContext } from './react/contexts/dataContext';

import { workerInstance } from './data-processing/web-worker';
import { initializeBeacon } from './browser/storage';

export {
    UserInteraction,

    withTracking,
    withDataContext,
    DataContext,

    workerInstance,
    initializeBeacon,
}

export type { UserInteractionResource };
export type { TrackerProps };
