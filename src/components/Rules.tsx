import React from 'react';
import '../styles/rules.css';

interface Props {
  rules: {
    description?: string;
    points?: string[];
    extraNote?: string;
  } | null;
}

const Rules: React.FC<Props> = ({ rules }) => {
  return (
    <div className="rules-container">
      <h3>Rules</h3>

      {rules ? (
        <>
          {/* First paragraph - Game description */}
          {rules.description && <p className="rules-description">{rules.description}</p>}

          {/* Numbered list - Game objectives */}
          {rules.points && rules.points.length > 0 && (
            <div className="rules-points">
              {rules.points.map((point, index) => (
                <div key={index} className="rule-item">{point}</div>
              ))}
            </div>
          )}

          {/* Final paragraph - Extra notes */}
          {rules.extraNote && <p className="rules-extra">{rules.extraNote}</p>}
        </>
      ) : (
        <p>Select a game to see the rules.</p>
      )}
    </div>
  );
};

export default Rules;