import React from 'react';
import Layout from '../../components/Layout';

class About extends React.Component {

  componentDidMount() {
    document.title = 'About Us';
  }

  render() {
    return (
      <Layout>
        <h1 className="mdl-typography--title">About Us</h1>
        <p className="mdl-typography--body-1">
          Coming soon.
        </p>
      </Layout>
    );
  }

}

export default About;
