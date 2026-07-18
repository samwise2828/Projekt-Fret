type StringDiagramProps = {
  highlight?: number;
  showNames?: boolean;
};

const strings = [
  { number: 1, name: "High E" },
  { number: 2, name: "B" },
  { number: 3, name: "G" },
  { number: 4, name: "D" },
  { number: 5, name: "A" },
  { number: 6, name: "Low E" },
];

export default function StringDiagram({
  highlight,
  showNames = true,
}: StringDiagramProps) {
  return (
    <div
      style={{
        background: "#172029",
        border: "2px solid #2f4556",
        borderRadius: 16,
        padding: 24,
        margin: "24px 0",
      }}
    >
      <h3
        style={{
          marginBottom: 20,
          color: "#fff",
        }}
      >
        Guitar Strings
      </h3>

      {strings.map((string) => {
        const active = highlight === string.number;

        return (
          <div
            key={string.number}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: 30,
                textAlign: "center",
                fontWeight: 700,
                color: active ? "#4ade80" : "#fff",
              }}
            >
              {string.number}
            </div>

            <div
              style={{
                flex: 1,
                height: active ? 6 : 3,
                borderRadius: 999,
                background: active
                  ? "#4ade80"
                  : "#d6d6d6",
                transition: ".2s",
              }}
            />

            {showNames && (
              <div
                style={{
                  width: 80,
                  fontWeight: active ? 700 : 500,
                  color: active ? "#4ade80" : "#fff",
                }}
              >
                {string.name}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}