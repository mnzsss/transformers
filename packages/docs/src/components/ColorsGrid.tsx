import { colors } from "@beyounglabs/ui-tokens";
import { getContrast } from "polished";

export const ColorsGrid = () => {
  return Object.entries(colors).map(([key, color]) => {
    if (typeof color === "object") {
      return Object.entries(color).map(([ck, cc]) => {
        return (
          <div key={ck} style={{ backgroundColor: cc, padding: "2rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "monospace",
                color: getContrast(cc, "#fff") < 3.5 ? "#000" : "#fff",
              }}
            >
              <strong>
                ${key}-{ck}
              </strong>
              <span>{cc}</span>
            </div>
          </div>
        );
      });
    }

    return (
      <div key={key} style={{ backgroundColor: color, padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            color: getContrast(color, "#fff") < 3.5 ? "#000" : "#fff",
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    );
  });
};
