import React, { useState } from 'react';
import ReactJoyride from 'react-joyride';

const OnboardingSteps = () => {
  const [joyride, setJoyride] = useState({
    run: false,
    steps: [
      {
        title: "Welcome to react-joyride!",
        target: "body",
        placement: "center",
        content: <div><h4>The simplest way to onboard users.</h4><p>This appears in the center of the page because the target element in the Joyride step definition is 'body' and the placement is 'center'.</p></div>,
        disableBeacon: true,
      },
      {
        title: "Joyride Is A Great Way To Point At Things",
        target: ".App-logo",
        content: "Look, the React Spinning Atom logo. It's identified by its className, ('App-logo') in the Joyride step definition target.",
      },
      {
        title: "Finally ...",
        target: ".App-link",
        content: "Take action!",
      },
    ]
  });

  return (<React.Fragment>
    <div style={{ marginLeft: "10%", marginRight: "auto" }}>
      <button
        onClick={() => { setJoyride({ ...joyride, run: !joyride.run }); }}
        style={{ backgroundColor: "#ff0044", color: "white", border: "none", fontSize: "24px", padding: "15px 32px", cursor: "pointer", borderRadius: "10px" }}>Take The Tour</button>
    </div>
    <ReactJoyride
      steps={joyride.steps}
      run={joyride.run}
      continuous
      showProgress
      showSkipButton />
  </React.Fragment>);
};

export default OnboardingSteps


