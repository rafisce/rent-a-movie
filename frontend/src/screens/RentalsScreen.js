import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listRentals } from "../actions/rentalActions";

const Rentals = ({ props }) => {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const rentalList = useSelector((state) => state.rentalList);
  const { rentals } = rentalList;

  useEffect(() => {
    if (userInfo) {
      dispatch(listRentals(userInfo.id));
    }
  }, [dispatch, userInfo]);

  return (
    <div className="container rentals">
      <table className="table table-striped table-dark" dir="rtl">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">שם הסרט</th>
            <th scope="col">זמן השכרה</th>
            <th scope="col">תאריך התחלה</th>
            <th scope="col">תאריך סיום</th>
          </tr>
        </thead>
        <tbody>
          {rentals
            ? rentals.map((rental, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{rental.movie_title}</td>
                  <td>{rental.duration}&nbsp;days</td>
                  <td>{rental.starting_date.replace("T", " ").slice(0, -8)}</td>
                  <td>{rental.ending_date.replace("T", " ").slice(0, -8)}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Rentals;