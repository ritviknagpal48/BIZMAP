import React, { Component } from 'react';

class Categories extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.category[this.props.index].selected == 1) {
      return (
        <li className='sidebar-item' value='Contact Tracing'>
          <a href='#' className='sidebar-link'>
            <i
              className={this.props.icons}
              onClick={e => this.props.change(e, this.props.index)}
              style={{
                color: `${this.props.category[this.props.index].color}`,
                textShadow: '0 0 black'
              }}
            />
            <span
              className='hide-menu'
              onClick={e => this.props.change(e, this.props.index)}
              style={{
                color: `${this.props.category[this.props.index].color}`,
                textShadow: '0 0 1px black'
              }}
            >
              {' '}
              {this.props.Category}{' '}
            </span>
          </a>
        </li>
      );
    } else {
      return (
        <li className='sidebar-item' value='Contact Tracing'>
          <a href='#' className='sidebar-link'>
            <i
              className={this.props.icons}
              onClick={e => this.props.change(e, this.props.index)}
            />
            <span
              className='hide-menu'
              onClick={e => this.props.change(e, this.props.index)}
            >
              {' '}
              {this.props.Category}{' '}
            </span>
          </a>
        </li>
      );
    }
  }
}

export default Categories;
