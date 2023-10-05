import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { Header } from '../components'
import { Image } from 'react-bootstrap';
import hero1 from '../assets/images/hero-image-1.avif'
import hero2 from '../assets/images/hero-image-2.avif'
import hero3 from '../assets/images/image3.jpg'
import { IoIosArrowBack } from "react-icons/io"
import { AiOutlineArrowRight } from "react-icons/ai"
import { BsPlayFill } from "react-icons/bs"
import { GrFormNext, GrLinkNext, GrFormNextLink } from "react-icons/gr"
import Athenaeum from '../assets/images/Aesop_video.mp4';
import efficacious from '../assets/images/efficacious.avif';
import perfume from '../assets/images/parfurm.jpg';
import seed1 from '../assets/images/seed1.jpg';
import seed2 from '../assets/images/seed2.jpg';
import seed3 from '../assets/images/seed2.jpg';

import Facial from '../assets/images/facialAppoinment.avif';

const seedImages = [seed1, seed2, seed1, seed2, seed3, seed1, seed3]

const heroHeadings = [
  {
    img: hero1,
    subtitle: "A new Othertopias fragrance",
    title: "Ouranon Eau de Parfum",
    description: "A fragrance that evokes a silent monolith, the last vestige of a stone circle whose meaning has been lost to time—earthy minerality commingling with Frankincense, Hay and Myrrh.",
    btnText: "Discover Ouranon",
  }, {
    img: hero2,
    subtitle: "Hand and Body Care",
    title: "Buoyant bodies",
    description: "Three joyful elements of bathing—cleansing, scrubbing and hydrating—are facilitated by formulations boasting a variety of benefits and aromas, ensuring optimal satisfaction for all",
    btnText: "Discover Body & Hand care"
  },
  {
    img: hero3,
    subtitle: "Supporting city skin",
    title: "Parsley Seed Anti-Oxidant Intense Serum",
    description: "Explore how this anti-oxidant-rich serum hydrates, replenishes and fortifies the skin via a suite of ingredients selected with urban dwellers in mind.",
    btnText: "Discover the formuulation"
  },
]
export default function Home() {
  const [index,
    setIndex] = useState(0);
  const [pause,
    setPause] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  function slidedechandler() {
    if (index === 2) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  function slideIncresehandler() {
    if (index === 0) {
      setIndex(2)
    } else {
      setIndex(index - 1)
    }
  }
  return (
    <div>
      <Header /> {/* ================= HERO CAROUSEL START ================================= */}
      <section className='hero-section-carousel'>
        <Carousel fade activeIndex={index} onSelect={handleSelect} pause={false}>
          {heroHeadings?.map((item, i) => {
            return (
              <Carousel.Item >
                <Carousel.Caption>
                  <div className=" position-relative h-100 w-100">
                    {i < 2 &&
                      <Image src={item.img} alt='hero_Image' className='hero-image' />
                    }
                    <div className="container h-100 ">
                      <div className="hero-carousel-wrapper">
                        <div className="w-51 left-contnt-wrapper">
                          <h4 className='fs-30-25 fw-semibold tab-hide white temp-hed'>Aesop.</h4>
                          <div className="hero-content-box">
                            <p className='fx-14 fw-normal white'>{item.subtitle}</p>
                            <h5 className='fs-30-25 fw-bold white'>{item.title}</h5>
                            <p className='fx-14 fw-normal white'>{item.description}</p>
                            <div className="primary-btn fx-14 fw-bold boder-white mt-5">
                              {item.btnText} <AiOutlineArrowRight className='white' />
                            </div>
                          </div>
                        </div>
                        <div className="w-51">
                          {i == 2 && <Image
                            src={hero3}
                            alt='hero_Image'
                            className='hero-image-third  h-100 object-fit-cover' />}
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item >
            )
          })}

        </Carousel>
        <div className="contom-arrow-section">
          <IoIosArrowBack className={`arrow-pre-btn ${index == 2 ? "text-black" : ""}`} onClick={slideIncresehandler} />
          <p className={`fx-14 fw-normal ${index == 2 ? "text-black" : ""}`}>{index + 1}
            / 3</p>
          <IoIosArrowBack className={`arrow-next-btn ${index == 2 ? "text-black" : ""}`} onClick={slidedechandler} />
          <BsPlayFill className={`${index == 2 ? "text-black" : ""}`} />
        </div>
      </section>
      {/* ================= HERO CAROUSEL END ================================= */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* ============== SECOND SECTION START ============================= */}
      <section className='athonaaum-section-start '>
        <div className="container d-flex align-items-center h-100">


          <div className="hero-content-box  mw-450">
            <p className='fx-14 fw-normal black-333'>The Athenaeum</p>
            <h5 className='fs-30-25 fw-semibold black-333'>Ouranon: the sixth Othertopias fragrance</h5>
            <p className='fx-14 fw-normal black-333 mt-3'>Each of the six Othertopias fragrances is a doorway to another realm, real and imagined. Ouranon—a woody, spicy, resinous scent, distinguished by Frankincense, Hay and Myrrh—is the final chapter of that journey. </p>
            <div className="primary-btn fx-14 fw-bold  mt-5">
              Step inside Ouranon <AiOutlineArrowRight className='black-333' />
            </div>
          </div>

          <video src={Athenaeum} autoPlay muted loop className='vido-implement'></video>

        </div>
      </section>
      {/* ============== SECOND SECTION END ============================= */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* ======================= PERFUM SLIDER START ======================= */}
      <section className='parfum-section-main'>
        <div className="hero-content-box perfum-heading-mb mb-show w-100 px-3">
          <p className='fx-14 fw-normal black-333'>Fragrance</p>
          <h5 className='fs-30-25 fw-semibold black-333'>Our personal scents</h5>
          <p className='fx-14 fw-normal black-333 m1-3'>Unorthodox, evocative, and refined, Aesop fragrances are sensory bridges to memory and connection points to those around us </p>
          <div className="primary-btn fx-14 fw-bold  border-0 shadow-none justify-content-start mt-5">
            See All Fragrance <AiOutlineArrowRight className='black-333' />
          </div>
        </div>
        <div className="container-perfume">
          <div className="hero-content-box desk-show min-300 ms-5  mw-450">
            <p className='fx-14 fw-normal black-333'>Fragrance</p>
            <h5 className='fs-30-25 fw-semibold black-333'>Our personal scents</h5>
            <p className='fx-14 fw-normal black-333 m1-3'>Unorthodox, evocative, and refined, Aesop fragrances are sensory bridges to memory and connection points to those around us </p>
            <div className="primary-btn fx-14 fw-bold  border-0 shadow-none justify-content-start mt-5">
              See All Fragrance <AiOutlineArrowRight className='black-333' />
            </div>
          </div>
          {[...Array(9)].map((item, i) => {
            return (
              <div key={i} className="perfum-card">
                <div className="image-frame">
                  <Image src={perfume} alt='image' />
                </div>
                <p className='fx-14 fw-semibold black-333 text-center my-3 w-100'>Eidesis Eau de Parfum</p>
                <p className='fx-14 mb-0 fw-normal black-333 text-center w-100'>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            )
          })}
        </div>
      </section>
      {/* ======================= PERFUM SLIDER END ======================= */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* ============== SECOND SECTION START ============================= */}
      <section className='athonaaum-section-start '>
        <div className="container right-content-box d-flex align-items-center h-100">


          <div className="hero-content-box   mw-450">
            {/* <p className='fx-14 fw-normal black-333'></p> */}
            <h5 className='fs-30-25 fw-semibold black-333'>Efficacious pairings</h5>
            <p className='fx-14 fw-normal black-333 mt-3'>Our consultants have long combined complementary formulations to effect additional benefits for the skin. Incorporate this time-honoured practice into your regimen with our recommended bundles. </p>
            <div className="primary-btn fx-14 fw-bold  mt-5">
              Browse skin Care Bundles <AiOutlineArrowRight className='black-333' />
            </div>
          </div>

          <Image src={efficacious} className='image-efficacious'></Image>

        </div>
      </section>
      {/* ============== SECOND SECTION END ============================= */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* ======================= PERFUM SLIDER START ======================= */}
      <section className='parfum-section-main'>
        <div className="hero-content-box perfum-heading-mb mb-show w-100 px-3">
          <p className='fx-14 fw-normal black-333'>Parsley Seed Skin Care</p>
          <h5 className='fs-30-25 fw-semibold black-333'>Fortification of the highest order</h5>
          <p className='fx-14 fw-normal black-333 m1-3'>Our Parsley Seed Skin Care range provides potent doses of anti-oxidant rich ingredients in formulations suited to all skin types. They are especially recommended for those in urban environments, to fortify the skin against the damaging effects of free radicals </p>
          <div className="primary-btn fx-14 fw-bold  border-0 shadow-none justify-content-start mt-5">
            Explore the range <AiOutlineArrowRight className='black-333' />
          </div>
        </div>
        <div className="container-perfume">
          <div className="hero-content-box desk-show min-300 ms-5  mw-450">
            <p className='fx-14 fw-normal black-333'>Parsley Seed Skin Care</p>
            <h5 className='fs-30-25 fw-semibold black-333'>Fortification of the highest order</h5>
            <p className='fx-14 fw-normal black-333 m1-3'>Our Parsley Seed Skin Care range provides potent doses of anti-oxidant rich ingredients in formulations suited to all skin types. They are especially recommended for those in urban environments, to fortify the skin against the damaging effects of free radicals </p>
            <div className="primary-btn fx-14 fw-bold  border-0 shadow-none justify-content-start mt-5">
              Explore the range <AiOutlineArrowRight className='black-333' />
            </div>
          </div>
          {seedImages?.map((item, i) => {
            return (
              <div key={i} className="perfum-card">
                <div className="image-frame">
                  <Image src={item} alt='image' />
                </div>
                <p className='fx-14 fw-semibold black-333 text-center my-3 w-100'>Parslet seed Anti-Oxide skin care kit</p>
                <p className='fx-14 mb-0 fw-normal black-333 text-center w-100'>Lorem ipsum dolor sit amet </p>
              </div>
            )
          })}
        </div>
      </section>
      {/* ======================= PERFUM SLIDER END ======================= */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}   {/*  */}
      {/*  */}
      {/* ============== SECOND SECTION START ============================= */}
      <section className='athonaaum-section-start '>
        <div className="container d-flex align-items-center h-100">


          <div className="hero-content-box  mw-450">
            {/* <p className='fx-14 fw-normal black-333'>Store locator</p> */}
            <h5 className='fs-30-25 fw-semibold black-333'>Store locator</h5>
            <p className='fx-14 fw-normal black-333 mt-3'>Our consultants are available to host you in-store and provide tailored guidance on gift purchases </p>
            <div className="primary-btn fx-14 fw-bold  mt-5">
              Find a nearby store <AiOutlineArrowRight className='black-333' />
            </div>
          </div>

          <div className='vido-implement right-side-slider'>
            <Carousel>
              {[...Array(4)].map((item, i) => {
                return (
                  <Carousel.Item interval={1000}>
                    <Carousel.Caption>
                      <Image src={Facial} alt='image ' className='w-100 h-100 object-fit-cover' />
                      {/* <h4 className=' text-primary'>Hello check one </h4> */}
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </div>

        </div>
      </section>
      {/* ============== SECOND SECTION END ============================= */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* ============== SECOND SECTION START ============================= */}
      <section className='athonaaum-section-start '>
        <div className="container right-content-box d-flex align-items-center h-100">


          <div className="hero-content-box   mw-450">
            <p className='fx-14 fw-normal black-333'>Facial Appointments</p>
            <h5 className='fs-30-25 fw-semibold black-333'>Composure for the skin and senses</h5>
            <p className='fx-14 fw-normal black-333 mt-3'>For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin. </p>
            <div className="primary-btn fx-14 fw-bold  mt-5">
              Learn More <AiOutlineArrowRight className='black-333' />
            </div>
          </div>

          <Image src={Facial} className='image-efficacious'></Image>

        </div>
      </section>
      {/* ============== SECOND SECTION END ============================= */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <div className=" my-5">
        <div className="container py-5 my-5">
          <h2 className='fs-30-25 fw-bold w-100 text-center black-333'>‘Nothing is ever ended, everything only begun.’</h2>
          <p className='fx-14 fw-normal black-333 text-center'>Sara Teasdale</p>
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <footer className='footer'>
        <div className="container">
          <div className="first-row-footer">
            <ul className="first-footer">
              <li className='fs-15-13 fw-bold text-white'>Subscribe to Aesop communications</li>
              <li><input type="text" placeholder='Email address' className=' border border-white white w-100  bg-transparent shadow-none' /></li>
              <li className='fs-14-12  fw-normal white '><input type="checkbox" name="" id="" /> Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our privacy policy.</li>
            </ul>
            <ul className="first-footer">
              <li className='fs-15-13 fw-bold text-white'>Orders and support</li>
              <li className='fs-14-12 fw-normal white'> Contact us</li>
              <li className='fs-14-12 fw-normal white'> FAQs </li>
              <li className='fs-14-12 fw-normal white'> Shipping </li>
              <li className='fs-14-12 fw-normal white'> Order history </li>
              <li className='fs-14-12 fw-normal white'> Returns </li>
              <li className='fs-14-12 fw-normal white'> Terms and conditions </li>
            </ul>
            <ul className="first-footer">
              <li className='fs-15-13 fw-bold text-white'>Services</li>
              <li className='fs-14-12 fw-normal white'> Live assistance</li>
              <li className='fs-14-12 fw-normal white'> Corporate gifts </li>
              <li className='fs-14-12 fw-normal white'> Facial Appointments </li>
              <li className='fs-14-12 fw-normal white'> Click and Collect </li>
              <li className='fs-14-12 fw-normal white'> Video consultation </li>
            </ul>
            <ul className="first-footer">
              <li className='fs-15-13 fw-bold text-white'>Location preferences</li>
              <li className='fs-14-12 fw-normal white'> Shipping:</li>
              <li className='fs-14-12 fw-normal white text-decoration-underline'> Hong Kong SAR, China </li>
              <li className='fs-14-12 fw-bold mt-4 white'> Language: </li>
              <li className='fs-14-12 fw-normal white'>繁體中文 </li>
              <li className='fs-14-12 fw-normal white'> English </li>
            </ul>
          </div>
          <div className="first-row-footer">
            <ul className="first-footer">
              <li className='fs-15-13 fw-bold text-white'>Sustainability</li>
              <li className='fs-14-12  fw-normal white '> All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</li>
            </ul>
            <ul className="first-footer">
              <li className='fs-15-13 fw-bold text-white'>About Us</li>
              <li className='fs-14-12 fw-normal white'> Our story</li>
              <li className='fs-14-12 fw-normal white'> Foundation </li>
              <li className='fs-14-12 fw-normal white'> Careers </li>
              <li className='fs-14-12 fw-normal white'> Privacy policy</li>
              <li className='fs-14-12 fw-normal white'> Accessibility </li>
              <li className='fs-14-12 fw-normal white'> Cookie Policy </li>
            </ul>
            <ul className="first-footer">
              <li className='fs-15-13 fw-bold text-white'> Social media</li>
              <li className='fs-14-12 fw-normal white'> Instagram </li>
              <li className='fs-14-12 fw-normal white'> Twitter  </li>
              <li className='fs-14-12 fw-normal white'> LinkedIn  </li>
              <li className='fs-14-12 fw-normal white'> WeChat</li>
              <li className='fs-14-12 fw-normal white'> Weibo </li>
            </ul>
          </div>
        </div>
      </footer>
      {/*  */}
      {/*  */}
    </div>
  )
}
