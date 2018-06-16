import React, {Component} from 'react';

class Article extends Component{
  state = {
    isOpen: true
  }

  render() {
    const {article} = this.props
    const body = this.state.isOpen && <p className="card-text">{article.text}</p>
    return (
      <div className="card mx-auto" style={{width:'50%'}}>
        <div className='card-header'>
          <h3>
            {article.title}
            &nbsp;
            {/* handleClick.bind.this - DON"T do that */}
            <button onClick={this.handleClick} className='btn btn-info btn-xs'>
              {this.state.isOpen ? 'close' : 'open'}
            </button>
          </h3>
        </div>
        <div className='card-body'>
          <h6 className='card-subtitle text-muted'>
            creation date: {(new Date(article.date)).toDateString()}
          </h6>
          {body}
        </div>
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