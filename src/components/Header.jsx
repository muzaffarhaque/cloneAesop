import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { BiSearch, BiMenu } from "react-icons/bi";
import { BsChevronRight } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineHeart } from "react-icons/ai";

const navList = ["Skin Care", "Body & Hand", "Hair", "Fra"];
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        window.addEventListener('scroll', handleScroll);
      } else {
        setIsScrolled(false);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (<>    
    <input type='checkbox' id='so' className='d-none' />
    <header className={`header-section-wrapper ${isScrolled ? 'bg-333' : ''}`}>
      <h4 className='logo-text'>Aesop</h4>
      <div className="container">
        <div className='header-main-section'>
          <ul className='side-nave-bar'>
            <li className='fs-14-18 fw-normal black-333'>Skin Care <BsChevronRight className='mb-right-arrow' /></li>
            <li className='fs-14-18 fw-normal black-333'>Body & Hand <BsChevronRight className='mb-right-arrow' /></li>
            <li className='fs-14-18 fw-normal black-333'>Hair <BsChevronRight className='mb-right-arrow' /></li>
            <li className='fs-14-18 fw-normal black-333'>Fragrance <BsChevronRight className='mb-right-arrow' /></li>
            <li className='fs-14-18 fw-normal black-333'>Home <BsChevronRight className='mb-right-arrow' /></li>
            <li className='fs-14-18 fw-normal black-333 tab-hide'>Kits & Travel <BsChevronRight className='mb-right-arrow' /></li>
            <li className='fs-14-18 fw-normal black-333 tab-hide'>Gifts <BsChevronRight className='mb-right-arrow' /></li>
            <li className='fs-14-18 fw-normal black-333 tab-hide'>Read <BsChevronRight className='mb-right-arrow' /></li>
            <li className='fs-14-18 fw-normal black-333 tab-hide'>Stores <BsChevronRight className='mb-right-arrow' /></li>
            <li className='fs-14-18 fw-normal black-333 tab-hide'>Facial Appointments <BsChevronRight className='mb-right-arrow' /></li>
            <li className='fs-14-18 fw-normal black-333 tab-hide desk-show'><BiSearch /> </li>
          </ul>
          <div className="right-nav-list">
            <span className='fx-14 fw-normal black-333 desk-show'>Login </span>
            <span className='fx-14 fw-normal black-333 mb-show'><BiSearch /> </span>
            <span className='fx-14 fw-normal black-333 desk-show'>Cabinet</span>
            <span className='fx-14 fw-normal black-333 mb-show'><AiOutlineHeart /> </span>
            <span className='fx-14 fw-normal black-333'>Cart</span>
            <span className='fx-14 fw-normal black-333 mb-show'><label className='lable' htmlFor="so"> <BiMenu className="menue fs-30-25 " /> <GrFormClose className="menue-close fs-30-25 " /></label></span>
          </div>
        </div>
      </div>
    </header>
  </>

  )
}
