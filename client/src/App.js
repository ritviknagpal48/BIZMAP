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
              {/* ============================================================== */}
              {/* Logo */}
              {/* ============================================================== */}
              <a className='navbar-brand' href='#'>
                {/* Logo icon */}
                <b className='logo-icon'>
                  {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
                  {/* Dark Logo icon */}
                  <img
                    src='./Xtreme admin Template - The Ultimate Multipurpose admin template_files/logo-icon.png'
                    alt='homepage'
                    className='dark-logo'
                  />
                  {/* Light Logo icon */}
                  <img
                    src='./Xtreme admin Template - The Ultimate Multipurpose admin template_files/logo-light-icon.png'
                    alt='homepage'
                    className='light-logo'
                  />
                </b>
                {/*End Logo icon */}
                {/* Logo text */}
                <span className='logo-text'>
                  {/* dark Logo text */}
                  <img
                    src='./Xtreme admin Template - The Ultimate Multipurpose admin template_files/logo-text.png'
                    alt='homepage'
                    className='dark-logo'
                  />
                  {/* Light Logo text */}
                  <img
                    src='./Xtreme admin Template - The Ultimate Multipurpose admin template_files/logo-light-text.png'
                    className='light-logo'
                    alt='homepage'
                  />
                </span>
              </a>
              {/* ============================================================== */}
              {/* End Logo */}
              {/* ============================================================== */}
              {/* ============================================================== */}
              {/* Toggle which is visible on mobile only */}
              {/* ============================================================== */}
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
                      <div className='ml-2'>
                        <h4 className='mb-0'>Steave Jobs</h4>
                        <p className=' mb-0'>varun@gmail.com</p>
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
              <ul id='sidebarnav' className='in'>
                {/* User Profile*/}
                <li>
                  {/* User Profile*/}
                  <div className='user-profile d-flex no-block dropdown mt-3'>
                    <div className='user-pic'>
                      <img
                        src='./Xtreme admin Template - The Ultimate Multipurpose admin template_files/1.jpg'
                        alt='users'
                        className='rounded-circle'
                        width={40}
                      />
                    </div>
                    <div className='user-content hide-menu ml-2'>
                      <a
                        href='javascript:void(0)'
                        className
                        id='Userdd'
                        role='button'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        <h5 className='mb-0 user-name font-medium'>
                          Steave Jobs <i className='fa fa-angle-down' />
                        </h5>
                        <span className='op-5 user-email'>varun@gmail.com</span>
                      </a>
                      <div
                        className='dropdown-menu dropdown-menu-right'
                        aria-labelledby='Userdd'
                      >
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
                          <i className='ti-settings mr-1 ml-1' /> Account
                          Setting
                        </a>
                        <div className='dropdown-divider' />
                        <a className='dropdown-item' href='javascript:void(0)'>
                          <i className='fa fa-power-off mr-1 ml-1' /> Logout
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End User Profile*/}
                </li>
                <li className='p-15 mt-2'>
                  <a
                    href='javascript:void(0)'
                    className='btn btn-block create-btn text-white no-block d-flex align-items-center'
                  >
                    <i className='fa fa-plus-square' />{' '}
                    <span className='hide-menu ml-1'>Create New</span>{' '}
                  </a>
                </li>
                {/* User Profile*/}
                <li className='nav-small-cap'>
                  <i className='mdi mdi-dots-horizontal' />{' '}
                  <span className='hide-menu'>Personal</span>
                </li>
                <li className='sidebar-item selected'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark active'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-home feather-icon'
                    >
                      <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
                      <polyline points='9 22 9 12 15 12 15 22' />
                    </svg>
                    <span className='hide-menu'>Dashboard </span>
                  </a>
                  <ul aria-expanded='false' className='collapse first-level in'>
                    <li className='sidebar-item active'>
                      <a href='#' className='sidebar-link active'>
                        <i className='mdi mdi-adjust' />
                        <span className='hide-menu'> Classic </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-adjust' />
                        <span className='hide-menu'> Analytical </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-adjust' />
                        <span className='hide-menu'> Cryptocurrency </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-adjust' />
                        <span className='hide-menu'> Overview </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-adjust' />
                        <span className='hide-menu'> E-Commerce </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-adjust' />
                        <span className='hide-menu'> Sales </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-adjust' />
                        <span className='hide-menu'> General </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-adjust' />
                        <span className='hide-menu'> Trendy </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-adjust' />
                        <span className='hide-menu'> Campaign </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-adjust' />
                        <span className='hide-menu'> Modern </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-sidebar feather-icon'
                    >
                      <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                      <line x1={9} y1={3} x2={9} y2={21} />
                    </svg>
                    <span className='hide-menu'>Sidebar Type </span>
                  </a>
                  <ul aria-expanded='false' className='collapse  first-level'>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-view-quilt' />
                        <span className='hide-menu'> Minisidebar </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-view-parallel' />
                        <span className='hide-menu'> Icon Sidebar </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-view-day' />
                        <span className='hide-menu'> Overlay Sidebar </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-view-array' />
                        <span className='hide-menu'> Full Sidebar </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-view-module' />
                        <span className='hide-menu'> Horizontal Sidebar </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-clipboard feather-icon'
                    >
                      <path d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' />
                      <rect x={8} y={2} width={8} height={4} rx={1} ry={1} />
                    </svg>
                    <span className='hide-menu'>Page Layouts </span>
                  </a>
                  <ul aria-expanded='false' className='collapse  first-level'>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-format-align-left' />
                        <span className='hide-menu'>
                          {' '}
                          Inner Fixed Left Sidebar{' '}
                        </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-format-align-right' />
                        <span className='hide-menu'>
                          {' '}
                          Inner Fixed Right Sidebar{' '}
                        </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-format-float-left' />
                        <span className='hide-menu'> Inner Left Sidebar </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-format-float-right' />
                        <span className='hide-menu'> Inner Right Sidebar </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-view-quilt' />
                        <span className='hide-menu'> Fixed Header </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-view-parallel' />
                        <span className='hide-menu'> Fixed Sidebar </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-view-column' />
                        <span className='hide-menu'>
                          {' '}
                          Fixed Header &amp; Sidebar{' '}
                        </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-view-carousel' />
                        <span className='hide-menu'> Box Layout </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='nav-small-cap'>
                  <i className='mdi mdi-dots-horizontal' />{' '}
                  <span className='hide-menu'>Apps</span>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    href='#'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-message-circle feather-icon'
                    >
                      <path d='M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z' />
                    </svg>
                    <span className='hide-menu'>Chat Apps</span>
                  </a>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/app-todo.html'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-check-circle feather-icon'
                    >
                      <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
                      <polyline points='22 4 12 14.01 9 11.01' />
                    </svg>
                    <span className='hide-menu'>Todo</span>
                  </a>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/app-calendar.html'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-calendar feather-icon'
                    >
                      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                      <line x1={16} y1={2} x2={16} y2={6} />
                      <line x1={8} y1={2} x2={8} y2={6} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                    </svg>
                    <span className='hide-menu'>Calendar</span>
                  </a>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    href='#'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-layout feather-icon'
                    >
                      <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                      <line x1={3} y1={9} x2={21} y2={9} />
                      <line x1={9} y1={21} x2={9} y2={9} />
                    </svg>
                    <span className='hide-menu'>Taskboard</span>
                  </a>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/app-contacts.html'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-phone feather-icon'
                    >
                      <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
                    </svg>
                    <span className='hide-menu'>Contact</span>
                  </a>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/app-notes.html'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-book feather-icon'
                    >
                      <path d='M4 19.5A2.5 2.5 0 0 1 6.5 17H20' />
                      <path d='M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z' />
                    </svg>
                    <span className='hide-menu'>Notes</span>
                  </a>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/app-invoice.html'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-file-text feather-icon'
                    >
                      <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
                      <polyline points='14 2 14 8 20 8' />
                      <line x1={16} y1={13} x2={8} y2={13} />
                      <line x1={16} y1={17} x2={8} y2={17} />
                      <polyline points='10 9 9 9 8 9' />
                    </svg>
                    <span className='hide-menu'>Invoice</span>
                  </a>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-mail feather-icon'
                    >
                      <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
                      <polyline points='22,6 12,13 2,6' />
                    </svg>
                    <span className='hide-menu'>Inbox </span>
                  </a>
                  <ul aria-expanded='false' className='collapse  first-level'>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/inbox-email.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-email' />
                        <span className='hide-menu'> Email </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/inbox-email-detail.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-email-alert' />
                        <span className='hide-menu'> Email Detail </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/inbox-email-compose.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-email-secure' />
                        <span className='hide-menu'> Email Compose </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-bookmark feather-icon'
                    >
                      <path d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z' />
                    </svg>
                    <span className='hide-menu'>Ticket </span>
                  </a>
                  <ul aria-expanded='false' className='collapse  first-level'>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/ticket-list.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-book-multiple' />
                        <span className='hide-menu'> Ticket List </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/ticket-detail.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-book-plus' />
                        <span className='hide-menu'> Ticket Detail </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='nav-small-cap'>
                  <i className='mdi mdi-dots-horizontal' />{' '}
                  <span className='hide-menu'>UI</span>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-cpu feather-icon'
                    >
                      <rect x={4} y={4} width={16} height={16} rx={2} ry={2} />
                      <rect x={9} y={9} width={6} height={6} />
                      <line x1={9} y1={1} x2={9} y2={4} />
                      <line x1={15} y1={1} x2={15} y2={4} />
                      <line x1={9} y1={20} x2={9} y2={23} />
                      <line x1={15} y1={20} x2={15} y2={23} />
                      <line x1={20} y1={9} x2={23} y2={9} />
                      <line x1={20} y1={14} x2={23} y2={14} />
                      <line x1={1} y1={9} x2={4} y2={9} />
                      <line x1={1} y1={14} x2={4} y2={14} />
                    </svg>
                    <span className='hide-menu'>Ui Elements </span>
                  </a>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/ui-buttons.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-toggle-switch' />
                        <span className='hide-menu'> Buttons</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/ui-modals.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-tablet' />
                        <span className='hide-menu'> Modals</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/ui-tab.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-sort-variant' />
                        <span className='hide-menu'> Tab</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/ui-tooltip-popover.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-image-filter-vintage' />
                        <span className='hide-menu'>
                          {' '}
                          Tooltip &amp; Popover
                        </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/ui-notification.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-message-bulleted' />
                        <span className='hide-menu'> Notification</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/ui-progressbar.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-poll' />
                        <span className='hide-menu'> Progressbar</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/ui-typography.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-format-line-spacing' />
                        <span className='hide-menu'> Typography</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/ui-bootstrap.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-bootstrap' />
                        <span className='hide-menu'> Bootstrap Ui</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/ui-breadcrumb.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-equal' />
                        <span className='hide-menu'> Breadcrumb</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/ui-list-media.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-file-video' />
                        <span className='hide-menu'> List Media</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/ui-grid.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-view-module' />
                        <span className='hide-menu'> Grid</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/ui-carousel.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-view-carousel' />
                        <span className='hide-menu'> Carousel</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/ui-scrollspy.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-application' />
                        <span className='hide-menu'> Scrollspy</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/ui-toasts.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-credit-card-scan' />
                        <span className='hide-menu'> Toasts</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/ui-spinner.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-apple-safari' />
                        <span className='hide-menu'> Spinner</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-copy feather-icon'
                    >
                      <rect x={9} y={9} width={13} height={13} rx={2} ry={2} />
                      <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' />
                    </svg>
                    <span className='hide-menu'>Cards</span>
                  </a>
                  <ul aria-expanded='false' className='collapse  first-level'>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/ui-cards.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-layers' />
                        <span className='hide-menu'> Basic Cards</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/ui-card-customs.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-credit-card-scan' />
                        <span className='hide-menu'>Custom Cards</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/ui-card-weather.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-weather-fog' />
                        <span className='hide-menu'>Weather Cards</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/ui-card-draggable.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-bandcamp' />
                        <span className='hide-menu'>Draggable Cards</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-hard-drive feather-icon'
                    >
                      <line x1={22} y1={12} x2={2} y2={12} />
                      <path d='M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z' />
                      <line x1={6} y1={16} x2={6} y2={16} />
                      <line x1={10} y1={16} x2={10} y2={16} />
                    </svg>
                    <span className='hide-menu'>Components</span>
                  </a>
                  <ul aria-expanded='false' className='collapse  first-level'>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/component-sweetalert.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-layers' />
                        <span className='hide-menu'> Sweet Alert</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/component-nestable.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-credit-card-scan' />
                        <span className='hide-menu'>Nestable</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/component-noui-slider.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-weather-fog' />
                        <span className='hide-menu'>Noui slider</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/component-rating.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-bandcamp' />
                        <span className='hide-menu'>Rating</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/component-toastr.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-poll' />
                        <span className='hide-menu'>Toastr</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-grid feather-icon'
                    >
                      <rect x={3} y={3} width={7} height={7} />
                      <rect x={14} y={3} width={7} height={7} />
                      <rect x={14} y={14} width={7} height={7} />
                      <rect x={3} y={14} width={7} height={7} />
                    </svg>
                    <span className='hide-menu'>Widgets </span>
                  </a>
                  <ul aria-expanded='false' className='collapse  first-level'>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-comment-processing-outline' />
                        <span className='hide-menu'> Apps Widgets</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-calendar' />
                        <span className='hide-menu'> Data Widgets</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-bulletin-board' />
                        <span className='hide-menu'> Charts Widgets</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='nav-small-cap'>
                  <i className='mdi mdi-dots-horizontal' />{' '}
                  <span className='hide-menu'>Forms</span>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-layers feather-icon'
                    >
                      <polygon points='12 2 2 7 12 12 22 7 12 2' />
                      <polyline points='2 17 12 22 22 17' />
                      <polyline points='2 12 12 17 22 12' />
                    </svg>
                    <span className='hide-menu'>Form Elements</span>
                  </a>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-priority-low' />
                        <span className='hide-menu'> Forms Input</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-rounded-corner' />
                        <span className='hide-menu'> Input Groups</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-select-all' />
                        <span className='hide-menu'> Input Grid</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-shape-plus' />
                        <span className='hide-menu'>
                          {' '}
                          Checkboxes &amp; Radios
                        </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-switch' />
                        <span className='hide-menu'> Bootstrap Touchspin</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-toggle-switch-off' />
                        <span className='hide-menu'> Bootstrap Switch</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-relative-scale' />
                        <span className='hide-menu'> Select2</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-tab-unselected' />
                        <span className='hide-menu'> Dual Listbox</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-file-text feather-icon'
                    >
                      <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
                      <polyline points='14 2 14 8 20 8' />
                      <line x1={16} y1={13} x2={8} y2={13} />
                      <line x1={16} y1={17} x2={8} y2={17} />
                      <polyline points='10 9 9 9 8 9' />
                    </svg>
                    <span className='hide-menu'>Form Layouts</span>
                  </a>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-vector-difference-ba' />
                        <span className='hide-menu'> Basic Forms</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-file-document-box' />
                        <span className='hide-menu'> Form Horizontal</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-code-greater-than' />
                        <span className='hide-menu'> Form Actions</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-code-equal' />
                        <span className='hide-menu'> Row Separator</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-flip-to-front' />
                        <span className='hide-menu'> Form Bordered</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-content-duplicate' />
                        <span className='hide-menu'> Striped Rows</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-cards-outline' />
                        <span className='hide-menu'> Form Detail</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-package feather-icon'
                    >
                      <path d='M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z' />
                      <polyline points='2.32 6.16 12 11 21.68 6.16' />
                      <line x1={12} y1='22.76' x2={12} y2={11} />
                      <line x1={7} y1='3.5' x2={17} y2='8.5' />
                    </svg>
                    <span className='hide-menu'>Form Addons</span>
                  </a>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-export' />
                        <span className='hide-menu'> Paginator</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-crop' />
                        <span className='hide-menu'> Image Cropper</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-crosshairs-gps' />
                        <span className='hide-menu'> Dropzone</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-box-shadow' />
                        <span className='hide-menu'> Form Mask</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-cards-variant' />
                        <span className='hide-menu'> Form Typehead</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-check-square feather-icon'
                    >
                      <polyline points='9 11 12 14 22 4' />
                      <path d='M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11' />
                    </svg>
                    <span className='hide-menu'>Form Validation</span>
                  </a>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-credit-card-scan' />
                        <span className='hide-menu'> Bootstrap Validation</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-credit-card-plus' />
                        <span className='hide-menu'> Custom Validation</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-droplet feather-icon'
                    >
                      <path d='M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z' />
                    </svg>
                    <span className='hide-menu'>Form Pickers</span>
                  </a>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-calendar-plus' />
                        <span className='hide-menu'> Form Colorpicker</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-calendar-clock' />
                        <span className='hide-menu'> Form Datetimepicker</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-calendar-range' />
                        <span className='hide-menu'>
                          {' '}
                          Form Bootstrap Rangepicker
                        </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-calendar-check' />
                        <span className='hide-menu'>
                          {' '}
                          Form Bootstrap Datepicker
                        </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-calendar-text' />
                        <span className='hide-menu'>
                          {' '}
                          Form Material Datepicker
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-edit feather-icon'
                    >
                      <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' />
                      <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' />
                    </svg>
                    <span className='hide-menu'>Form Editor</span>
                  </a>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-drawing' />
                        <span className='hide-menu'>Ck Editor</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-drupal' />
                        <span className='hide-menu'>Quill Editor</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-brightness-6' />
                        <span className='hide-menu'>Summernote Editor</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-bowling' />
                        <span className='hide-menu'>Tinymce Edtor</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    href='#'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-credit-card feather-icon'
                    >
                      <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
                      <line x1={1} y1={10} x2={23} y2={10} />
                    </svg>
                    <span className='hide-menu'>Form Wizard</span>
                  </a>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    href='#'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-crop feather-icon'
                    >
                      <path d='M6.13 1L6 16a2 2 0 0 0 2 2h15' />
                      <path d='M1 6.13L16 6a2 2 0 0 1 2 2v15' />
                    </svg>
                    <span className='hide-menu'>Form Repeater</span>
                  </a>
                </li>
                <li className='nav-small-cap'>
                  <i className='mdi mdi-dots-horizontal' />{' '}
                  <span className='hide-menu'>Tables</span>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-codepen feather-icon'
                    >
                      <polygon points='12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2' />
                      <line x1={12} y1={22} x2={12} y2='15.5' />
                      <polyline points='22 8.5 12 15.5 2 8.5' />
                      <polyline points='2 15.5 12 8.5 22 15.5' />
                      <line x1={12} y1={2} x2={12} y2='8.5' />
                    </svg>
                    <span className='hide-menu'>Bootstrap Tables</span>
                  </a>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-border-all' />
                        <span className='hide-menu'>Basic Table </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-border-left' />
                        <span className='hide-menu'>Dark Basic Table </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-border-outside' />
                        <span className='hide-menu'>Sizing Table </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-border-bottom' />
                        <span className='hide-menu'>Coloured Table Layout</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-hard-drive feather-icon'
                    >
                      <line x1={22} y1={12} x2={2} y2={12} />
                      <path d='M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z' />
                      <line x1={6} y1={16} x2={6} y2={16} />
                      <line x1={10} y1={16} x2={10} y2={16} />
                    </svg>
                    <span className='hide-menu'>Datatables</span>
                  </a>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-border-vertical' />
                        <span className='hide-menu'> Basic Initialisation</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-blur-linear' />
                        <span className='hide-menu'> API</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-border-style' />
                        <span className='hide-menu'>
                          {' '}
                          Advanced Initialisation
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    href='#'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-disc feather-icon'
                    >
                      <circle cx={12} cy={12} r={10} />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    <span className='hide-menu'>Table Jsgrid</span>
                  </a>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    href='#'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-smartphone feather-icon'
                    >
                      <rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
                      <line x1={12} y1={18} x2={12} y2={18} />
                    </svg>
                    <span className='hide-menu'>Table Responsive</span>
                  </a>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    href='#'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-command feather-icon'
                    >
                      <path d='M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z' />
                    </svg>
                    <span className='hide-menu'>Table Footable</span>
                  </a>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    href='#'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-edit-2 feather-icon'
                    >
                      <path d='M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z' />
                    </svg>
                    <span className='hide-menu'>Table Editable</span>
                  </a>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    href='#'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-target feather-icon'
                    >
                      <circle cx={12} cy={12} r={10} />
                      <circle cx={12} cy={12} r={6} />
                      <circle cx={12} cy={12} r={2} />
                    </svg>
                    <span className='hide-menu'>Table Bootstrap</span>
                  </a>
                </li>
                <li className='nav-small-cap'>
                  <i className='mdi mdi-dots-horizontal' />{' '}
                  <span className='hide-menu'>Charts</span>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    href='#'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-loader feather-icon'
                    >
                      <line x1={12} y1={2} x2={12} y2={6} />
                      <line x1={12} y1={18} x2={12} y2={22} />
                      <line x1='4.93' y1='4.93' x2='7.76' y2='7.76' />
                      <line x1='16.24' y1='16.24' x2='19.07' y2='19.07' />
                      <line x1={2} y1={12} x2={6} y2={12} />
                      <line x1={18} y1={12} x2={22} y2={12} />
                      <line x1='4.93' y1='19.07' x2='7.76' y2='16.24' />
                      <line x1='16.24' y1='7.76' x2='19.07' y2='4.93' />
                    </svg>
                    <span className='hide-menu'> Morris Chart</span>
                  </a>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    href='#'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-pie-chart feather-icon'
                    >
                      <path d='M21.21 15.89A10 10 0 1 1 8 2.83' />
                      <path d='M22 12A10 10 0 0 0 12 2v10z' />
                    </svg>
                    <span className='hide-menu'>Chartjs</span>
                  </a>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    href='#'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-radio feather-icon'
                    >
                      <circle cx={12} cy={12} r={2} />
                      <path d='M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14' />
                    </svg>
                    <span className='hide-menu'>Sparkline Chart</span>
                  </a>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    href='#'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-trello feather-icon'
                    >
                      <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                      <rect x={7} y={7} width={3} height={9} />
                      <rect x={14} y={7} width={3} height={5} />
                    </svg>
                    <span className='hide-menu'>Chartis Chart</span>
                  </a>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-slack feather-icon'
                    >
                      <path d='M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z' />
                      <path d='M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z' />
                      <path d='M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z' />
                      <path d='M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z' />
                      <path d='M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z' />
                      <path d='M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z' />
                      <path d='M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z' />
                      <path d='M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z' />
                    </svg>
                    <span className='hide-menu'>C3 Charts</span>
                  </a>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-arrange-bring-to-front' />{' '}
                        <span className='hide-menu'>Axis Chart</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-arrange-send-to-back' />{' '}
                        <span className='hide-menu'>Bar Chart</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-backup-restore' />{' '}
                        <span className='hide-menu'>Data Chart</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-backburger' />{' '}
                        <span className='hide-menu'>Line Chart</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-bar-chart-2 feather-icon'
                    >
                      <line x1={18} y1={20} x2={18} y2={10} />
                      <line x1={12} y1={20} x2={12} y2={4} />
                      <line x1={6} y1={20} x2={6} y2={14} />
                    </svg>
                    <span className='hide-menu'>Echarts</span>
                  </a>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-chart-line' />{' '}
                        <span className='hide-menu'>Basic Charts</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-chart-scatterplot-hexbin' />{' '}
                        <span className='hide-menu'>Bar Chart</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-chart-pie' />{' '}
                        <span className='hide-menu'>
                          Pie &amp; Doughnut Chart
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='nav-small-cap'>
                  <i className='mdi mdi-dots-horizontal' />{' '}
                  <span className='hide-menu'>Sample Pages</span>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-shopping-cart feather-icon'
                    >
                      <circle cx={9} cy={21} r={1} />
                      <circle cx={20} cy={21} r={1} />
                      <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' />
                    </svg>
                    <span className='hide-menu'>Ecommerce Pages</span>
                  </a>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-cards-variant' />{' '}
                        <span className='hide-menu'>Products</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-cart' />{' '}
                        <span className='hide-menu'>Products Cart</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-cart-plus' />{' '}
                        <span className='hide-menu'>Products Edit</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-camera-burst' />{' '}
                        <span className='hide-menu'>Product Details</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-chart-pie' />{' '}
                        <span className='hide-menu'>Product Orders</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-clipboard-check' />{' '}
                        <span className='hide-menu'>Products Checkout</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-book-open feather-icon'
                    >
                      <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' />
                      <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' />
                    </svg>
                    <span className='hide-menu'>Sample Pages </span>
                  </a>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-crop-free' />{' '}
                        <span className='hide-menu'>Starter Kit</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-debug-step-over' />{' '}
                        <span className='hide-menu'>Animation</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-search-web' />{' '}
                        <span className='hide-menu'>Search Result</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-camera-iris' />{' '}
                        <span className='hide-menu'>Gallery</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-file-tree' />{' '}
                        <span className='hide-menu'>Treeview</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-codepen' />{' '}
                        <span className='hide-menu'>Block UI</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-timer-off' />{' '}
                        <span className='hide-menu'>Session Timeout</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-timer-sand-empty' />{' '}
                        <span className='hide-menu'>Session Idle Timeout</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-tune' />{' '}
                        <span className='hide-menu'>Helper Classes</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-camera-iris' />{' '}
                        <span className='hide-menu'>Maintenance Page</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-lock feather-icon'
                    >
                      <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                      <path d='M7 11V7a5 5 0 0 1 10 0v4' />
                    </svg>
                    <span className='hide-menu'>Authentication</span>
                  </a>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-account-key' />
                        <span className='hide-menu'> Login </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-account-key' />
                        <span className='hide-menu'> Login 2 </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-account-plus' />
                        <span className='hide-menu'> Register</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-account-plus' />
                        <span className='hide-menu'> Register 2</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-account-off' />
                        <span className='hide-menu'> Lockscreen</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-account-convert' />
                        <span className='hide-menu'> Recover password</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-users feather-icon'
                    >
                      <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' />
                      <circle cx={9} cy={7} r={4} />
                      <path d='M23 21v-2a4 4 0 0 0-3-3.87' />
                      <path d='M16 3.13a4 4 0 0 1 0 7.75' />
                    </svg>
                    <span className='hide-menu'>Users</span>
                  </a>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-account-box' />{' '}
                        <span className='hide-menu'> User Card </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-account-network' />
                        <span className='hide-menu'> User Profile</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-account-star-variant' />
                        <span className='hide-menu'> User Contact</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-paperclip feather-icon'
                    >
                      <path d='M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48' />
                    </svg>
                    <span className='hide-menu'>Invoice</span>
                  </a>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/pages-invoice.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-vector-triangle' />
                        <span className='hide-menu'> Invoice Layout </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a
                        href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/pages-invoice-list.html'
                        className='sidebar-link'
                      >
                        <i className='mdi mdi-vector-rectangle' />
                        <span className='hide-menu'> Invoice List</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-map feather-icon'
                    >
                      <polygon points='1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6' />
                      <line x1={8} y1={2} x2={8} y2={18} />
                      <line x1={16} y1={6} x2={16} y2={22} />
                    </svg>
                    <span className='hide-menu'>Maps</span>
                  </a>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-google-maps' />
                        <span className='hide-menu'> Google Map </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-map-marker-radius' />
                        <span className='hide-menu'> Vector Map</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-feather feather-icon'
                    >
                      <path d='M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z' />
                      <line x1={16} y1={8} x2={2} y2={22} />
                      <line x1='17.5' y1={15} x2={9} y2={15} />
                    </svg>
                    <span className='hide-menu'>Icons</span>
                  </a>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-emoticon' />{' '}
                        <span className='hide-menu'> Material Icons </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-emoticon-cool' />
                        <span className='hide-menu'> Fontawesome Icons</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-chart-bubble' />
                        <span className='hide-menu'> Themify Icons</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-weather-cloudy' />
                        <span className='hide-menu'> Weather Icons</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi mdi-image-broken-variant' />{' '}
                        <span className='hide-menu'> Simple Line icons</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-flag-triangle' />
                        <span className='hide-menu'> Flag Icons</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-activity feather-icon'
                    >
                      <polyline points='22 12 18 12 15 21 9 3 6 12 2 12' />
                    </svg>
                    <span className='hide-menu'>Timeline</span>
                  </a>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-clock-fast' />{' '}
                        <span className='hide-menu'> Center Timeline </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-clock-end' />
                        <span className='hide-menu'> Horizontal Timeline</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-clock-in' />
                        <span className='hide-menu'> Left Timeline</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-clock-start' />
                        <span className='hide-menu'> Right Timeline</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-mail feather-icon'
                    >
                      <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
                      <polyline points='22,6 12,13 2,6' />
                    </svg>
                    <span className='hide-menu'>Email Template</span>
                  </a>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-message-alert' />{' '}
                        <span className='hide-menu'> Alert </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-message-bulleted' />
                        <span className='hide-menu'> Basic</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-message-draw' />
                        <span className='hide-menu'> Billing</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-message-bulleted-off' />
                        <span className='hide-menu'> Password-Reset</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-user-x feather-icon'
                    >
                      <path d='M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' />
                      <circle cx='8.5' cy={7} r={4} />
                      <line x1={18} y1={8} x2={23} y2={13} />
                      <line x1={23} y1={8} x2={18} y2={13} />
                    </svg>
                    <span className='hide-menu'>Error Pages</span>
                  </a>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-alert-outline' />{' '}
                        <span className='hide-menu'> Error 400 </span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-alert-outline' />
                        <span className='hide-menu'> Error 403</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-alert-outline' />
                        <span className='hide-menu'> Error 404</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-alert-outline' />
                        <span className='hide-menu'> Error 500</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='#' className='sidebar-link'>
                        <i className='mdi mdi-alert-outline' />
                        <span className='hide-menu'> Error 503</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    href='javascript:void(0)'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-git-pull-request feather-icon'
                    >
                      <circle cx={18} cy={18} r={3} />
                      <circle cx={6} cy={6} r={3} />
                      <path d='M13 6h3a2 2 0 0 1 2 2v7' />
                      <line x1={6} y1={9} x2={6} y2={21} />
                    </svg>
                    <span className='hide-menu'>Multi level dd</span>
                  </a>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <a href='javascript:void(0)' className='sidebar-link'>
                        <i className='mdi mdi-octagram' />
                        <span className='hide-menu'> item 1.1</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      <a href='javascript:void(0)' className='sidebar-link'>
                        <i className='mdi mdi-octagram' />
                        <span className='hide-menu'> item 1.2</span>
                      </a>
                    </li>
                    <li className='sidebar-item'>
                      {' '}
                      <a
                        className='has-arrow sidebar-link'
                        href='javascript:void(0)'
                        aria-expanded='false'
                      >
                        <i className='mdi mdi-playlist-plus' />{' '}
                        <span className='hide-menu'>Menu 1.3</span>
                      </a>
                      <ul
                        aria-expanded='false'
                        className='collapse second-level'
                      >
                        <li className='sidebar-item'>
                          <a href='javascript:void(0)' className='sidebar-link'>
                            <i className='mdi mdi-octagram' />
                            <span className='hide-menu'> item 1.3.1</span>
                          </a>
                        </li>
                        <li className='sidebar-item'>
                          <a href='javascript:void(0)' className='sidebar-link'>
                            <i className='mdi mdi-octagram' />
                            <span className='hide-menu'> item 1.3.2</span>
                          </a>
                        </li>
                        <li className='sidebar-item'>
                          <a href='javascript:void(0)' className='sidebar-link'>
                            <i className='mdi mdi-octagram' />
                            <span className='hide-menu'> item 1.3.3</span>
                          </a>
                        </li>
                        <li className='sidebar-item'>
                          <a href='javascript:void(0)' className='sidebar-link'>
                            <i className='mdi mdi-octagram' />
                            <span className='hide-menu'> item 1.3.4</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='sidebar-item'>
                      <a href='javascript:void(0)' className='sidebar-link'>
                        <i className='mdi mdi-playlist-check' />
                        <span className='hide-menu'> item 1.4</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='nav-small-cap'>
                  <i className='mdi mdi-dots-horizontal' />{' '}
                  <span className='hide-menu'>Extra</span>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/docs/documentation.html'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-edit-3 feather-icon'
                    >
                      <path d='M12 20h9' />
                      <path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' />
                    </svg>
                    <span className='hide-menu'>Documentation</span>
                  </a>
                </li>
                <li className='sidebar-item'>
                  {' '}
                  <a
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    href='https://www.wrappixel.com/demos/admin-templates/xtreme-admin/html/ltr/authentication-login1.html'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-log-out feather-icon'
                    >
                      <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' />
                      <polyline points='16 17 21 12 16 7' />
                      <line x1={21} y1={12} x2={9} y2={12} />
                    </svg>
                    <span className='hide-menu'>Log Out</span>
                  </a>
                </li>
              </ul>
            </nav>
            {/* End Sidebar navigation */}
            <div
              className='ps-scrollbar-x-rail'
              style={{ left: '0px', bottom: '-42px' }}
            >
              <div
                className='ps-scrollbar-x'
                tabIndex={0}
                style={{ left: '0px', width: '0px' }}
              />
            </div>
            <div
              className='ps-scrollbar-y-rail'
              style={{ top: '42px', height: '737px', right: '3px' }}
            >
              <div
                className='ps-scrollbar-y'
                tabIndex={0}
                style={{ top: '8px', height: '151px' }}
              />
            </div>
          </div>
          {/* End Sidebar scroll*/}
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
                <h4 className='page-title'>Dashboard</h4>
                <div className='d-flex align-items-center'>
                  <nav aria-label='breadcrumb'>
                    <ol className='breadcrumb'>
                      <li className='breadcrumb-item'>
                        <a href='#'>Home</a>
                      </li>
                      <li
                        className='breadcrumb-item active'
                        aria-current='page'
                      >
                        Library
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
                    <h4 className='text-info mb-0 font-medium'>$58,256</h4>
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
