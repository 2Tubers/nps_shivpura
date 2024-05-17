import React,{useState} from "react";

function AboutUs() {
  const [collapsedSections, setCollapsedSections] = useState({
    history: false,
    NPS: false,
    profile: false
  });
  
  const toggleCollapse = (section) => {
    setCollapsedSections(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <div>
      <div className="container ">
        <div className="content " id="history">
          <h2>History</h2>
          <div className="section-header">
          <h1> Our Parent School – National Public School Shivpura</h1>
          <button className="hamburger-button" onClick={() => toggleCollapse('history')}>
              {collapsedSections.history ? '▼' : '☰'}
          </button>
          </div>
          {!collapsedSections.history && (
          <p>
          National Public
            School started its journey in the year 1959 under the pioneering
            effort and careful nurturing by our Founder Chairman of NPS Group of
            Institutions Dr. K P Gopalkrishna and Senior Principal Dr. Santhamma
            Gopalkrishna. NPS has been known for its <bold><strong>academic excellence,
            discipline and ethical practices </strong></bold>which stands tall and high even to
            this day in the field of education. The group of schools is the
            result of the foresight and a noble effort of nation-building. NPS
            school community stands committed to transform learners into
            responsible citizens by developing them through the modern work
            culture of the present world and instilling the moral and ethical
            values in the roots of their heart and mind. Drawing on the legacy
            of the NPS Group of Institutions and the innovative, immersive
            methods of school systems around the world, our schools were
            instituted with one aim – to teach children not just what to learn,
            but how to learn.
          </p>
          )}
        </div>
      </div>

      <div className="container ">
        <div className="content" id="NPS">
        <div className="section-header">
          <h1>National Public School Shivapura At A Glance</h1>
          <button className="hamburger-button" onClick={() => toggleCollapse('NPS')}>
              {collapsedSections.NPS ? '▼' : '☰'}
          </button>
          </div>
          {!collapsedSections.NPS && (
          <p>
            Established in the year 2013-14, the school has grown into a
            renowned institution trusted for its principles on discipline,
            quality and holistic education. A heart filled with aspirations is
            all that was known since the very existence of the school and that's
            what gave the ambition of marching forward till excellence is
            achieved in all the endeavours. Over the years, the school has
            fashioned well-rounded students who have flourished with successful
            grades and credits. The school has provided equal opportunities and
            support for the student community to develop their interests in
            sports and other skill-based activities. The goal of the institution
            is to provide quality teaching and learning environments for our
            students. The school collectively has an enthusiastic and dedicated
            team of 125 teachers in the Senior Secondary, Secondary, the Primary
            and the Pre-Primary sections. In addition, we have Non-Teaching
            staff and Supporting staff. Their coordination with each other is
            what enables the school to function smoothly and grow with new
            perspectives. Innovation is the change that unlocks new value which
            leads to success. The school continues to strive towards innovation
            and for that the latest practices in the field of education are
            being continuously incorporated.
          </p>
          )}
        </div>
      </div>

      <div className="container ">


        <div className="content" id="profile">
        <div className="section-header">
        <h2>SCHOOL PROFILE</h2>
        <button className="hamburger-button" onClick={() => toggleCollapse('profile')}>
              {collapsedSections.profile ? '▼' : '☰'}
          </button>
          </div>
        </div>
        {!collapsedSections.profile && (
          <div>
        <div className="content2 ">
        <div className="row1">
        <div>
         <h1>Type of School</h1>
         <p>Coeducational</p>
         </div>
         <div>
         <h1>Board</h1>
         <p><a href="https://www.cbse.gov.in/" style={{ textDecoration: 'none' , color:'aqua'}}>CBSE</a></p>
         </div>
         </div>
         </div>
         
         <div className="content2">
        <div className="row">
         <div>
         <h1>2013-14</h1>
         <p>Montessori – I, Kindergarten I & II, Classes 1-8</p>
         </div>
         <div>
         <h1>2014-15</h1>
         <p>Montessori – I,II, Kindergarten I & II, Classes 1-9</p>
         </div>
         <div>
         <h1>2015-16</h1>
         <p>Montessori – I,II,III, Kindergarten I & II, Classes 1-11</p>
         </div>
         <div>
         <h1>2016-17</h1>
         <p>Montessori – I,II,III, Kindergarten I & II, Classes 1-12</p>
         </div>
         <div>
         <h1>2017-18</h1>
         <p>Montessori – I,II,III, Kindergarten I & II, Classes 1-12</p>
         </div>
         <div>
         <h1>2018-19</h1>
         <p>Montessori – I,II,III, Kindergarten I & II, Classes 1-12</p>
         </div>
         <div>
         <h1>2019-20</h1>
         <p>Montessori – I,II,III, Kindergarten I & II, Classes 1-12			</p>
         </div>
         <div>
         <h1>2020-21</h1>
         <p>Montessori – I,II,III, Kindergarten I & II, Classes 1-12</p>
         </div>
         <div>
         <h1>2021-22</h1>
         <p>Montessori – I,II,III, Pre-K, Kindergarten I & II, Classes 1-12</p>
         </div>
         </div>
        </div>
        
        </div>
        )}
        </div>
        </div>
        
  );
}

export default AboutUs;
