import React from "react";
import { Theater, SeatGroup, SeatRow, Seat } from "./types";
import "./theatre.css";

let SEAT_DIMENSION = 20;

const SeatUi: React.FC<Seat> = ({
  id,
  isSeat,
  status,
  price,
  type,
  isSelected,
}) => {
  return <div className={`seat ${status?.toLowerCase()}`}>{id}</div>;
};

const SeatRowUi: React.FC<SeatRow> = ({
  label,
  seats,
}) => {
  return (
    <>
      {seats.map((seat, index) => {
        return <SeatUi {...seat} key={index} />;
      })}
    </>
  );
};

const SeatGroupUi: React.FC<SeatGroup & { maxSeatsInRow: number }> = ({
  label,
  seatRows,
  maxSeatsInRow,
}) => {

  return (
    <div className="seat-group">
      <p className="group-label">{label}</p>
      <div
        className="layout"
        style={{ gridTemplateColumns: `repeat(${maxSeatsInRow}, 1fr)`, gridTemplateRows: `repeat(${seatRows.length}, ${SEAT_DIMENSION}px)` }}
      >
        {seatRows.map((seatRow, index) => {
          return (
            <SeatRowUi  {...seatRow} key={index} />
          );
        })}
      </div>
    </div>
  );
};

const TheatreUi: React.FC<Theater> = ({
  maxSeats,
  seatDimension,
  seatGap,
  seatGroups,
}) => {
    SEAT_DIMENSION =  seatDimension;
  const containerWidth  = maxSeats * seatDimension + (maxSeats - 1) * seatGap;
  return (
    // maxSeats * seatDimensions + seatsInRow - 1 * seatGap
    <div className="theatre" style={{width: containerWidth}}>
      {seatGroups.map((seatGroup, index) => {
        return (
          <SeatGroupUi {...seatGroup} key={index} maxSeatsInRow={maxSeats} />
        );
      })}
    </div>
  );
};

export default TheatreUi;
