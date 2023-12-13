import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAsteroidsList } from '../services/api';
import moment from 'moment';

const LandingPage = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [asteroids, setAsteroids] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
   
    setError('');

    if (!moment(startDate, 'YYYY-MM-DD').isValid() || !moment(endDate, 'YYYY-MM-DD').isValid()) {
      setError('Invalid date format');
      return;
    }

    const sevenDaysFromStartDate = moment(startDate, 'YYYY-MM-DD').add(7, 'days');
    if (moment(endDate, 'YYYY-MM-DD').isAfter(sevenDaysFromStartDate)) {
      setError('Date range should be within 7 days from the start date');
      return;
    }

    try {
      const response = await getAsteroidsList(startDate, endDate);
      setAsteroids(response.data);
    } catch (error) {
      setError('Error fetching asteroids');
      console.error('Error fetching asteroids:', error);
    }
  };



  return (
    <div className="container mt-4">
      <h2>Asteroids Landing Page</h2>
      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="startDate" className="form-label">Start Date:</label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="endDate" className="form-label">End Date:</label>
          <input
            type="date"
            className="form-control"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary mt-4" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {asteroids.length > 0 ? (
        <div>
          <h2>Asteroids List:</h2>
          <ul className="list-group">
             {asteroids.map((asteroid) => (
            <li key={asteroid.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              {asteroid.id} - {asteroid.name} - {asteroid.absolute_magnitude_h} - {asteroid.close_approach_data[0].miss_distance.astronomical} - {asteroid.isPotentiallyHazardous ? 'Potentially Hazardous' : 'Not Hazardous'}
            </div>
            <div>
            <Link to={`/asteroids/${asteroid.id}`} className="btn btn-info">
                Details
              </Link>
            </div>
          </li>
        ))}
      </ul>
        </div>
      ) : (
        <p>No asteroids found</p>
      )}
    </div>
  );
};

export default LandingPage;
