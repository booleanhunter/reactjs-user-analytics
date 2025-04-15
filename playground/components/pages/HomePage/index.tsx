import React from 'react';
import { Link } from 'react-router';
import './index.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <header className="homepage-header">
                <h1>🎯 Tracking-Enabled UI Components</h1>
                <p>
                    A showcase of React components enhanced with user interaction tracking.
                    These components are useful for collecting event analytics like clicks,
                    changes, and other UI behavior across your application.
                </p>
            </header>

            <section className="homepage-links">
                <h2>🔍 Explore Examples</h2>
                <ul>
                    <li>
                        <Link to="/examples/components/button">🔘 ButtonWithTracking</Link>
                    </li>
                    <li>
                        <Link to="/examples/components/input">⌨️ InputWithTracking</Link>
                    </li>
                    <li>
                        <Link to="/examples/pages/newsletter-signup">📬 Newsletter Signup</Link>
                    </li>
                    <li>
                        <Link to="/examples/pages/event-rsvp">📰 Event RSVP Example</Link>
                    </li>
                </ul>
                <p>
                    <a href="docs/index.html">View API documentation</a>
                </p>
            </section>

            <section className="why-section">
                <h2>🧐 Approach</h2>
                <p>
                    This project uses <strong>Higher-Order Components (HOCs)</strong> to wrap
                    existing components with tracking logic — without modifying the components
                    themselves.
                </p>
                {CodeBlock()}
                <ul>
                    <li>✅ <strong>No rewrites required</strong> – Existing components stay untouched.</li>
                    <li>🧩 <strong>Plug-and-play tracking</strong> – Minimal friction for integration.</li>
                    <li>🧪 <strong>A creative HOC experiment</strong> – Clean, declarative behavior injection.</li>
                    <li>🧠 <strong>Customizable data structure</strong> – More control than black-box tools.</li>
                </ul>
            </section>

            <footer className="homepage-footer">
                <p>Made with ❤️ for devs who love observability.</p>
            </footer>
        </div>
    );
};

export default HomePage;

const CodeBlock = () => {
    const jsxCode = `
// import your component
import Button from 'components/Button';

import withTracking from 'react-user-analytics/index';

const ButtonWithTracking = withTracking(Button);

<ButtonWithTracking
    label="click me"
    trackers={[
        {
            action: 'onClick',
            track: handleLogEvent,
        },
    ]}
/>
  `.trim();
  
    return (
        <pre className="custom-code-block">
            <code>{jsxCode}</code>
        </pre>
    );
}

