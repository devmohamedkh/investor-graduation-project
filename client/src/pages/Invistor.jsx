import "./invisstorPage.css";
import { getInvistorInvistemints } from "../redux/invistemintSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Invistor() {
  const dispatch = useDispatch();

  const { invistemints, loading, error } = useSelector(
    (state) => state.invistemint
  );
  const { invistoer } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getInvistorInvistemints(invistoer));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error} </div>;
  }
  console.log(invistemints);
  return (
    <div className="invisstor-page">
      <div className="container">
        <h1 className="s-title">your investments</h1>
        {invistemints && (
          <table id="investments">
            <tr>
              <td>#</td>
              <td>Project Name</td>
              <td>Quentity</td>
              <td> Share Price </td>
              <td> Totle Prise </td>
            </tr>

            {invistemints &&
              invistemints.map((invistemint) => (
                <tr key={invistemint._id}>
                  <td>
                    <img
                      className="invistor-logo"
                      src={`http://localhost:5000/${invistemint.projectId.logo}`}
                      alt=""
                    />
                  </td>
                  <td>{invistemint.projectId.name}</td>
                  <td> {invistemint.quentity}</td>
                  <td>${invistemint.projectId.sharePrice} </td>
                  <td>
                    {" "}
                    $
                    {(
                      invistemint.projectId.sharePrice * invistemint.quentity
                    ).toFixed(2)}
                  </td>
                </tr>
              ))}
          </table>
        )}
        {invistemints && invistemints.length === 0 && (
          <div>
            <h1>You have no investments</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Invistor;
