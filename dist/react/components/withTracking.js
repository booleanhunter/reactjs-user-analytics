var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import { UserInteraction, } from '../../resources/userInteractionResource';
import { DataContext } from '../contexts/dataContext';
/**
 * HOC that returns the provided Component with UserInteraction tracking logic.
 */
export function withTracking(Component) {
    /**
     * Returns a Closure component for adding User Interaction Logic
     */
    return function (props) {
        var eventHandlers = {};
        var trackers = props.trackers, origin = props.origin, dataContextFromProps = props.dataContext, originalProps = __rest(props, ["trackers", "origin", "dataContext"]);
        var dataContext = useContext(DataContext);
        if (dataContextFromProps) {
            dataContext = dataContextFromProps;
        }
        function trackUserInteraction(e, tracker) {
            var targetNode = e.target;
            var value = getValueFromNode(e);
            var userInteractionResource = UserInteraction.generateResource(dataContext.app, tracker.action, __assign(__assign({ context: dataContext.context }, (originalProps.origin && {
                origin: originalProps.origin
            })), { component: Component.displayName || Component.name, element: __assign({ currentTarget: e.currentTarget.nodeName, target: targetNode.nodeName || e.currentTarget.nodeName, innerHTML: targetNode.innerHTML, innerText: targetNode.innerText }, (value && {
                    value: value,
                })) }), tracker.data);
            tracker.track(e, userInteractionResource);
        }
        trackers.forEach(function (tracker) {
            eventHandlers[tracker.action] = (tracker.action in originalProps) ? function (e) {
                originalProps[tracker.action](e);
                trackUserInteraction(e, tracker);
            } : function (e) {
                trackUserInteraction(e, tracker);
            };
        });
        return (_jsx(Component, __assign({}, originalProps, eventHandlers), void 0));
    };
}
;
function getValueFromNode(e) {
    if (e.currentTarget.nodeName === "INPUT") {
        var currentTarget = e.target;
        return currentTarget.value;
    }
}
