type FretboardDiagramProps = {
  string?: number;
  fret?: number;
  showStringNames?: boolean;
};

const strings = [
  { number: 1, name: "High E", thickness: 2 },
  { number: 2, name: "B", thickness: 2.5 },
  { number: 3, name: "G", thickness: 3 },
  { number: 4, name: "D", thickness: 3.5 },
  { number: 5, name: "A", thickness: 4 },
  { number: 6, name: "Low E", thickness: 5 },
];

const fretCount = 5;

export default function FretboardDiagram({
  string,
  fret,
  showStringNames = true,
}: FretboardDiagramProps) {
  const hasTarget =
    typeof string === "number" && typeof fret === "number";

  return (
    <section
      aria-label="Guitar fretboard diagram"
      style={{
        margin: "24px 0",
        padding: 24,
        border: "2px solid #314657",
        borderRadius: 18,
        background:
          "linear-gradient(145deg, #111a22 0%, #18242e 100%)",
        color: "#ffffff",
        overflowX: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 16,
          marginBottom: 18,
        }}
      >
        <div>
          <p
            style={{
              margin: 0,
              color: "#9fb2c2",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Fretboard
          </p>

          <h3 style={{ margin: "4px 0 0" }}>
            {hasTarget
              ? `String ${string}, Fret ${fret}`
              : "First Five Frets"}
          </h3>
        </div>

        {hasTarget && (
          <span
            style={{
              borderRadius: 999,
              padding: "7px 11px",
              background: "rgba(74, 222, 128, 0.14)",
              color: "#67e894",
              fontSize: 13,
              fontWeight: 800,
            }}
          >
            Target note
          </span>
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: showStringNames
            ? "82px minmax(520px, 1fr)"
            : "36px minmax(520px, 1fr)",
          gap: 12,
          alignItems: "stretch",
          minWidth: showStringNames ? 650 : 600,
        }}
      >
        <div
          aria-hidden="true"
          style={{
            display: "grid",
            gridTemplateRows: `repeat(${strings.length}, 44px)`,
          }}
        >
          {strings.map((guitarString) => {
            const isActive = guitarString.number === string;

            return (
              <div
                key={guitarString.number}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: 8,
                  color: isActive ? "#67e894" : "#c8d2da",
                  fontWeight: isActive ? 800 : 600,
                }}
              >
                <span>{guitarString.number}</span>

                {showStringNames && (
                  <span style={{ width: 48 }}>
                    {guitarString.name}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div
          style={{
            position: "relative",
            borderRadius: 12,
            background:
              "linear-gradient(90deg, #5d3a24 0%, #805337 50%, #604028 100%)",
            border: "5px solid #2a1b12",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              gridTemplateColumns: `repeat(${fretCount}, 1fr)`,
            }}
          >
            {Array.from({ length: fretCount }).map((_, index) => (
              <div
                key={index}
                style={{
                  borderRight:
                    index === fretCount - 1
                      ? "none"
                      : "4px solid rgba(225, 230, 234, 0.82)",
                  boxShadow:
                    index === fretCount - 1
                      ? "none"
                      : "2px 0 2px rgba(0, 0, 0, 0.42)",
                }}
              />
            ))}
          </div>

          <div
            style={{
              position: "relative",
              display: "grid",
              gridTemplateRows: `repeat(${strings.length}, 44px)`,
            }}
          >
            {strings.map((guitarString) => {
              const isActiveString =
                guitarString.number === string;

              return (
                <div
                  key={guitarString.number}
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      width: "100%",
                      height: guitarString.thickness,
                      background: isActiveString
                        ? "#67e894"
                        : "linear-gradient(180deg, #f2f2f2, #9ca7af)",
                      boxShadow: isActiveString
                        ? "0 0 10px rgba(103, 232, 148, 0.9)"
                        : "0 1px 2px rgba(0, 0, 0, 0.65)",
                    }}
                  />

                  {isActiveString &&
                    typeof fret === "number" &&
                    fret >= 1 &&
                    fret <= fretCount && (
                      <div
                        aria-label={`Place finger on String ${string}, Fret ${fret}`}
                        style={{
                          position: "absolute",
                          left: `calc(${((fret - 0.22) / fretCount) * 100}% - 15px)`,
                          width: 30,
                          height: 30,
                          borderRadius: "50%",
                          background: "#67e894",
                          border: "3px solid #eafff1",
                          boxShadow:
                            "0 0 0 5px rgba(103, 232, 148, 0.18), 0 0 14px rgba(103, 232, 148, 0.8)",
                          transform: "translateY(0)",
                        }}
                      />
                    )}

                  {isActiveString && fret === 0 && (
                    <div
                      aria-label={`Play String ${string} open`}
                      style={{
                        position: "absolute",
                        left: 8,
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        border: "3px solid #67e894",
                        background: "#14211b",
                        color: "#67e894",
                        display: "grid",
                        placeItems: "center",
                        fontSize: 12,
                        fontWeight: 900,
                      }}
                    >
                      0
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div
            aria-hidden="true"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${fretCount}, 1fr)`,
              borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            {Array.from({ length: fretCount }).map((_, index) => (
              <div
                key={index}
                style={{
                  padding: "7px 0",
                  textAlign: "center",
                  color:
                    fret === index + 1 ? "#67e894" : "#d6dee4",
                  fontSize: 12,
                  fontWeight:
                    fret === index + 1 ? 900 : 700,
                }}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      <p
        style={{
          margin: "16px 0 0",
          color: "#aebdc8",
          fontSize: 14,
        }}
      >
        Place your fingertip just behind the metal fret wire—not
        directly on top of it.
      </p>
    </section>
  );
}