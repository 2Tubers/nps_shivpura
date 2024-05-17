import React,{useState}from "react";

function Campus() {
  const [collapsedSections, setCollapsedSections] = useState({
    rooms: false,
    clab: false,
    mlab: false,
    lib: false,
    avRoom: false,
    pwat: false,
    cctv: false,
    adF:false
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
        <div className="content" id="rooms">
        <div className="section-header">
          <h1>Class Rooms</h1>
          <button className="hamburger-button" onClick={() => toggleCollapse('rooms')}>
              {collapsedSections.rooms ? '▼' : '☰'}
          </button>
        </div>
        {!collapsedSections.rooms && (
          <p>
            The classrooms are large and well ventilated with white/green boards
            and bulletin boards inside and outside the classrooms. Strength of
            each class is kept at manageable level with comfortable furniture
            which adds to the ambience of the class room.
          </p>
        )}
        </div>
      </div>

      <div className="container">
        <div className="content" id="clab">
        <div className="section-header">
          <h1>Computer Lab</h1>
          <button className="hamburger-button" onClick={() => toggleCollapse('clab')}>
              {collapsedSections.clab ? '▼' : '☰'}
          </button>
        </div>
        {!collapsedSections.clab && (
          <p>
            Computer lab with internet connection to source the websites for
            educational material. Computer classes start from Grade 1 onwards.
            Internet can be accessed by students in presence of a teacher only.
          </p>
        )}
        </div>
      </div>

      <div className="container">
        <div className="content" id="mlab">
        <div className="section-header">
          <h1>Math Lab</h1>
          <button className="hamburger-button" onClick={() => toggleCollapse('mlab')}>
              {collapsedSections.mlab ? '▼' : '☰'}
          </button>
        </div>
        {!collapsedSections.mlab && (
          <p>
            A well equipped maths lab provides the students with the opportunity
            to have fun with numbers. It helps the students to put their
            mathematical abilities to test and enhance their analytical
            reasoning and lateral thinking through various models, games and
            activities.
          </p>
        )}
        </div>
      </div>

      <div className="container">
        <div className="content" id="lib">
        <div className="section-header">
          <h1>Library</h1>
          <button className="hamburger-button" onClick={() => toggleCollapse('lib')}>
              {collapsedSections.lib ? '▼' : '☰'}
          </button>
        </div>
        {!collapsedSections.lib && (
          <p>
            Library is the main resource of centre in NPS, Shivapura. It has a
            seating capacity of 200 students. It mainly contains text books,
            reference books, fiction titles, periodicals, audio visual material
            like CD and VCD’s and teaching resources. There is a special reading
            programme which encourages the children to read the recommended
            library books.
          </p>
        )}
        </div>
      </div>

      <div className="container">
        <div className="content" id="avRoom">
        <div className="section-header">
          <h1>AV Room</h1>
          <button className="hamburger-button" onClick={() => toggleCollapse('avRoom')}>
              {collapsedSections.avRoom ? '▼' : '☰'}
          </button>
        </div>
        {!collapsedSections.avRoom && (
          <p>
            Well-furnished and spacious classrooms are a very appealing feature
            of our school infrastructure. The green boards and bulletin boards
            encourage students to decorate their classrooms and display their
            creative ideas and artistic work.
          </p>
        )}
        </div>
      </div>

      <div className="container">
        <div className="content" id="pwat">
        <div className="section-header">
          <h1>Portable Water</h1>
          <button className="hamburger-button" onClick={() => toggleCollapse('pwat')}>
              {collapsedSections.pwat ? '▼' : '☰'}
          </button>
        </div>
        {!collapsedSections.pwat && (
          <p>
            The school ensures uninterrupted supply of clean drinking water i.e;
            RO filtered water on all the floors.
          </p>
        )}
        </div>
      </div>

      <div className="container">
        <div className="content" id="cctv">
        <div className="section-header">
          <h1>CCTV</h1>
          <button className="hamburger-button" onClick={() => toggleCollapse('cctv')}>
              {collapsedSections.cctv ? '▼' : '☰'}
          </button>
        </div>
        {!collapsedSections.cctv && (
          <p>
            The school is under CCTV surveillance so as to ensure safety and
            security. It not only helps in monitoring but also to keep a track
            of activities taking place within the school premises. There are a
            total of 53 cameras installed in various parts of the school
            premises.
          </p>
        )}
        </div>
      </div>

      <div className="container">
        <div className="content" id="adF">
        <div className="section-header">
          <h1>The additional Facilities are</h1>
          <button className="hamburger-button" onClick={() => toggleCollapse('adF')}>
              {collapsedSections.adF ? '▼' : '☰'}
          </button>
        </div>
        {!collapsedSections.adF && (
          <div>
          <p>Counselling Centre</p>
          <p>Resource Room</p>
          </div>
        )}
        </div>
      </div>

     
      <div className="content2 ">
        <div className="row2">
            <div>
                <h1>Events 2023-24</h1>
                <p>Topic 1</p>
                <p>Topic 2</p>
            </div>

            <div>
                <h1>Photo Gallery  2021-22</h1>
                <p>Topic 1</p>
                <p>Topic 2</p>
            </div>

            <div>
                <h1>Blogs – Students</h1>
                <p>Topic 1</p>
                <p>Topic 2</p>
            </div>
        </div>
      </div>

      <div className="container">
        <div className="content" id="whyUs">
          <h1>WHY NPS Shivpura ?</h1>
          <p>
            We offer a creative and professionally satisfying environment that
            is innovative respectful and appreciative. When we look for a new
            educator to join us on our journey, besides the obious requirments
            of Academic excellence and the ability to effectively inspire
            learning, we look for an attitude that connects with ours, We look
            for a real love for children, team skills and a passion for
            knowledge. “Mail your resume at info@nps-sb.com or post it to our
            address. Resume should be accompanied with handwritten write up on”
            What strategies will you employ to make your subject interesting to
            students " or "How will you contribute to the child's holistic
            development" and recent passport size coloured photograph.”
          </p>
        </div>
      </div>
    </div>
  );
}

export default Campus;
