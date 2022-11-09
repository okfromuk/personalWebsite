import React, { useState, useEffect } from 'react';
import JotformEmbed from 'react-jotform-embed';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal';
import Accordion from 'react-bootstrap/Accordion';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  nameStyle: {
    fontSize: '5em',
  },
  inlineChild: {
    display: 'inline-block',
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return data ? (
    <Fade>
      <div className="mt-5" style={styles.mainContainer}>
        <h4>Hello everybody, I am</h4>
        <h1 style={styles.nameStyle}>{data?.name}</h1>
        <div style={{ flexDirection: 'row' }}>
          <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: data?.roles,
            }}
          />
        </div>
        <Social />
      </div>
      <div className="container mt-5">
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h3>Contact Me</h3>
            </Accordion.Header>
            <Accordion.Body>
              <JotformEmbed src="https://form.jotform.com/221511218293448" />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </Fade>
  ) : <FallbackSpinner />;
}

export default Home;
