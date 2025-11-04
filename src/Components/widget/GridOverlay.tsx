// GridOverlay.jsx

import React from "react";

interface GridOverlayProps {
  isVisible: boolean;
  unitWidth: number;
  cols: number;
  rowHeight: number;
  margin: number; // 10
  paddingTop: number; // 10
  maxRows: number;
}

export default function GridOverlay({
  isVisible,
  unitWidth,
  cols,
  rowHeight,
  margin,
  paddingTop,
  maxRows,
}: GridOverlayProps) {
  if (!isVisible || unitWidth <= 0 || maxRows < 1) {
    return null;
  }

  // RGL's total height calculation:
  // (maxRows * rowHeight) + (maxRows - 1) * margin + 2 * paddingTop/Bottom
  // Since you only have a top padding (10px) and margin (10px), and we don't know the bottom padding:
  // We'll calculate the height based on the final position of the last row's bottom edge.
  //   const contentHeight = maxRows * rowHeight + maxRows * margin;
  const totalHeight =
    paddingTop +
    maxRows * rowHeight +
    (maxRows > 0 ? maxRows - 1 : 0) * margin +
    paddingTop;

  const cellColor = "rgba(0, 0, 0, 0.1)";

  const gridCells = [];

  // --- 1. Vertical Lines (for Column Margins) ---
  // Position = (c * unitWidth) + (c * margin)
  // We place the line at the center of the margin gap.
  for (let r = 0; r < maxRows; r++) {
    for (let c = 0; c < cols; c++) {
      // Horizontal Position (LEFT):
      // The start of the cell (widget content area) is:
      // X = PADDING_X (0) + (c * unitWidth) + (c * margin)
      const leftPosition = c * unitWidth + c * margin;

      // Vertical Position (TOP):
      // The start of the cell (widget content area) is:
      // Y = PADDING_Y (10) + (r * rowHeight) + (r * margin)
      const topPosition = paddingTop + r * rowHeight + r * margin;
      // ${cellColor}
      gridCells.push(
        <div
          key={`cell-${c}-${r}`}
          style={{
            position: "absolute",
            top: topPosition,
            left: leftPosition,
            // The size of the cell matches the content area of a 1x1 widget
            width: `${unitWidth}px`,
            height: `${rowHeight}px`,
            border: `1px solid #a9acac`,
            boxSizing: "border-box",
            borderRadius: "4px",

            // Set background to transparent or a very light color
            backgroundColor: "transparent",
          }}
        />
      );
    }
  }

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: `${totalHeight}px`,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* --- Change: Render the cells instead of lines --- */}
      {gridCells}
    </div>
  );
}
