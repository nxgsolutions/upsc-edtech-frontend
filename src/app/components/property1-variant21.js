import { useMemo } from "react";
import styles from "./property1-variant21.module.css";

const Property1Variant2 = ({
  scienceAndTechnology,
  property1Variant2Background,
  property1Variant2BackgroundColor,
  scienceAndTechnologyFontSize,
  scienceAndTechnologyFontFamily,
  scienceAndTechnologyLineHeight,
}) => {
  const property1Variant21Style = useMemo(() => {
    return {
      background: property1Variant2Background,
      backgroundColor: property1Variant2BackgroundColor,
    };
  }, [property1Variant2Background, property1Variant2BackgroundColor]);

  const scienceAndTechnology1Style = useMemo(() => {
    return {
      fontSize: scienceAndTechnologyFontSize,
      fontFamily: scienceAndTechnologyFontFamily,
      lineHeight: scienceAndTechnologyLineHeight,
    };
  }, [
    scienceAndTechnologyFontSize,
    scienceAndTechnologyFontFamily,
    scienceAndTechnologyLineHeight,
  ]);

  return (
    <div className={styles.property1variant2} style={property1Variant21Style}>
      <div
        className={styles.scienceAndTechnology}
        style={scienceAndTechnology1Style}
      >
        {scienceAndTechnology}
      </div>
    </div>
  );
};

export default Property1Variant2;
