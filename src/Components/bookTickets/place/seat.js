import React, { Component } from "react";
// @ts-ignore
import SeatPicker from "react-seat-picker";

export default class Seats extends Component {
  state = {
    loading: false
  };

  addSeatCallback = ({ row, number, id }, addCb) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(`Added seat ${number}, row ${row}, id ${id}`);
        const newTooltip = `tooltip for id-${id} added by callback`;
        addCb(row, number, id, newTooltip);
        this.setState({ loading: false });
      }
    );
  };

  removeSeatCallback = ({ row, number, id }, removeCb) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(`Removed seat ${number}, row ${row}, id ${id}`);
        // A value of null will reset the tooltip to the original while '' will hide the tooltip
        const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
        removeCb(row, number, newTooltip);
        this.setState({ loading: false });
      }
    );
  };

  render() {
    const rows = [
      [
        { id: 1, number: 1, isSelected: this.state.props, isReserved: true },
        { id: 2, number: 2, isSelected: this.state.props, isReserved: true },
        null,
        {
          id: 3,
          number: "3",
          isSelected: this.state.props,
          isReserved: false
        },
        { id: 4, number: "4", isSelected: this.state.props, isReserved: false },

        { id: 5, number: 5, isSelected: this.state.props, isReserved: false }
      ],
      [
        {
          id: 6,
          number: 1,
          isSelected: this.state.props,
          isReserved: true
        },
        { id: 7, number: 2, isSelected: this.state.props, isReserved: true },
        null,
        { id: 8, number: 3, isSelected: this.state.props, isReserved: true },
        { id: 9, number: 4, isSelected: this.state.props, isReserved: true },

        { id: 10, number: 5, isSelected: this.state.props, isReserved: true }
      ],
      [
        { id: 11, number: 1, isSelected: this.state.props, isReserved: false },
        { id: 12, number: 2, isSelected: this.state.props, isReserved: false },
        null,
        { id: 13, number: 3, isSelected: this.state.props, isReserved: true },
        { id: 14, number: 4, isSelected: this.state.props, isReserved: true },

        { id: 15, number: 5, isSelected: this.state.props, isReserved: false }
      ]
    ];
    const { loading } = this.state;
    return (
      <div>
        <h1 className="mt-4">Seat Picker</h1>
        <div style={{ marginBottom: "50px" }}>
          <SeatPicker
            addSeatCallback={this.addSeatCallback}
            removeSeatCallback={this.removeSeatCallback}
            rows={rows}
            maxReservableSeats={5}
            alpha
            visible
            selectedByDefault
            loading={loading}
            tooltipProps={{ multiline: true }}
          />
        </div>
      </div>
    );
  }
}
