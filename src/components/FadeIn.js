import React from "react";

// Fades components in when they enter the viewport for the first time
export default function FadeIn({ children }) {
  const [isVisible, setVisible] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    const obs = new IntersectionObserver((entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      })
    );
    obs.observe(ref.current);
  });

  return (
    <div ref={ref} className={`fade-in ${isVisible ? "is-visible" : ""}`}>
      {children}
    </div>
  );
}
