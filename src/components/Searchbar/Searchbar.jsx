import { Component } from 'react';
import { StyledSearchbarHeader } from './Searchbar.styled';
import { toast } from 'react-toastify';
import {ReactComponent as SearchIcon} from './search.svg'

export class Searchbar extends Component {
  state = {
    query: '',
  };
  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query.trim() === '') {
      return toast.warning('Please enter key words for the search');
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <>
      <StyledSearchbarHeader>
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="buttonLabel"><SearchIcon/></span>
          </button>

          <input
            className="input"
            type="text"
            name="query"
            value={query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </StyledSearchbarHeader>
     
      </>
    );
  }
}
