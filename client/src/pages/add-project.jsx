import "./login.css";

function AddProject() {
  // const [selectedLogo, setSelectedLogo] = useState(null);
  // const [selectedBGImage, setSelectedBGImage] = useState(null);

  return (
    <div className="container">
      <div className="login-container">
        <div className="login-form">
          <div className="login-form-header">
            <h1>Add project</h1>
          </div>
          <form action="http://localhost:5000/api/projects/" method="post">
            <input
              type="text"
              name="name"
              id=""
              placeholder="name"
              className="login-form-input"
            />
            <input
              type="text"
              name="description"
              id=""
              placeholder="description"
              className="login-form-input"
            />
            <input
              type="text"
              name="idea"
              id=""
              placeholder="idea"
              className="login-form-input"
            />
            <input
              type="text"
              name="category"
              id=""
              placeholder="category"
              className="login-form-input"
            />
            <input
              type="number"
              name="investors"
              id=""
              placeholder="investors"
              className="login-form-input"
            />
            <input
              type="number"
              name="target"
              id=""
              placeholder="target"
              className="login-form-input"
            />
            <input
              type="number"
              name="equity"
              id=""
              placeholder="equity"
              className="login-form-input"
            />
            <input
              type="number"
              name="sharePrice"
              id=""
              placeholder="sharePrice"
              className="login-form-input"
            />
            <input
              type="number"
              name="preMoneyValuation"
              id=""
              placeholder="preMoneyValuation"
              className="login-form-input"
            />
            <h3>logo</h3>
            <input
              type="file"
              name="logo"
              id=""
              // value={selectedLogo}
              onChange={(e) => e.target.files[0]}
            />
            <h3>backgroundImg</h3>
            <input
              type="file"
              name="backgroundImg"
              id=""
              // value={selectedBGImage}
              onChange={(e) => e.target.files[0]}
            />
            <br />
            <br />
            <input type="submit" value="add project" className="btn" />
            <p>
              don't have an account? <a href="./signup.html">sign up Now </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProject;
