import { useMemo } from "react";
import styles from "./property1-default5.module.css";

const Property1Default5 = ({
  subject,
  scienceAndTechnology,
  showSubject,
  property1DefaultMinWidth,
  property1DefaultFlex,
  property1DefaultAlignSelf,
  subjectWidth,
  scienceAndTechnologyFontFamily,
}) => {
  const property1Default1Style = useMemo(() => {
    return {
      minWidth: property1DefaultMinWidth,
      flex: property1DefaultFlex,
      alignSelf: property1DefaultAlignSelf,
    };
  }, [
    property1DefaultMinWidth,
    property1DefaultFlex,
    property1DefaultAlignSelf,
  ]);

  const subjectStyle = useMemo(() => {
    return {
      width: subjectWidth,
    };
  }, [subjectWidth]);

  const scienceAndTechnologyStyle = useMemo(() => {
    return {
      fontFamily: scienceAndTechnologyFontFamily,
    };
  }, [scienceAndTechnologyFontFamily]);

  return (
    <div className={styles.property1default} style={property1Default1Style}>
      {showSubject && (
        <b className={styles.subject} style={subjectStyle}>
          {subject}
        </b>
      )}
      <div
        className={styles.scienceAndTechnology}
        style={scienceAndTechnologyStyle}
      >
        {scienceAndTechnology}
      </div>
    </div>
  );
};

export default Property1Default5;
