import React, {Component} from 'react';
// import Article from './Article'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  state = {
    reverted: false
  }

  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className="">
            Intro to React concepts.
            <button className="btn-default" onClick={this.revert}>Revert</button>
          </h1>
        </div>
        <ArticleList articles={this.state.reverted ? articles.reverse() : articles}/>
      </div>
    );
  }

  revert = () => this.setState({
    reverted: !this.state.reverted
  })

}

export default App