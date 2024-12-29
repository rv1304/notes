import React from "react";

const Notes = ({ sections }) => {
  return (
    <div className="container">
      {sections.map((section, index) => (
        <div key={index} className="section">
          <h2>{section.title}</h2>

          {/* Problem Statement */}
          {section.problemStatement && (
            <div className="problem-statement">
              <h3>Problem Statement:</h3>
              <p>{section.problemStatement}</p>
            </div>
          )}

          {/* Main Content */}
          {section.content && (
            <div className="content">
              <h3>Content:</h3>
              <p>{section.content}</p>
            </div>
          )}

          {/* Examples (for Module 1) */}
          {section.examples && (
            <div className="examples">
              <h3>Examples:</h3>
              {section.examples.map((example, i) => (
                <div key={i} className="example">
                  {example.type === "text" && <p>{example.data}</p>}
                  {example.type === "code" && (
                    <div className="code-block">
                      <code>{example.data}</code>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Steps (for Module 1 Solutions) */}
          {section.steps && (
            <div className="solution">
              <h3>Solution:</h3>
              <ul>
                {section.steps.map((step, i) => (
                  <li key={i}>{step.description}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Subsections (for Module 2) */}
          {section.subsections && (
            <div className="subsections">
              {section.subsections.map((sub, subIndex) => (
                <div key={subIndex} className="subsection">
                  <h4>{sub.subtitle}</h4>

                  {/* Points List */}
                  {sub.points && (
                    <ul>
                      {sub.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  )}

                  {/* Table (for Data Types) */}
                  {sub.table && (
                    <div className="table-container">
                      <table>
                        <thead>
                          <tr>
                            {Object.keys(sub.table[0]).map((key, keyIndex) => (
                              <th key={keyIndex}>{key}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {sub.table.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                              {Object.values(row).map((value, colIndex) => (
                                <td key={colIndex}>{value}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Examples */}
                  {sub.examples && (
                    <div className="examples">
                      {sub.examples.map((example, exIndex) => (
                        <div key={exIndex} className="example">
                          {example.type === "text" && <p>{example.data}</p>}
                          {example.type === "code" && (
                            <div className="code-block">
                              <code>{example.data}</code>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Practice Problems */}
          {section.problems && (
            <div className="practice-problems">
              <h3>Practice Problems:</h3>
              {section.problems.map((problem, probIndex) => (
                <div key={probIndex} className="problem">
                  <h4>{problem.problem}</h4>
                  <div className="solution">
                    <h5>Solution:</h5>
                    {problem.solution.type === "code" && (
                      <div className="code-block">
                        <code>{problem.solution.data}</code>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Comparisons (for Module 1) */}
          {section.comparison && (
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Java</th>
                    <th>C++</th>
                    <th>Python</th>
                  </tr>
                </thead>
                <tbody>
                  {section.comparison.map((row, i) => (
                    <tr key={i}>
                      <td>{row.feature}</td>
                      <td>{row.java}</td>
                      <td>{row.cpp}</td>
                      <td>{row.python}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Notes;
