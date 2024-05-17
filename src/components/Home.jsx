import React,{useState}from "react";
import YourComponent from "./yourComponent";
function Home() {
  const [collapsedSections, setCollapsedSections] = useState({
    messages: false,
    more: false,
    activities: false
  });
  
  const toggleCollapse = (section) => {
    setCollapsedSections(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };
 
  return (
    <div>
      <div className="container">

      
<div class="notice-container">
  <p class="notice">Important Notice: School will be closed on Friday for a staff training day. We apologize for any inconvenience.</p>
</div>



        <div className="content" id="messages">
        <div className="section-header">
          <h1>Messages</h1>
          <button className="hamburger-button" onClick={() => toggleCollapse('messages')}>
              {collapsedSections.messages ? '▼' : '☰'}
          </button>
          </div>
          </div>
        {!collapsedSections.messages && (
        <div className="content3 content4">
          <div>
            <h1>Chairman, NPS Group</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur velit aut ab voluptas dolorum placeat excepturi illo, nam veniam ratione minus laboriosam doloremque rem repellat unde officiis cupiditate, vero facere, adipisci dolorem asperiores fugiat inventore. Eum earum sit aspernatur nisi. Eveniet rerum perspiciatis dolore ut inventore corrupti dicta. Optio, maiores</p>
          </div>
          <div>
            <h1>Chairman, NPS Shivapura</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur velit aut ab voluptas dolorum placeat excepturi illo, nam veniam ratione minus laboriosam doloremque rem repellat unde officiis cupiditate, vero facere, adipisci dolorem asperiores fugiat inventore. Eum earum sit aspernatur nisi. Eveniet rerum perspiciatis dolore ut inventore corrupti dicta. Optio, maiores</p>
          </div>
          <div>
            <h1>Principal</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur velit aut ab voluptas dolorum placeat excepturi illo, nam veniam ratione minus laboriosam doloremque rem repellat unde officiis cupiditate, vero facere, adipisci dolorem asperiores fugiat inventore. Eum earum sit aspernatur nisi. Eveniet rerum perspiciatis dolore ut inventore corrupti dicta. Optio, maiores</p>
          </div>
        </div>
      
        )}
</div>

      <div className="container">
        <div className="content" id="more">
        <div className="section-header">
          <h1>More about NPS Shivpura</h1>
          <button className="hamburger-button" onClick={() => toggleCollapse('more')}>
              {collapsedSections.more ? '▼' : '☰'}
          </button>
          </div>
        </div>
        {!collapsedSections.more && (
        <div className="content3">
        <div>
          <p>Facilities</p>
        </div>
        <div>
          <p>Circular</p>
        </div>
        <div>
          <p>Safe Learning Environment</p>
        </div>
        </div>
        )}
        </div>


        <div className="container">
        <div className="content" id="activities">
        <div className="section-header">
          <h1>Our Events and Activities</h1>
          <button className="hamburger-button" onClick={() => toggleCollapse('activities')}>
              {collapsedSections.activities ? '▼' : '☰'}
          </button>
          </div>
        </div>
        {!collapsedSections.activities && (
          <div>
        <div className="content3">
        <div>
          <p>School Program</p>
        </div>
        <div>
          <p>Assembly</p>
        </div>
        <div>
          <p>Life Skills</p>
        </div>
        <div>
          <p>CCA Activities </p>
        </div>
        </div>
          <div className="content4">
          <YourComponent/>
          </div>
          </div>
        )}
        </div>
        
    


        <div className="container">
        <div className="content" id="loc">
          <h1>Location</h1>
          <p></p>
          </div>
          </div>
    </div>
  );
}

export default Home;
