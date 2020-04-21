import React from 'react';
import Graph from './Graph';
import { Icon } from 'semantic-ui-react';
import { DiscussionForum } from './DiscussionForum';
import {ActiveCases} from './ActiveCases';
import {Twitter} from './Twitter';


function App() {
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
                    <i className='mdi mdi-menu font-24' />
                  </a>
                </li>
                {/* ============================================================== */}
                {/* mega menu */}
                {/* ============================================================== */}
                <li className='nav-item dropdown mega-dropdown'>
                  <a
                    className='nav-link dropdown-toggle waves-effect waves-dark'
                    href='#'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <span className='d-none d-md-block'>
                      Mega <i className='fa fa-angle-down' />
                    </span>
                    <span className='d-block d-md-none'>
                      <i className='mdi mdi-dialpad font-24' />
                    </span>
                  </a>
                  <div className='dropdown-menu animated bounceInDown'>
                    <div className='mega-dropdown-menu row'>
                      <div className='col-lg-3 col-xlg-2 mb-4'>
                        <h4 className='mb-3'>CAROUSEL</h4>
                        {/* CAROUSEL */}
                        <div
                          id='carouselExampleControls'
                          className='carousel slide'
                          data-ride='carousel'
                        >
                          <div className='carousel-inner' role='listbox'>
                            <div className='carousel-item active'>
                              <div className='container p-0'>
                                {' '}
                                <img
                                  className='d-block img-fluid'
                                  src='./Xtreme admin Template - The Ultimate Multipurpose admin template_files/img1.jpg'
                                  alt='First slide'
                                />
                              </div>
                            </div>
                            <div className='carousel-item'>
                              <div className='container p-0'>
                                <img
                                  className='d-block img-fluid'
                                  src='./Xtreme admin Template - The Ultimate Multipurpose admin template_files/img2.jpg'
                                  alt='Second slide'
                                />
                              </div>
                            </div>
                            <div className='carousel-item'>
                              <div className='container p-0'>
                                <img
                                  className='d-block img-fluid'
                                  src='./Xtreme admin Template - The Ultimate Multipurpose admin template_files/img3.jpg'
                                  alt='Third slide'
                                />
                              </div>
                            </div>
                          </div>
                          <a
                            className='carousel-control-prev'
                            href='#'
                            role='button'
                            data-slide='prev'
                          >
                            {' '}
                            <span
                              className='carousel-control-prev-icon'
                              aria-hidden='true'
                            />{' '}
                            <span className='sr-only'>Previous</span>{' '}
                          </a>
                          <a
                            className='carousel-control-next'
                            href='#'
                            role='button'
                            data-slide='next'
                          >
                            {' '}
                            <span
                              className='carousel-control-next-icon'
                              aria-hidden='true'
                            />{' '}
                            <span className='sr-only'>Next</span>{' '}
                          </a>
                        </div>
                        {/* End CAROUSEL */}
                      </div>
                      <div className='col-lg-3 mb-4'>
                        <h4 className='mb-3'>ACCORDION</h4>
                        {/* Accordian */}
                        <div id='accordion'>
                          <div className='card mb-1'>
                            <div className='card-header' id='headingOne'>
                              <h5 className='mb-0'>
                                <button
                                  className='btn btn-link'
                                  data-toggle='collapse'
                                  data-target='#collapseOne'
                                  aria-expanded='true'
                                  aria-controls='collapseOne'
                                >
                                  Collapsible Group Item #1
                                </button>
                              </h5>
                            </div>
                            <div
                              id='collapseOne'
                              className='collapse show'
                              aria-labelledby='headingOne'
                              data-parent='#accordion'
                            >
                              <div className='card-body'>
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry.
                              </div>
                            </div>
                          </div>
                          <div className='card mb-1'>
                            <div className='card-header' id='headingTwo'>
                              <h5 className='mb-0'>
                                <button
                                  className='btn btn-link collapsed'
                                  data-toggle='collapse'
                                  data-target='#collapseTwo'
                                  aria-expanded='false'
                                  aria-controls='collapseTwo'
                                >
                                  Collapsible Group Item #2
                                </button>
                              </h5>
                            </div>
                            <div
                              id='collapseTwo'
                              className='collapse'
                              aria-labelledby='headingTwo'
                              data-parent='#accordion'
                            >
                              <div className='card-body'>
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry.
                              </div>
                            </div>
                          </div>
                          <div className='card mb-1'>
                            <div className='card-header' id='headingThree'>
                              <h5 className='mb-0'>
                                <button
                                  className='btn btn-link collapsed'
                                  data-toggle='collapse'
                                  data-target='#collapseThree'
                                  aria-expanded='false'
                                  aria-controls='collapseThree'
                                >
                                  Collapsible Group Item #3
                                </button>
                              </h5>
                            </div>
                            <div
                              id='collapseThree'
                              className='collapse'
                              aria-labelledby='headingThree'
                              data-parent='#accordion'
                            >
                              <div className='card-body'>
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-3  mb-4'>
                        <h4 className='mb-3'>CONTACT US</h4>
                        {/* Contact */}
                        <form>
                          <div className='form-group'>
                            <input
                              type='text'
                              className='form-control'
                              id='exampleInputname1'
                              placeholder='Enter Name'
                            />{' '}
                          </div>
                          <div className='form-group'>
                            <input
                              type='email'
                              className='form-control'
                              placeholder='Enter email'
                            />{' '}
                          </div>
                          <div className='form-group'>
                            <textarea
                              className='form-control'
                              id='exampleTextarea'
                              rows={3}
                              placeholder='Message'
                              defaultValue={''}
                            />
                          </div>
                          <button type='submit' className='btn btn-info'>
                            Submit
                          </button>
                        </form>
                      </div>
                      <div className='col-lg-3 col-xlg-4 mb-4'>
                        <h4 className='mb-3'>List style</h4>
                        {/* List style */}
                        <ul className='list-style-none'>
                          <li>
                            <a href='javascript:void(0)'>
                              <i className='fa fa-check text-success' /> You can
                              give link
                            </a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              <i className='fa fa-check text-success' /> Give
                              link
                            </a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              <i className='fa fa-check text-success' /> Another
                              Give link
                            </a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              <i className='fa fa-check text-success' /> Forth
                              link
                            </a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              <i className='fa fa-check text-success' /> Another
                              fifth link
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                {/* ============================================================== */}
                {/* End mega menu */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* create new */}
                {/* ============================================================== */}
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <span className='d-none d-md-block'>
                      Create New <i className='fa fa-angle-down' />
                    </span>
                    <span className='d-block d-md-none'>
                      <i className='fa fa-plus' />
                    </span>
                  </a>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown'
                  >
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
                    <div className='dropdown-divider' />
                    <a className='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </div>
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
                    <i className='ti-search' />
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
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='navbarDropdown2'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <i className='flag-icon flag-icon-us' />
                  </a>
                  <div
                    className='dropdown-menu dropdown-menu-right  animated bounceInDown'
                    aria-labelledby='navbarDropdown2'
                  >
                    <a className='dropdown-item' href='#'>
                      <i className='flag-icon flag-icon-us' /> English
                    </a>
                    <a className='dropdown-item' href='#'>
                      <i className='flag-icon flag-icon-fr' /> French
                    </a>
                    <a className='dropdown-item' href='#'>
                      <i className='flag-icon flag-icon-es' /> Spanish
                    </a>
                    <a className='dropdown-item' href='#'>
                      <i className='flag-icon flag-icon-de' /> German
                    </a>
                  </div>
                </li>
                {/* ============================================================== */}
                {/* Comment */}
                {/* ============================================================== */}
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle waves-effect waves-dark'
                    href='#'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    {' '}
                    <i className='mdi mdi-bell font-24' />
                  </a>
                  <div className='dropdown-menu dropdown-menu-right mailbox animated bounceInDown'>
                    <span className='with-arrow'>
                      <span className='bg-primary' />
                    </span>
                    <ul className='list-style-none'>
                      <li>
                        <div className='drop-title bg-primary text-white'>
                          <h4 className='mb-0 mt-1'>4 New</h4>
                          <span className='font-light'>Notifications</span>
                        </div>
                      </li>
                      <li>
                        <div
                          className='message-center notifications ps-container ps-theme-default'
                          data-ps-id='286af88c-3d9f-8a4b-be16-bc971fc31e05'
                        >
                          {/* Message */}
                          <a href='javascript:void(0)' className='message-item'>
                            <span className='btn btn-danger btn-circle'>
                              <i className='fa fa-link' />
                            </span>
                            <div className='mail-contnet'>
                              <h5 className='message-title'>Luanch Admin</h5>{' '}
                              <span className='mail-desc'>
                                Just see the my new admin!
                              </span>{' '}
                              <span className='time'>9:30 AM</span>{' '}
                            </div>
                          </a>
                          {/* Message */}
                          <a href='javascript:void(0)' className='message-item'>
                            <span className='btn btn-success btn-circle'>
                              <i className='ti-calendar' />
                            </span>
                            <div className='mail-contnet'>
                              <h5 className='message-title'>Event today</h5>{' '}
                              <span className='mail-desc'>
                                Just a reminder that you have event
                              </span>{' '}
                              <span className='time'>9:10 AM</span>{' '}
                            </div>
                          </a>
                          {/* Message */}
                          <a href='javascript:void(0)' className='message-item'>
                            <span className='btn btn-info btn-circle'>
                              <i className='ti-settings' />
                            </span>
                            <div className='mail-contnet'>
                              <h5 className='message-title'>Settings</h5>{' '}
                              <span className='mail-desc'>
                                You can customize this template as you want
                              </span>{' '}
                              <span className='time'>9:08 AM</span>{' '}
                            </div>
                          </a>
                          {/* Message */}
                          <a href='javascript:void(0)' className='message-item'>
                            <span className='btn btn-primary btn-circle'>
                              <i className='ti-user' />
                            </span>
                            <div className='mail-contnet'>
                              <h5 className='message-title'>Pavan kumar</h5>{' '}
                              <span className='mail-desc'>
                                Just see the my admin!
                              </span>{' '}
                              <span className='time'>9:02 AM</span>{' '}
                            </div>
                          </a>
                          <div
                            className='ps-scrollbar-x-rail'
                            style={{ left: '0px', bottom: '0px' }}
                          >
                            <div
                              className='ps-scrollbar-x'
                              tabIndex={0}
                              style={{ left: '0px', width: '0px' }}
                            />
                          </div>
                          <div
                            className='ps-scrollbar-y-rail'
                            style={{ top: '0px', right: '3px' }}
                          >
                            <div
                              className='ps-scrollbar-y'
                              tabIndex={0}
                              style={{ top: '0px', height: '0px' }}
                            />
                          </div>
                        </div>
                      </li>
                      <li>
                        <a
                          className='nav-link text-center mb-1 text-dark'
                          href='javascript:void(0);'
                        >
                          {' '}
                          <strong>Check all notifications</strong>{' '}
                          <i className='fa fa-angle-right' />{' '}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* ============================================================== */}
                {/* End Comment */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* Messages */}
                {/* ============================================================== */}
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle waves-effect waves-dark'
                    href='#'
                    id={2}
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    {' '}
                    <i className='font-24 mdi mdi-comment-processing' />
                  </a>
                  <div
                    className='dropdown-menu dropdown-menu-right mailbox animated bounceInDown'
                    aria-labelledby={2}
                  >
                    <span className='with-arrow'>
                      <span className='bg-danger' />
                    </span>
                    <ul className='list-style-none'>
                      <li>
                        <div className='drop-title text-white bg-danger'>
                          <h4 className='mb-0 mt-1'>5 New</h4>
                          <span className='font-light'>Messages</span>
                        </div>
                      </li>
                      <li>
                        <div
                          className='message-center message-body ps-container ps-theme-default'
                          data-ps-id='0f36e081-4e35-1d95-122e-045f0699847f'
                        >
                          {/* Message */}
                          <a href='javascript:void(0)' className='message-item'>
                            <span className='user-img'>
                              {' '}
                              <img
                                src='./Xtreme admin Template - The Ultimate Multipurpose admin template_files/1.jpg'
                                alt='user'
                                className='rounded-circle'
                              />{' '}
                              <span className='profile-status online pull-right' />{' '}
                            </span>
                            <div className='mail-contnet'>
                              <h5 className='message-title'>Pavan kumar</h5>{' '}
                              <span className='mail-desc'>
                                Just see the my admin!
                              </span>{' '}
                              <span className='time'>9:30 AM</span>{' '}
                            </div>
                          </a>
                          {/* Message */}
                          <a href='javascript:void(0)' className='message-item'>
                            <span className='user-img'>
                              {' '}
                              <img
                                src='./Xtreme admin Template - The Ultimate Multipurpose admin template_files/2.jpg'
                                alt='user'
                                className='rounded-circle'
                              />{' '}
                              <span className='profile-status busy pull-right' />{' '}
                            </span>
                            <div className='mail-contnet'>
                              <h5 className='message-title'>Sonu Nigam</h5>{' '}
                              <span className='mail-desc'>
                                I've sung a song! See you at
                              </span>{' '}
                              <span className='time'>9:10 AM</span>{' '}
                            </div>
                          </a>
                          {/* Message */}
                          <a href='javascript:void(0)' className='message-item'>
                            <span className='user-img'>
                              {' '}
                              <img
                                src='./Xtreme admin Template - The Ultimate Multipurpose admin template_files/3.jpg'
                                alt='user'
                                className='rounded-circle'
                              />{' '}
                              <span className='profile-status away pull-right' />{' '}
                            </span>
                            <div className='mail-contnet'>
                              <h5 className='message-title'>Arijit Sinh</h5>{' '}
                              <span className='mail-desc'>I am a singer!</span>{' '}
                              <span className='time'>9:08 AM</span>{' '}
                            </div>
                          </a>
                          {/* Message */}
                          <a href='javascript:void(0)' className='message-item'>
                            <span className='user-img'>
                              {' '}
                              <img
                                src='./Xtreme admin Template - The Ultimate Multipurpose admin template_files/4.jpg'
                                alt='user'
                                className='rounded-circle'
                              />{' '}
                              <span className='profile-status offline pull-right' />{' '}
                            </span>
                            <div className='mail-contnet'>
                              <h5 className='message-title'>Pavan kumar</h5>{' '}
                              <span className='mail-desc'>
                                Just see the my admin!
                              </span>{' '}
                              <span className='time'>9:02 AM</span>{' '}
                            </div>
                          </a>
                          <div
                            className='ps-scrollbar-x-rail'
                            style={{ left: '0px', bottom: '0px' }}
                          >
                            <div
                              className='ps-scrollbar-x'
                              tabIndex={0}
                              style={{ left: '0px', width: '0px' }}
                            />
                          </div>
                          <div
                            className='ps-scrollbar-y-rail'
                            style={{ top: '0px', right: '3px' }}
                          >
                            <div
                              className='ps-scrollbar-y'
                              tabIndex={0}
                              style={{ top: '0px', height: '0px' }}
                            />
                          </div>
                        </div>
                      </li>
                      <li>
                        <a
                          className='nav-link text-center link text-dark'
                          href='javascript:void(0);'
                        >
                          {' '}
                          <b>See all e-Mails</b>{' '}
                          <i className='fa fa-angle-right' />{' '}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* ============================================================== */}
                {/* End Messages */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* User profile and search */}
                {/* ============================================================== */}
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic'
                    href='#'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <img
                      src='./Xtreme admin Template - The Ultimate Multipurpose admin template_files/1.jpg'
                      alt='user'
                      className='rounded-circle'
                      width={31}
                    />
                  </a>
                  <div className='dropdown-menu dropdown-menu-right user-dd animated flipInY'>
                    <span className='with-arrow'>
                      <span className='bg-primary' />
                    </span>
                    <div className='d-flex no-block align-items-center p-15 bg-primary text-white mb-2'>
                      <div className>
                        <img
                          src='./Xtreme admin Template - The Ultimate Multipurpose admin template_files/1.jpg'
                          alt='user'
                          className='img-circle'
                          width={60}
                        />
                      </div>
                    </div>
                    <a className='dropdown-item' href='javascript:void(0)'>
                      <i className='ti-user mr-1 ml-1' /> My Profile
                    </a>
                    <a className='dropdown-item' href='javascript:void(0)'>
                      <i className='ti-wallet mr-1 ml-1' /> My Balance
                    </a>
                    <a className='dropdown-item' href='javascript:void(0)'>
                      <i className='ti-email mr-1 ml-1' /> Inbox
                    </a>
                    <div className='dropdown-divider' />
                    <a className='dropdown-item' href='javascript:void(0)'>
                      <i className='ti-settings mr-1 ml-1' /> Account Setting
                    </a>
                    <div className='dropdown-divider' />
                    <a className='dropdown-item' href='javascript:void(0)'>
                      <i className='fa fa-power-off mr-1 ml-1' /> Logout
                    </a>
                    <div className='dropdown-divider' />
                    <div className='pl-4 p-10'>
                      <a
                        href='javascript:void(0)'
                        className='btn btn-sm btn-success btn-rounded'
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </li>
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
                    <li className='sidebar-item active'>
                      <a href='#' className='sidebar-link active'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Contact Tracing </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Diagnostics </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Employee Support </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Infection Control </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Medication </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Patient Engagement </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Portal </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> PPE </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Supports </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Vaccinatory </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Financial Support Providers </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Telemedicin </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Tele Education Resources </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Covid Specific Hospitals </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Free Food Providers </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Patient Tracing Apps </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Self Reporting Apps </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Data Sets </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Automobile related </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Skill Training </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Mask Providers </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> HeatMap </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Volunteering Org </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Others </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Unemployed </span>
                      </a>
                    </li>
                   <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='fa fa-bars' />
                        <span className='hide-menu'> Volunteers </span>
                      </a>
                    </li>
                  </ul>
                </nav>
           </div>
        </aside>
        {/* ============================================================== */}
        {/* End Left Sidebar - style you can find in sidebar.scss  */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Page wrapper  */}
        {/* ============================================================== */}
        <div className='page-wrapper' style={{ display: 'block' }}>
          {/* ============================================================== */}
          {/* Bread crumb and right sidebar toggle */}
          {/* ============================================================== */}
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
          <footer className='footer text-center'>Footer Goes Here!!</footer>
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

export default App;
