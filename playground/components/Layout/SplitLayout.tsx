import React from 'react';
import './SplitLayout.css';

const SplitLayout = ({ children }: { children: React.ReactNode[] }) => {
    const [left, right] = children
    return (
        <div className="split-layout">
            <div className="split-left">
                <h2 className="split-title">Preview</h2>
                <p className="split-description">
                    This section displays an interactive preview. You can
                    interact with buttons, inputs, and menu items just as a real
                    user would.
                </p>
                {left}
            </div>
            <div className="split-right">
                <h2 className="split-title">Event Log</h2>
                <p className="split-description">
                    This section shows a real-time log of tracked user
                    interactions. Each interaction is
                    captured as a structured JSON object, helping you debug or
                    analyze behavior.
                </p>
                {right}
            </div>
        </div>
    )
}

export default SplitLayout;
