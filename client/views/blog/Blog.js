import React from 'react';
import Layout from '../../components/Layout';

class Blog extends React.Component {

  componentDidMount() {
    document.title = 'MultiStores: multi-tenant online stores';
  }

  render() {
    return (
      <Layout>
        <h1 className="mdl-typography--title">Blog Us</h1>
        <p className="mdl-typography--body-1">
          Blogs
        </p>
      </Layout>
    );
  }

}

export default Blog;
