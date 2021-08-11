
import UserInteractionResource, { UserInteraction } from 'library/resources/userInteractionResource';
import { DataContext } from 'library/react/contexts/dataContext';

import MenuItem from '../../elements/Menu/MenuItem';
import { LandingPageWithTracking } from '../../templates/LandingPageTwo';

export interface TopLevelProps {

}

const data = {
    context: "Tracking on top level",
    app: {
        version: "1",
    },
} as UserInteraction.DataContext;

function TrackingOnTopLevel(props: TopLevelProps) {

    function logEvent(
        event: React.MouseEvent<HTMLElement, MouseEvent>,
        interactionResource: UserInteractionResource
    ) {
        // tracking logic goes here
        console.log("logEvent");
        console.log(interactionResource);
    }

    const landingPageProps = {
        items: ["Landing 1", "Landing 2", "Landing 3"],
    }

    return (
        <DataContext.Provider value={data}>
            <LandingPageWithTracking
                {...landingPageProps}
                trackers={[
                    {
                        action: "onClick",
                        track: logEvent,
                    },
                    {
                        action: "onMouseOver",
                        track: logEvent,
                    }
                ]}
                origin="Tracking on Top Level"
            >
        
                { 
                    landingPageProps.items.map((item: string, i: any) => {
                        return (
                        <MenuItem key={`${i}`}>{item}</MenuItem>
                    )})
                }
     
            </LandingPageWithTracking>
        </DataContext.Provider>
    )
}

export default TrackingOnTopLevel;