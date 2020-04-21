import React,{Component} from 'react';
import Graph from './Graph';
import { DiscussionForum } from './DiscussionForum';
import {ActiveCases} from './ActiveCases';
import {Twitter} from './Twitter';
import Categories from './Categories';

const Category = [
	{category:"Contact Tracing",id:1},
	{category:"Diagnostics",id:2},
	{category:"Employee Support",id:3},
	{category:"Infection Control",id:4},
	{category:"Medication",id:5},
	{category:"Patient Engagement",id:6},
	{category:"Portal",id:7},
	{category:"PPE",id:8},
	{category:"Support",id:9},
	{category:"Vaccinatory",id:10},
	{category:"Financial Support Providers",id:11},
	{category:"Telemedicine",id:12},
	{category:"Tele Education Resources",id:13},
	{category:"Covid Specific Hospitals",id:14},
	{category:" Free Food Providers",id:15},
	{category:"Patient Tracing Apps",id:16},
	{category:"Self Reporting Apps",id:17},
	{category:"Data Sets",id:18},
	{category:"Automobile Related",id:19},
	{category:"Skill Training",id:20},
	{category:"Mask Providers",id:21},
	{category:"Heat Map",id:22},
	{category:"Volunteering Org",id:23},
	{category:"Others",id:24},
	{category:"Unemployed",id:1},
	{category:"Volunteers",id:1},
]

class App extends Component {
    constructor(props){
    super(props);
    this.state = {
      category:[
        {selected:1,color:"#0953B8"},
        {selected:1,color:"#00C495"},
        {selected:1,color:"#984BFF"},
        {selected:1,color:"#D6D6D6"},
        {selected:1,color:"#77C600"},
        {selected:1,color:"#77C600"}
      ]
    }
  }

  toggle = (index)=>{
    var value = 1;
    console.log(this.state.category)
    for(var i=0;i<this.state.category.length;i++)
    {
        value = value*this.state.category[i].selected;
    }
    if(value===1)
    {
        for(var i=0;i<this.state.category.length;i++)
        {
            if(i!==index)
            {
              console.log("index",i);
              this.setState({category:{...this.state.category,[i]:{selected:0}}});
            }
        }
    }
    console.log(this.state.category);
    console.log(index);
  }
    render(){
        return (
    <div className='App'>
      <div
        id='main-wrapper'
        data-theme='light'
        data-layout='vertical'
        data-navbarbg='skin1'
        data-sidebartype='full'
        data-sidebar-position='fixed'
        data-header-position='fixed'
        data-boxed-layout='full'
      >
        {/* ============================================================== */}
        {/* Topbar header - style you can find in pages.scss */}
        {/* ============================================================== */}
        <header className='topbar' data-navbarbg='skin1'>
          <nav className='navbar top-navbar navbar-expand-md navbar-dark'>
            <div className='navbar-header' data-logobg='skin6'>
              {/* This is for the sidebar toggle which is visible on mobile only */}
              <a
                className='nav-toggler waves-effect waves-light d-block d-md-none'
                href='javascript:void(0)'
              >
                <i className='ti-menu ti-close' />
              </a>

              <a
                className='topbartoggler d-block d-md-none waves-effect waves-light'
                href='javascript:void(0)'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <i className='ti-more' />
              </a>
            </div>
            {/* ============================================================== */}
            {/* End Logo */}
            {/* ============================================================== */}
            <div
              className='navbar-collapse collapse'
              id='navbarSupportedContent'
              data-navbarbg='skin1'
            >
              {/* ============================================================== */}
              {/* toggle and nav items */}
              {/* ============================================================== */}
              <ul className='navbar-nav float-left mr-auto'>
                <li className='nav-item d-none d-md-block'>
                  <a
                    className='nav-link sidebartoggler waves-effect waves-light'
                    href='javascript:void(0)'
                    data-sidebartype='mini-sidebar'
                  >
                    <i className='fa fa-bars' />
                  </a>
                </li>
                {/* ============================================================== */}
                {/* Search */}
                {/* ============================================================== */}
                <li className='nav-item search-box'>
                  {' '}
                  <a
                    className='nav-link waves-effect waves-dark'
                    href='javascript:void(0)'
                  >
                    <i className='fa fa-search' />
                  </a>
                  <form className='app-search position-absolute'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Search & enter'
                    />{' '}
                    <a className='srh-btn'>
                      <i className='ti-close' />
                    </a>
                  </form>
                </li>
              </ul>
              {/* ============================================================== */}
              {/* Right side toggle and nav items */}
              {/* ============================================================== */}
              <ul className='navbar-nav float-right'>
              </ul>
            </div>
          </nav>
        </header>
        {/* ============================================================== */}
        {/* End Topbar header */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Left Sidebar - style you can find in sidebar.scss  */}
        {/* ============================================================== */}
        <aside className='left-sidebar' data-sidebarbg='skin6'>
          {/* Sidebar scroll*/}
          <div
            className='scroll-sidebar ps-container ps-theme-default ps-active-y'
            data-ps-id='bd2f6030-9e7b-5919-7bb1-cbc041d97ecb'
          >
            {/* Sidebar navigation*/}
            <nav className='sidebar-nav'>
                  <ul aria-expanded='false' className='collapse first-level in'>
                    {Category.map((category,index)=>{
                      return <Categories 
                                  Category={category.category} 
                                  key={index} 
                                  index={category.id}
                                  change = {this.toggle}
                                  ></Categories>
                    })}
                  </ul>
                </nav>
           </div>
        </aside>
        <div className='page-wrapper' style={{ display: 'block' }}>
          <div className='page-breadcrumb'>
            <div className='row'>
              <div className='col-5 align-self-center'>
                <h4 className='page-title'>Covid-19 Graph</h4>
                <div className='d-flex align-items-center'>
                  <nav aria-label='breadcrumb'>
                    <ol className='breadcrumb'>
                      <li className='breadcrumb-item'>
                        <a href='#'>Home</a>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className='col-7 align-self-center'>
                <div className='d-flex no-block justify-content-end align-items-center'>
                  <div className='mr-2'>
                    <div className='lastmonth'>
                      <canvas
                        width={76}
                        height={35}
                        style={{
                          display: 'inline-block',
                          width: '76px',
                          height: '35px',
                          verticalAlign: 'top'
                        }}
                      />
                    </div>
                  </div>
                  <div className>
                    <small>LAST MONTH</small>
                    <h4 className='text-info mb-0 font-medium'>58,256</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ============================================================== */}
          {/* End Bread crumb and right sidebar toggle */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* Container fluid  */}
          {/* ============================================================== */}
          <div className='container-fluid' >
            {/* ============================================================== */}
            {/* Sales chart */}
            {/* ============================================================== */}
            <div className='row'>
              <Graph></Graph>
            </div>
            {/* ============================================================== */}
            {/* Sales chart */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Email campaign chart */}
            {/* ============================================================== */}
            <div className='row' style={{marginTop: '20px'}}>
              <DiscussionForum></DiscussionForum>
              <ActiveCases></ActiveCases>
            </div>

            <div className="row">
           <Twitter></Twitter>

      
          </div>
          </div>
          {/* ============================================================== */}
          {/* End Container fluid  */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* footer */}
          {/* ============================================================== */}
          <footer className='footer text-center'>Disclamer: The data contained in this website is intended for general reference only and is meant for viewers in India only.</footer>
          {/* ============================================================== */}
          {/* End footer */}
          {/* ============================================================== */}
        </div>
        {/* ============================================================== */}
        {/* End Page wrapper  */}
        {/* ============================================================== */}
      </div>
    </div>
  );
}
}

export default App;
