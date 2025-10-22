import React from "react";
import { useDarkModeStore } from "../Theme/useDarkModeStore";
import { MdArrowForwardIos } from "react-icons/md";

interface Alert {
  id: string;
  title: string;
  message: string;
  severity: "high" | "medium" | "low";
  img: string | null;
}

export function AlertItem({ alert, order }: { alert: Alert; order: number }) {
  const styles = useDarkModeStore((state) => state.styles);

  const severityColors = {
    high: {
      border: styles.alertHighBorder,
      bg: styles.alertHighBg,
    },
    medium: {
      border: styles.alertMediumBorder,
      bg: styles.alertMediumBg,
    },
    low: {
      border: styles.alertLowBorder,
      bg: styles.alertLowBg,
    },
  };

  const iconSeverity = {
    high: "dangerIcon.png",
    medium: "mediumIcon.png",
    low: "lowIcon.png",
  };

  return (
    <div
      className="flex relative items-start border-t-2 rounded-lg p-3 gap-3 mb-2 shadow-sm w-full"
      style={{
        borderColor: severityColors[alert.severity].border,
        backgroundColor: severityColors[alert.severity].bg,
      }}
    >
      {/* Icon */}
      <div className="flex-shrink-0 mt-1">
        {alert.img ? (
          <img
            src={alert.img}
            width="40px"
            height="40px"
            className="rounded-full"
            alt="User profile"
          />
        ) : (
          <img
            src={`/person not found icon/${iconSeverity[alert.severity]}`}
            className="w-[30px] h-[30px]"
            alt={`Alert severity: ${alert.severity}`}
          />
        )}
      </div>

      {/* Title & Message */}
      <div className="ml-3">
        <h4
          className={`font-medium ${order === 0 ? "text-lg" : "text-sm"}`}
          style={{ color: styles.mainText }}
        >
          ATTENTION REQUIRED - {alert.title}
        </h4>

        <p
          className={`${order === 0 ? "text-lg" : "text-sm"} mt-1`}
          style={{ color: styles.mainText }}
        >
          {alert.message}
        </p>
      </div>

      {/* Arrow */}
      <div className="absolute bottom-2 right-2">
        <MdArrowForwardIos
          style={{ color: severityColors[alert.severity].border }}
        />
      </div>
    </div>
  );
}
