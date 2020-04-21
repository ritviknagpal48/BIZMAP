import React,{Component} from 'react';

class Categories extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
    <li className='sidebar-item' value="Contact Tracing">
        <a href='#' className='sidebar-link'>
          <i className='fa fa-phone' />
          <span className='hide-menu' onClick = {()=>this.props.change(this.props.index)}> {this.props.Category} </span>
        </a>
      </li>
        );
    }
}

export default Categories;