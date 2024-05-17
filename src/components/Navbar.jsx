import React from "react";

function Navbar() {
  // scroll functionality in the home page

  const scrollToMessages = () => {
    window.location.href = "/#messages";
    const moreSection = document.getElementById("messages");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToMore = () => {
    window.location.href = "/#more";
    const moreSection = document.getElementById("more");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToActivities = () => {
    window.location.href = "/#activities";
    const moreSection = document.getElementById("activities");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToLocation = () => {
    window.location.href = "/#loc";
    const moreSection = document.getElementById("loc");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // scroll in about
  const scrollToHistory = () => {
    window.location.href = "/about#history";
    const moreSection = document.getElementById("history");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToNPS = () => {
    window.location.href = "/about#NPS";
    const moreSection = document.getElementById("NPS");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToProfile = () => {
    window.location.href = "/about#profile";
    const moreSection = document.getElementById("profile");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // scroll in admissions
  const scrollToWel = () => {
    window.location.href = "/admissions#wel";
    const moreSection = document.getElementById("wel");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToReg = () => {
    window.location.href = "/admissions#reg";
    const moreSection = document.getElementById("reg");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // scroll learning
  const scrollToProg = () => {
    window.location.href = "/learning#prog";
    const moreSection = document.getElementById("prog");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToOrient = () => {
    window.location.href = "/learning#orient";
    const moreSection = document.getElementById("orient");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToAdv = () => {
    window.location.href = "/learning#adv";
    const moreSection = document.getElementById("adv");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToComp = () => {
    window.location.href = "/learning#comp";
    const moreSection = document.getElementById("comp");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToEvent = () => {
    window.location.href = "/learning#eventC";
    const moreSection = document.getElementById("eventC");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  //scroll in campus
  const scrollToRooms = () => {
    window.location.href = "/campus#rooms";
    const moreSection = document.getElementById("rooms");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToClab = () => {
    window.location.href = "/campus#clab";
    const moreSection = document.getElementById("clab");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToMlab = () => {
    window.location.href = "/campus#mlab";
    const moreSection = document.getElementById("mlab");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToLib = () => {
    window.location.href = "/campus#lib";
    const moreSection = document.getElementById("lib");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToAvRoom = () => {
    window.location.href = "/campus#avRoom";
    const moreSection = document.getElementById("avRoom");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToPwat = () => {
    window.location.href = "/campus#rpwat";
    const moreSection = document.getElementById("pwat");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToCCTV = () => {
    window.location.href = "/campus#cctv";
    const moreSection = document.getElementById("cctv");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToAdvF = () => {
    window.location.href = "/campus#adF";
    const moreSection = document.getElementById("adF");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToWhy = () => {
    window.location.href = "/campus#whyUs";
    const moreSection = document.getElementById("whyUs");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  

  function handleHome() {
    const elements = document.getElementsByClassName("home");
    elements[0].style.display = "block";
  }

  function handleHome2() {
    const elements = document.getElementsByClassName("home");
    elements[0].style.display = "none";
  }

  function handleAbout() {
    const elements = document.getElementsByClassName("about");
    elements[0].style.display = "block";
  }

  function handleAbout2() {
    const elements = document.getElementsByClassName("about");
    elements[0].style.display = "none";
  }

  function handleAdmission() {
    const elements = document.getElementsByClassName("admission");
    elements[0].style.display = "block";
  }

  function handleAdmission2() {
    const elements = document.getElementsByClassName("admission");
    elements[0].style.display = "none";
  }

  function handleLearning() {
    const elements = document.getElementsByClassName("learning");
    elements[0].style.display = "block";
  }

  function handleLearning2() {
    const elements = document.getElementsByClassName("learning");
    elements[0].style.display = "none";
  }

  function handleCampus() {
    const elements = document.getElementsByClassName("campus");
    elements[0].style.display = "block";
  }

  function handleCampus2() {
    const elements = document.getElementsByClassName("campus");
    elements[0].style.display = "none";
  }

  function handleContact() {
    const elements = document.getElementsByClassName("contact");
    elements[0].style.display = "block";
  }

  function handleContact2() {
    const elements = document.getElementsByClassName("contact");
    elements[0].style.display = "none";
  }

  return (
    <div>
      <div className="navbar">
        <img src="/icons/nps_logo2-removebg-preview.jpg" alt="Logo" />
        <h2>NPS Shivapura</h2>
        <ul>
          <li onMouseEnter={handleHome} onMouseLeave={handleHome2}>
            <a href="/">Home</a>
            <ul className="home">
              <li onClick={scrollToMessages}>Messages</li>
              <li onClick={scrollToMore}>More</li>
              <li onClick={scrollToActivities}>Events & Activities</li>
              <li onClick={scrollToLocation}>Location</li>
            </ul>
          </li>
          <li onMouseEnter={handleAbout} onMouseLeave={handleAbout2}>
            <a href="/about">About Us</a>
            <ul className="about">
              <li onClick={scrollToHistory}>History</li>
              <li onClick={scrollToNPS}>NPS Shivapura </li>
              <li onClick={scrollToProfile}>School Profile</li>
            </ul>
          </li>
          <li onMouseEnter={handleAdmission} onMouseLeave={handleAdmission2}>
            <a href="/admissions">Admissions</a>
            <ul className="admission">
              <li onClick={scrollToWel}>Welcome.</li>
              <li onClick={scrollToReg}>Registration</li>
            </ul>
          </li>
          <li onMouseEnter={handleLearning} onMouseLeave={handleLearning2}>
            <a href="/learning">Learning</a>
            <ul className="learning">
              <li onClick={scrollToProg}>Programmes</li>
              <li onClick={scrollToOrient}>Orientations</li>
              <li onclick={scrollToAdv}>Advancements</li>
              <li onClick={scrollToComp}>Competitions</li>
              <li onClick={scrollToEvent}>Events & Celebrations</li>
            </ul>
          </li>
          <li onMouseEnter={handleCampus} onMouseLeave={handleCampus2}>
            <a href="/campus">Our Campus</a>
            <ul className="campus">
              <li onClick={scrollToRooms}>Class Rooms</li>
              <li onClick={scrollToClab}>Computer Lab</li>
              <li onClick={scrollToMlab}> Math Lab</li>
              <li onClick={scrollToLib}>Library</li>
              <li onClick={scrollToAvRoom}>AV Room</li>
              <li onClick={scrollToPwat}>Portable Water</li>
              <li onClick={scrollToCCTV}>CCTV</li>
              <li onClick={scrollToAdvF}>Additional Facilities</li>
              <li onClick={scrollToWhy}>Why US</li>
            </ul>
          </li>
          <li onMouseEnter={handleContact} onMouseLeave={handleContact2}>
            <a href="/contact">Contact Us</a>
            <ul className="contact">
              <li>Address</li>
              <li>Telephone No.</li>
              <li>E-mail Address</li>
            </ul>
          </li>
        </ul>
       
      </div>
    </div>
  );
}

export default Navbar;
