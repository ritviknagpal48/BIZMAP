import React,{Component} from 'react';

class Categories extends Component{
    constructor(props){
        super(props);
    }

    render(){
      if(this.props.category[this.props.index-1].selected==1)
      {
        return(
    <li className='sidebar-item' value="Contact Tracing">
        <a href='#' className='sidebar-link'>
          <i className={this.props.icons} style={{color:`${this.props.category[this.props.index-1].color}`}} />
          <span className='hide-menu' onClick = {(e)=>this.props.change(e,this.props.index)} style={{color:`${this.props.category[this.props.index-1].color}`}}> {this.props.Category} </span>
        </a>
      </li>
        );
    }
    else{
      return(
        <li className='sidebar-item' value="Contact Tracing">
            <a href='#' className='sidebar-link'>
              <i className={this.props.icons} />
              <span className='hide-menu' onClick = {(e)=>this.props.change(e,this.props.index)}> {this.props.Category} </span>
            </a>
          </li>
            );
    }
  }
}

export default Categories;