import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';

const title = 'MultiStores: a multi-tenant application';

class Home extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
        <h1 className="mdl-typography--title">Welcome to {title}!</h1>
        <h4 className="mdl-typography--title">Articles</h4>
        <ul>
          {this.props.articles.map((article) =>
            <li key={article.id}>
              <a href={article.link}>{article.title.rendered}</a> by {article.author}
            </li>
          )}
        </ul>
      </Layout>
    );
  }
}

export default Home;
