import React from 'react';

class CommentsInputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const value = event.target.value;
    this.setState({
      input: value,
    })
  }

  handleSubmit(event) {
    this.props.addComment(this.state.input);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.input} onChange={this.handleChange} />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default CommentsInputBar;
