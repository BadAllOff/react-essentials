import React, {Component} from 'react';

class Article extends Component{
  state = {
    isOpen: true
  }

  render() {
    const {article} = this.props
    const body = this.state.isOpen && <p className="app-title">{article.text}</p>
    return (
      <div className="app">
        <h3>
          {article.title}
          {/* handleClick.bind.this - DON"T do that */}
          <button onClick={this.handleClick}>
            {this.state.isOpen ? 'close' : 'open'}
          </button>
        </h3>
        {body}
        creation date: {(new Date(article.date)).toDateString()}
      </div>
    );
  }
  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default Article