import React from 'react';
import './Problem.css';

/**
 * Props:
 * - problem / Problem: string (the problem text)
 * - color   / Color:   string (background color, e.g., "#1f2937")
 * - textColor / TextColor (optional): override text color (defaults to white)
 */
function Problem(props) {
  const {
    Problem: problemUpper,
    problem: problemLower,
    Color: colorUpper,
    color: colorLower,
    TextColor: textColorUpper,
    textColor: textColorLower,
  } = props;

  const problem = problemUpper ?? problemLower ?? '';
  const bgColor = colorUpper ?? colorLower ?? '#000';    // default dark bg
  const textColor = textColorUpper ?? textColorLower ?? '#fff'; // default white text

  return (
    <section
      className="background-problem fullbleed-problem"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="container-problem">
        <p className="label-problem">Problem Statement:</p>
        <p className="text-problem">{problem}</p>
      </div>
    </section>
  );
}

export default Problem;
