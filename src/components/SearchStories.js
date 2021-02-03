import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doFetchStories } from '../action/story';
import Store from '../store/Index'
// import Button from './Button';
 
class SearchStories extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      query: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    const { query } = this.state;
    if (query) {
      this.props.onFetchStories(query)
 
      this.setState({ query: '' });
    }
 
    event.preventDefault();
  }
  onChange(event) {
    const { value } = event.target;
    if(value)
    {
      this.props.onFetchStories(value)
    }
    this.setState({ query: value });
  }
  componentDidMount(){
 Store.dispatch(doFetchStories());
  }
 
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.query}
          onChange={this.onChange}
        />
        <button type="submit" onClick={this.onSubmit}>SEARCH</button>
        {/* <Button type="submit">
          Search
        </Button> */}
      </form>
    );
  }
}
 
const mapDispatchToProps = (dispatch) => ({
  onFetchStories: query => dispatch(doFetchStories(query)),
});
 
export default connect(
  null,
  mapDispatchToProps
)(SearchStories);