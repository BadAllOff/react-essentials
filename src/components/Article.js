// PureComponent differs from Component
// has already implemented method
// shouldComponentUpdate(nextProps, nextState) {
//  return this.state.isOpen !== nextState.isOpen
// }
// DON'T USE IT EVERYWHERE
// can get several bugs which will be hard to find after
import React, {Component, PureComponent} from 'react';

class Article extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.defaultOpen,
      count: 0
    }
  }
  // good place to make server requests
  componentWillMount() {}
  render() {
    const {article} = this.props
    const body = this.state.isOpen &&
      <p className="card-text">{article.text}</p>
    return (
      <div className="card mx-auto" style={{width: '50%'}}>
        <div className='card-header'>
          <h3 onClick={this.incremetnCounter}>
            {article.title}
            &nbsp;
            <span className='badge badge-xs badge-success'>clicked: {this.state.count}</span>
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
  incremetnCounter = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  // componentDidMount
  // we can get info about size and placement of component
  // subscribe to listeners or to data changes
  // and more...
  componentDidMount() {
  }
  // componentWillReceiveProps
  // triggers ONLY if parent component changes and props have changed
  // nextProps - is new properties
  // It has use in case if we have new data set and
  // we need to react to it.
  // Or, if we bind our state on properties, and now
  // we have to watch changes in properties and maybe
  // to keep state in needed condition
  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
      isOpen: nextProps.defaultOpen
    })
  }
  // shouldComponentUpdate
  // if class extends PureComponent, no need to implement this method
  // triggers everytime
  // returns boolean to upgrade or not
  // helps to optimize our app
  // identifies if there is need to change component or not
  // shouldComponentUpdate(nextProps, nextState) {
    // dangerous use
    // return this.state.isOpen !== nextState.isOpen
  // }

  // componentWillUpdate
  // triggers everytime
  // warns us that now we will change component
  // here we can also react to any changes in state or props
  // render starts after this method
  componentWillUpdate(nextProps, nextState) {}
  // componentDidUpdate(prevProps, PrevState)
  // current state and props will live in this.state & this.props
  // mostly it's used if we need to get info about components of REAL DOM
  componentDidUpdate(prevProps, PrevState) {}
  // componentWilllUnmount()
  // triggered before component deleted
  // great place to clean up subscriptions
  // maybe in real DOM states
  //  maybe in data set
  componentWillUnmount() {}
}
export default Article