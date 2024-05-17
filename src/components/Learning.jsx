import React ,{useState} from "react";
function Learning() {

  const [collapsedSections, setCollapsedSections] = useState({
    prog: false,
    orient: false,
    adv: false,
    comp: false,
    eventC: false
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
        <div className="content" id="prog">

        <div className="section-header">
        <h1>Enrichment Programmes</h1>
          <button className="hamburger-button" onClick={() => toggleCollapse('prog')}>
              {collapsedSections.prog ? '▼' : '☰'}
          </button>
        
          </div>

          {!collapsedSections.prog && (
          <p>
            With the sole purpose of updating teachers' knowledge, the school
            has hosted a series of Teachers' Workshops and orientations over the
            years. The sessions enriched the teachers who were part of
            informative programmes which highlighted the goals and objectives of
            the school, building common core values and soft-skills enrichment
            and has taken up specific learning modules as shared by CBSE Board.
            During the handholding process from our mother schools, our teachers
            were made a part of the training sessions and workshops that were
            conducted at NPS Kormanagala. With the establishment of a set
            standard in place, an indigenous team of trained faculty conduct the
            Induction, orientation and workshop programmes for the batch of
            teachers; new and old every year. Apart from yearly refreshers, our
            teachers attended various workshops on various ACADEMIC SUBJECTS.
            Attendee teachers further share the knowledge with other fellow
            teachers widening the sphere of wisdom.
          </p>
          )}
        </div>
      </div>
      <div className="container ">
        <div className="content" id="orient">
        <div className="section-header">
          <h1>PARENT ORIENTATIONS</h1>
          <button className="hamburger-button" onClick={() => toggleCollapse('orient')}>
              {collapsedSections.orient ? '▼' : '☰'}
          </button>
          </div>
          {!collapsedSections.orient && (
          <p>
            Educating parents with the nuances of learning methodologies,
            curricular structure, examinations and details from the CBSE board
            has been our top priority. Every year, the commencement of an
            academic session begins with orientation programmes for parents who
            are briefed on what to expect during the course of the session. The
            programme helps in making parents aware of the scheme of education
            we impart here at our school. Query-resolving session by respected
            Principals illuminate the path of positive parenting.
          </p>
          )}
        </div>
      </div>

      <div className="container">
        <div className="content" id="adv">
        <div className="section-header">
          <h1>TECHNOLOGICAL ADVANCEMENTS</h1>
          <button className="hamburger-button" onClick={() => toggleCollapse('adv')}>
              {collapsedSections.adv ? '▼' : '☰'}
          </button>
          </div>
          {!collapsedSections.adv && (
          <p>
            Keeping up with the pace of modern times, Digitization of the school
            was undertaken which transformed the entire school chores channel
            through the use of Information Technology, bringing in more
            transparency and enhanced communication with parents’ community. The
            introduction of THURSDAY FOLDER in the NEWSROOM Tab of the website
            in the year 2016 was just the beginning of the digitization process.
            The parent App – Acadamis was introduced during the academic year
            2020-21 which provides broad access to student data such as Report
            Cards, Fee payment etc.
          </p>
          )}
        </div>
      </div>
      <div className="container">
        <div className="content" id="comp">
        <div className="section-header">
          <h1>COMPETITIONS </h1>
          <button className="hamburger-button" onClick={() => toggleCollapse('comp')}>
              {collapsedSections.comp ? '▼' : '☰'}
          </button>
          </div>
          {!collapsedSections.comp && (
          <p>
            To take part is what counts in competition and lessons of victory
            and defeat are what we get in return. Making young learners into
            versatile achievers was essential in the development of the
            individual and the institution. The school took every opportunity to
            engage students in inter-school, intra-school, inter-house and
            inter-class competitions such as debates, quiz, Art explorations,
            music, sports, Creative-Writing, Spelling-Bee, National and
            International Olympiad competitions etc. Our students took part in
            various school level, zonal level, district level, state level and
            national level Competitions and brought laudable laurels to the
            school. The school also takes immense pride in hosting Goonj – The
            Interschool Fest which provides students from other schools an
            opportunity to present their talents and skills in various events
            across academic domains.
          </p>
          )}
        </div>
      </div>

      <div className="container ">
        <div className="content" id="eventC">
        <div className="section-header">
          <h1>EVENTS and CELEBRATIONS</h1>
         
          <button className="hamburger-button" onClick={() => toggleCollapse('eventC')}>
              {collapsedSections.eventC ? '▼' : '☰'}
          </button>
    
          </div>
          {!collapsedSections.eventC && (
          <p>
            Promoting the harmony across all communities, Events and occasions
            are celebrated with great enthusiasm. Special Assemblies are
            conducted on a regular basis where value education is imparted.
            Traditional celebrations such as Investiture ceremony, Independence
            Day, Religious festivals etc are celebrated to kindle and stimulate
            the creative domains of the students.
          </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Learning;
