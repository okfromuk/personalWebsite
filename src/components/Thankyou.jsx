import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import { Container } from 'react-bootstrap';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

function Thankyou(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.thankyou, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />
      {data ? (
        <Fade>
          <div className="section-content-container">
            <Container>
              <div className="container">
                <div className="card-body">
                  <p>
                    <img className="activeTyIcon" src="https://cdn.jotfor.ms/img/check-icon.png" alt="" width="128" height="128" />
                  </p>
                  <div>
                    <h1>Thank You! We Will Get Back To You Soon</h1>
                    <p><strong>Your submission has been received.</strong></p>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </Fade>
      ) : <FallbackSpinner /> }
    </>
  );
}

Thankyou.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Thankyou;
