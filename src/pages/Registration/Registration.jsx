import { useNavigate } from 'react-router-dom';
import './Registration.css';

function Registration() {
  const navigate = useNavigate();

  return (
    <div className="no-padding-wrapper">
      <div className="entry-container">
        <div className='logo'>
          <img src="/assets/logo.svg" alt="logo" />
        </div>
        <p className='slogan'>Welcome! Please select your category to begin the registration process.</p>

        <div className="card-container">
          <div className="card">
            <div className='hotel-card'>
            <div className="card-icon">
              <img className="bed-icon" src="/assets/bed.svg" alt="bed icon" />
            </div>
            <p>Hotel & Stays</p>
            <button onClick={() => navigate('/registration/hotel-step-one')}>Register Now</button>
            </div>
          </div>

          <div className="card">
            <div className='taxi-card'>
            <div className="card-icon">
              <img className='taxi-icon' src="/assets/taxi.svg" alt="taxi icon" />
            </div>
            <p>Taxi & Transport</p>
            <button onClick={() => navigate('/registration/taxi-step-one')}>Register Now</button>
            </div>
          </div>

          <div className="card">
            <div className='guide-card'>
            <div className="card-icon">
            <img src="/assets/guide.svg" alt="guide icon" className='guide-icon' />
            </div>
            <p className='guide'>Tour Guide</p>
            <button onClick={() => navigate('/registration/guide-step-one')}>Register Now</button>
            </div>
          </div>
        </div>

        <div>
          <button className='not-now'>Not now</button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
