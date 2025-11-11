import { useMemo } from "react";
import { AppIcon } from "../icons";
import { useDarkModeStore } from "../Theme/useDarkModeStore";
import { MdArrowForwardIos } from "react-icons/md";
import type { Alert } from "../Types/Alert";
import App from "../App";

export function AlertItem({ alert }: { alert: Alert; order: number }) {
  const styles = useDarkModeStore((state) => state.styles);

  const severityColors = useMemo(
    () => ({
      high: {
        border: styles.alertHighBorder,
        bg: styles.alertHighBg,
        icon: styles.alertHighIcon,
        iconBg: styles.alertHighIconBg,
        button: styles.alertHighButton,
      },
      medium: {
        border: styles.alertMediumBorder,
        bg: styles.alertMediumBg,
        icon: styles.alertMediumIcon,
        iconBg: styles.alertMediumIconBg,
        button: styles.alertMediumButton,
      },
      low: {
        border: styles.alertLowBorder,
        bg: styles.alertLowBg,
        icon: styles.alertLowIcon,
        iconBg: styles.alertLowIconBg,
        button: styles.alertLowButton,
      },
    }),
    [styles]
  );
  console.log("colors", severityColors);

  let icon;
  console.log("alert type", alert.type);
  switch (alert.type) {
    case "staff license":
      icon = (
        <AppIcon
          name="userFilled"
          size={30}
          style={{ color: severityColors[alert.severity].icon }}
        />
      );
      break;
    case "resource":
      icon =
        alert.severity === "high" ? (
          <AppIcon
            name="car"
            size={30}
            style={{ color: severityColors[alert.severity].icon }}
          />
        ) : (
          <AppIcon
            name="key"
            size={30}
            style={{ color: severityColors[alert.severity].icon }}
          />
        );
      break;
    case "keyDispatch":

    default:
      break;
  }
  console.log("icon", icon);
  return (
    <div
      className="flex relative items-start border-1 rounded-xl p-3 py-2 gap-3 mb-5  shadow-sm w-full"
      style={{
        borderColor: severityColors[alert.severity].border,
        backgroundColor: severityColors[alert.severity].bg,
      }}
    >
      <div className="flex justify-between items-center w-full gap-3">
        <div className="flex items-center">
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
              <div
                className="flex items-center justify-center w-[40px] h-[40px] rounded-full "
                style={{
                  backgroundColor: severityColors[alert.severity].iconBg,
                }}
              >
                {/* <img
              src={`${iconSeverity[alert.severity]}`}
              className="w-[30px] h-[30px]"
              alt={`Alert severity: ${alert.severity}`}
            /> */}

                {icon}
              </div>
            )}
          </div>

          {/* Title & Message */}
          <div className="ml-3">
            <span
              className={`text-md block`}
              style={{ color: styles.mainText }}
            >
              <strong
                className="text-xs"
                style={{ color: severityColors[alert.severity].icon }}
              >
                {" "}
                {alert.severity === "high" ? "Immidiate" : ""} Attention
                Required
              </strong>
            </span>
            <span className="font-[600] text-[#1F2937]">
              {alert.title} - {alert.message}
            </span>

            <p
              className={`text-md mt-1`}
              style={{ color: styles.mainText }}
            ></p>
          </div>
        </div>

        {/* Arrow */}

        <button
          style={{ backgroundColor: severityColors[alert.severity].button }}
          className="text-white px-2 py-1 rounded-md font-[600] cursor-pointer"
        >
          Review
        </button>
      </div>
    </div>
  );
}
