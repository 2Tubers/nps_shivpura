import React from "react";

function Admissions() {
  return (
    <div>
      <div className="container ">
        <div className="content" id="wel">
          <h1>Welcome to National Public School, Shivpura.</h1>
          <p>
            We are an educational institution that prepares students for a
            rapidly changing world by nurturing the required skill sets,
            instilling a global perspective and inculcating core values of
            respect, honesty, loyalty, perseverance and compassion. Admission to
            National Public School, Shivapura, is open to all children from
            Montessori (I-5 Academy), Pre-K, Kindergarten and Classes 1 to 9 &
            10.
          </p>
        </div>
      </div>

      <div className="container content4">
        <div className="content " id="reg">
          <h1>REGISTRATION FOR ADMISSION</h1>
          <h1>
            Registration form is available online on our website from
            12/10/2023.{" "}
            <a href="https://online-registrations.npsypr.edu.in/">Click Here</a>
          </h1>
         </div>

         <div className="adp">
          <p >
            Kindly note the age criteria as on 1st June 2024:
            <ul>
              <li>
                For Montessori I and Pre-K registration, the student should have
                completed 3 years.
              </li>
              <li>
                For Montessori II and Kindergarten I registration, the student
                should have completed 4 years.
              </li>
              <li>
                For Montessori III and Kindergarten II registration, the student
                should have completed 5 years
              </li>
              <li>
                For Class 1 registration, the student age should have completed
                6 years.
              </li>
            </ul>
          </p>
         
          <p>
            Download the completed Registration form and submit the printout
            along with the parent attested copies of the following documents on
            the day of interaction (for pre-primary) and on the day entrance
            test (For Classes 1 to 9 & 11) :
            <ul>
              <li>Student’s Birth Certificate.</li>
              <li>Immunisation Card (applicable to Class 1 and below)</li>
              <li>
                Class 2 & above applicants should provide previous 2 years
                academic progress report and current Year Mid-term report card.
                Class 1 applicants should submit Study Certificate from the
                previous school.
              </li>
              <li>Student’s Aadhar Card.</li>
              <li>Parents’ Aadhar Card.</li>
              <li>
                If your child is a Foreign National then please submit a copy of
                your wards passport attested by both parents.
              </li>
              <li>Recent Passport size photo of the student.</li>
              <li>
                Registration Fee – Rs 500/- (non-refundable to be paid online)
                We appreciate the interest evinced by the parents seeking
                admission at National Public School Shivapura. We would like to
                inform that we have very limited seats available for admission
                to all of the classes from Classes 1 to 9 and 11. The seats will
                be available in the open category according to the priority list
                given below:
                <ul>
                  <li>The first priority is for siblings.</li>
                  <li>
                    The second priority is for children of our teachers and
                    other staff members.
                  </li>
                </ul>
              </li>
            </ul>
          </p>
          </div>
      </div>
    </div>
  );
}

export default Admissions;
