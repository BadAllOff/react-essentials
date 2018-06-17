import React, {PureComponent} from 'react';
// import Article from './Article'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class App extends PureComponent {
  state = {
    reverted: false
  }
  // within components work with LOCAL variables
  // you can't know where else you are using received vars (props)
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className="">
            Intro to React concepts.
            <button className="btn-default"
                    onClick={this.revert}>Revert</button>
          </h1>
        </div>
        {/*{ work with immutable data. Do not make changes through linking }*/}
        <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles}/>
      </div>
    );
  }

  revert = () => {
    this.setState({
      reverted: !this.state.reverted
    })
  }

}

export default App