import React, { useState, useEffect, useCallback } from 'react';
import './navigation.css';
import axios from 'axios';
import Activity from '../Activity';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar, faClock, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);
  const navigate = useNavigate();

  const changePage = (pageName) => {
    setSelectedPage(pageName);
    navigate(`/${pageName}`);
  };

  const handleSidebarToggle = () => {
    setIsCollapsed(prevState => !prevState);
  };

  const retrieveActivities = useCallback(async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const { data } = await axios.get('http://localhost:8000/api/activity', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setActivities(data.slice(0, 10));
      setShowActivities(true);
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  }, []);

  useEffect(() => {
    retrieveActivities();
  }, [retrieveActivities]);

  useEffect(() => {
    const updateSidebarPosition = () => {
      const headerElement = document.querySelector('.header-nav');
      const sidebarElement = document.querySelector('.sidebar');
      if (headerElement && sidebarElement) {
        sidebarElement.style.top = `${headerElement.offsetHeight}px`;
      }
    };

    updateSidebarPosition();
    window.addEventListener('resize', updateSidebarPosition);
    return () => {
      window.removeEventListener('resize', updateSidebarPosition);
    };
  }, []);

  return (
    <nav
      className={`sidebar ${isCollapsed ? '' : 'open'}`}
      onMouseEnter={handleSidebarToggle}
      onMouseLeave={handleSidebarToggle}
    >
      <ul className="navigation-menu">
        <li
          className={`nav-item ${selectedPage === 'home' ? 'selected' : ''}`}
          onClick={() => changePage('home')}
        >
          <FontAwesomeIcon className="fa-icon" icon={faHome} />
          {!isCollapsed && <span>Home</span>}
          <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
        </li>
        <li
          className={`nav-item ${selectedPage === 'favorites' ? 'selected' : ''}`}
          onClick={() => changePage('favorites')}
        >
          <FontAwesomeIcon className="fa-icon" icon={faStar} />
          {!isCollapsed && <span>Favorites</span>}
          <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
        </li>
        <li
          className={`nav-item ${selectedPage === 'watchlater' ? 'selected' : ''}`}
          onClick={() => changePage('watchlater')}
        >
          <FontAwesomeIcon className="fa-icon" icon={faClock} />
          {!isCollapsed && <span>Watch Later</span>}
          <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
        </li>
      </ul>
      <div className="activities-container">
        <h2 className="activities-title">Latest Activities</h2>
        {showActivities && activities.length > 0 && (
          <ul className="activity-list">
            {activities.map((activity, idx) => (
              <Activity
                key={idx}
                userUsername={activity.userUsername}
                title={activity.title}
                date={activity.date}
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default SideBar;
