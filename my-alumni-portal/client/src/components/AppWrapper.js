import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './AppWrapper.css';
import pic1 from "../dashboard.jpg";
import pic2 from "../edit.png";
import pic3 from "../changepass.jpg";
import pic4 from "../kit.png";
import Button from 'react-bootstrap/Button';



export const AppWrapper = () => {
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("PRN") == null) {
      console.log("Checked1");
      navigate('/login');
    }
  });

  const changePasswd = () => {
    navigate('/changePassword');
  }

  const goDashboard = () => {
    document.getElementById('goToDashboard').style.visibility = 'hidden';
    document.getElementById('completeProfile').style.visibility = 'hidden';
    document.getElementById('changePassword').style.visibility = 'hidden';
    if (localStorage.getItem("Type") == "Admin") {
      navigate('/adminDashboard');
    } else if (localStorage.getItem("Type") == "Student") {
      navigate('/studentDashboard');
    } else if (localStorage.getItem("Type") == "Alumni") {
      navigate("/alumniDashboard");
    } else {
      navigate("/coordinatorDashboard");
    }
  }

  const updateProfile = () => {
    document.getElementById('goToDashboard').style.visibility = 'hidden';
    document.getElementById('completeProfile').style.visibility = 'hidden';
    document.getElementById('changePassword').style.visibility = 'hidden';
    if (localStorage.getItem("Type") == "Admin") {
      navigate('/adminDashboard');
    } else if (localStorage.getItem("Type") == "Student") {
      navigate('/updateStudentProfile');
    } else if (localStorage.getItem("Type") == "Alumni") {
      navigate("/updateAlumniProfile");
    } else {
      navigate("/updateCoordinatorProfile");
    }
  }


  return (
    <>

      <div className="jumbotron jumbotron-billboard">
        <div className="img"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={pic4} className="img-fluid rounded thumbnail-image" />
            </div>
            <div className='col-lg-6'>
              <div className='center1'>
                <br />
                <h2><b>Welcome {localStorage.getItem("Name")}</b></h2>
                <p>KIT's Alumini Portal</p>
                <p>KIT'S College Of Engineering (Autonomous)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container1 mt-5">





        <div className="row">

          <div className="col-md-4">



            <div className="card">

              <div className="image-container1">


                <img src={pic1} className="img-fluid rounded thumbnail-image" />


              </div>
              <button id='goToDashboard' onClick={goDashboard}>Dashboard</button>


              <div className="product-detail-container p-2">

                <div className="d-flex justify-content-between align-items-center">

                  <h5 className="dress-name"></h5>

                  <div className="d-flex flex-column mb-2">
                  </div>

                </div>





              </div>

            </div>



          </div>

          <div className="col-md-4">



            <div className="card">

              <div className="image-container">


                <img src={pic2} className="img-fluid rounded thumbnail-image" />


              </div>
              <button id='completeProfile' onClick={updateProfile}>Edit Profile</button>


              <div className="product-detail-container p-2">

                <div className="d-flex justify-content-between align-items-center">

                  <h5 className="dress-name"></h5>

                  <div className="d-flex flex-column mb-2">
                  </div>

                </div>





              </div>

            </div>



          </div>

          <div className="col-md-4">



            <div className="card">

              <div className="image-container">


                <img src={pic3} className="img-fluid rounded thumbnail-image" />


              </div>
              <button id='changePassword' onClick={changePasswd}>Change Password</button>


              <div className="product-detail-container p-2">

                <div className="d-flex justify-content-between align-items-center">

                  <h5 className="dress-name"></h5>

                  <div className="d-flex flex-column mb-2">
                  </div>

                </div>





              </div>

            </div>
          </div>
        </div>



      </div>
    </>
  )
}
