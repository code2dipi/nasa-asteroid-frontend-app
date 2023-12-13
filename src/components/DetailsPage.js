// DetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAsteroidDetails } from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../details.css'; 
const DetailsPage = () => {
  const { asteroidId } = useParams();
  const [asteroidDetails, setAsteroidDetails] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAsteroidDetails = async () => {
      try {
        const response = await getAsteroidDetails(asteroidId);
        console.log(response.data)
        setAsteroidDetails(response.data);
      } catch (error) {
        setError('Error fetching asteroid details');
        console.error('Error fetching asteroid details:', error);
      }
    };

    fetchAsteroidDetails();
  }, [asteroidId]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mt-4">
      <h2>View Asteroid Details: </h2>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {asteroidDetails ? (
        <div>
          <p>Asteroid Name: {asteroidDetails.name}</p>
          <p>ID: {asteroidDetails.id}</p>
          <p>Is Potentially Hazardous: {asteroidDetails.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</p>
          <p>Absolute_magnitude_h: {asteroidDetails.absolute_magnitude_h}</p>
          <p>Estimated-diameter-min: {asteroidDetails.estimated_diameter.kilometers.estimated_diameter_min}</p>
          <p>Estimated-diameter-max: {asteroidDetails.estimated_diameter.kilometers.estimated_diameter_max}</p>
          <p>Close approach date: {asteroidDetails.close_approach_data[0].close_approach_date}</p>
          <p>Close approach date full: {asteroidDetails.close_approach_data[0].close_approach_date_full}</p>
          <p>Epoch time: {asteroidDetails.close_approach_data[0].epoch_date_close_approach}</p>
          <p>Relative velocity(km/h): {asteroidDetails.close_approach_data[0].relative_velocity.kilometers_per_hour}</p>
          <p>Relative velocity(km/s): {asteroidDetails.close_approach_data[0].relative_velocity.kilometers_per_second}</p>
          <p>Magnitude: {asteroidDetails.close_approach_data[0].miss_distance.miles}</p>
          <p>Miss-distance(astronomical): {asteroidDetails.close_approach_data[0].miss_distance.astronomical}</p>
          <p>Miss-distance(lunar): {asteroidDetails.close_approach_data[0].miss_distance.lunar}</p>
          <p>Miss-distance(kilometers): {asteroidDetails.close_approach_data[0].miss_distance.kilometers}</p>
          <p>Miss-distance(miles): {asteroidDetails.close_approach_data[0].miss_distance.miles}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading asteroid details...</p>
      )}

      <button className="btn btn-secondary mt-3" onClick={goBack}>
        Back
      </button>
    </div>
  );
};

export default DetailsPage;