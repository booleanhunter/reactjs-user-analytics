import React from 'react';
import { UserInteraction } from '../resources/userInteractionResource';

export function trackUserInteraction(
    e: React.SyntheticEvent,
    Component: React.ComponentType<any>,
    dataContext: UserInteraction.DataContext,
    tracker: UserInteraction.Tracker,
) {
    const targetNode = e.target as HTMLElement;
    const value = getValueFromNode(e);

    const closestComponent = targetNode.closest(
        '[data-element-type="component"]',
    );

    const userInteractionResource = UserInteraction.mapToResource(
        dataContext.app,
        tracker.action,
        {
            context: dataContext.context,
            ...(origin && {
                origin,
            }),
            component: {
                currentTarget: Component.displayName || Component.name,
                target: closestComponent
                    ? closestComponent.getAttribute('data-display-name')
                    : null,
            },
            element: {
                currentTarget: e.currentTarget.nodeName,
                target: targetNode.nodeName || e.currentTarget.nodeName,
                innerHTML: targetNode.innerHTML,
                innerText: targetNode.innerText,
                ...(value && {
                    value,
                }),
            },
        },
        tracker.data,
    );

    tracker.track(e, userInteractionResource);
}

function getValueFromNode(e: React.SyntheticEvent) {
    if (e.target.nodeName === 'INPUT') {
        const currentTarget = e.target as HTMLInputElement;
        return currentTarget.value;
    }
}
