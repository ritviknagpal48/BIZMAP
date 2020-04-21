import React from 'react';
import Graph from './Graph';
import { Icon } from 'semantic-ui-react';
import { DiscussionForum } from './DiscussionForum';
import {ActiveCases} from './ActiveCases';
import {Twitter} from './Twitter';


class App extends React.Component {
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
                {/* ============================================================== */}
                {/* create new */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* Comment */}
                {/* ============================================================== */}
                
                {/* ============================================================== */}
                {/* End Messages */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* User profile and search */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* User profile and search */}
                {/* ============================================================== */}
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
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-phone' />
                        <span className='hide-menu' value="Contact Tracing"> Contact Tracing </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-certificate' />
                        <span className='hide-menu' value="Diagnostics"> Diagnostics </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-users' />
                        <span className='hide-menu' value="Employee Support"> Employee Support </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-exclamation-triangle' />
                        <span className='hide-menu' value="Infection Control"> Infection Control </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-plus' />
                        <span className='hide-menu' value="Medication"> Medication </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-user' />
                        <span className='hide-menu' value="Patient Engagement"> Patient Engagement </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-lock' />
                        <span className='hide-menu' value="Portal"> Portal </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-medkit' />
                        <span className='hide-menu' value="PPE"> PPE </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-cogs' />
                        <span className='hide-menu' value="Supports"> Supports </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-user-md' />
                        <span className='hide-menu' value="Vaccinatory"> Vaccinatory </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-credit-card' />
                        <span className='hide-menu' value="Financial Support Providers"> Financial Support Providers </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-stethoscope' />
                        <span className='hide-menu' value="Telemedicine"> Telemedicine </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-mobile' />
                        <span className='hide-menu' value="Tele Education Resources"> Tele Education Resources </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-hospital' />
                        <span className='hide-menu' value="Covid Specific Hospitals"> Covid Specific Hospitals </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-glass' />
                        <span className='hide-menu' value="Free Food Providers"> Free Food Providers </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-search' />
                        <span className='hide-menu' value="Patient Tracing Apps"> Patient Tracing Apps </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu' value="Self Reporting Apps"> Self Reporting Apps </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu' value="Data Sets"> Data Sets </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu' value="Automobile Related"> Automobile related </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu' value="Skill Training"> Skill Training </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu' value="Mask Providers"> Mask Providers </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu' value="HeatMap"> HeatMap </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu' value="Volunteering Org"> Volunteering Org </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu' value="Others"> Others </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu' value="Unemployed"> Unemployed </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu' value="Volunteers"> Volunteers </span>
                      </a>
                    </li>
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
