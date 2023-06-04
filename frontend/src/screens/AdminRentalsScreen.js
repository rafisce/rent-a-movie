import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listRentalsAdmin } from "../actions/rentalActions";
import { useParams } from "react-router-dom";

const AdminRentalsScreen = ({ props }) => {
  const dispatch = useDispatch();

  const rentalList = useSelector((state) => state.rentalList);
  const { rentals } = rentalList;
  const params = useParams();
  const { id: userId } = params;

  useEffect(() => {
    dispatch(listRentalsAdmin(userId));
  }, [dispatch, userId]);

  return (
    <div className="container table_">
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
                  <td>{rental.duration}&nbsp;ימים</td>
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

export default AdminRentalsScreen;
