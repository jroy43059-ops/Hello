import React from 'react'
import FooterSlider from './FooterSlider'

import styles from "./Footer.module.css"

import { AddIcon, MinusIcon } from '@chakra-ui/icons'

import { FaFacebookF, FaPinterestP } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { AiOutlineInstagram } from "react-icons/ai"
import { TfiLinkedin, TfiYoutube } from 'react-icons/tfi'

import footerBg from '../../Assets/footerBg.webp'

import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box } from '@chakra-ui/react'

export default function Footer() {
  return (
    <div>
      <FooterSlider />
      <div className={styles.FooterMiddle} >
        <div>
          <h2>Customer Care</h2>
          <p>1800 120 000 500 (India) / +91 9674373838</p>
          <p>(International)</p>
          <p>care@vedantfashions.com</p>
        </div>
        <div>
          <h2>Company</h2>
          <p>Franchise Enquiry</p>
          <p>About Us</p>
          <p>Store Locator</p>
          <p>Careers</p>
          <p>Contact Us</p>
          <p>Stores Near Me</p>
          <p>Book an Appointment</p>
        </div>
        <div>
          <h2>Men's Wear</h2>
          <p>Sherwani</p>
          <p>Kurta Pajama</p>
          <p>Indo Western</p>
          <p>Jackets</p>
        </div>
        <div>
          <h2>Women's Wear</h2>
          <p>Kurti - Suit</p>
          <p>Saree</p>
          <p>Gown</p>
          <p>Bridal Wear</p>
          <p>Lehenga</p>
        </div>
        <div>
          <h2>Kid's Wear</h2>
          <p>Kids Kurta</p>
          <p>Kurta Jacket</p>
          <p>Festive Kurta</p>
        </div>
        <div>
          <h2>Support</h2>
          <p>FAQs</p>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Shipping Details</p>
          <p>Return, Exchange and</p>
          <p>Refund Policy</p>
        </div>
        <div>
          <h2>Sign up for our Newsletter</h2>
          <input type="text" placeholder='Enter email id' />
          <h3>Follow Us</h3>
          <div className={styles.socialMediainHB} >
            <a href="https://www.facebook.com/Manyavar/" target='_blank' ><FaFacebookF /></a>
            <a href="https://twitter.com/Manyavar_" target="_blank" ><BsTwitter /></a>
            <a href="https://www.instagram.com/manyavarmohey/" target="_blank" ><AiOutlineInstagram /></a>
            <a href="https://www.linkedin.com/company/vedant-fashions-private-limited/" target="_blank" ><TfiLinkedin /></a>
            <a href="https://www.youtube.com/channel/UCLFcNhsW8b2lfggndqNN3jA" target="_blank" ><TfiYoutube /></a>
            <a href="https://in.pinterest.com/manyavar1/" target="_blank" ><FaPinterestP /></a>
          </div>
        </div>
      </div>
      <div className={styles.middleScreenFooterMiddle} >
        <div>
          <img src="http://surl.li/goprx" alt="" />
          <h2>Customer Care</h2>
          <p>1800 120 000 500 (India) / <br /> +91 9674373838 (International) <br /> care@vedantfashions.com</p>
          <h2>Follow us</h2>
          <div >
            <a href="https://www.facebook.com/Manyavar/" target='_blank' ><FaFacebookF /></a>
            <a href="https://twitter.com/Manyavar_" target="_blank" ><BsTwitter /></a>
            <a href="https://www.instagram.com/manyavarmohey/" target="_blank" ><AiOutlineInstagram /></a>
            <a href="https://www.linkedin.com/company/vedant-fashions-private-limited/" target="_blank" ><TfiLinkedin /></a>
            <a href="https://www.youtube.com/channel/UCLFcNhsW8b2lfggndqNN3jA" target="_blank" ><TfiYoutube /></a>
            <a href="https://in.pinterest.com/manyavar1/" target="_blank" ><FaPinterestP /></a>
          </div>
          <h2>Sign up for our Newsletter</h2>
          <input type="text" placeholder='Enter email id' />
        </div>
        <div style={{ backgroundColor: '#8E1100' }} >
          <Accordion allowToggle>
            <AccordionItem style={{ border: 'none', borderBottom: '0.5px solid #B25E52' }} >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton  >
                      <Box as="span" flex='1' textAlign='center'>
                        Companay
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize='12px' />
                      ) : (
                        <AddIcon fontSize='12px' />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <p>Franchise Enquiry</p>
                    <p>About Us</p>
                    <p>Store Locator</p>
                    <p>Careers</p>
                    <p>Contact Us</p>
                    <p>Stores Near Me</p>
                    <p>Book an Appointment</p>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem style={{ border: 'none', borderBottom: '0.5px solid #B25E52' }} >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='center'>
                        Men's Wear
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize='12px' />
                      ) : (
                        <AddIcon fontSize='12px' />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <p>Sherwani</p>
                    <p>Kurta Pajama</p>
                    <p>Indo Western</p>
                    <p>Jackets</p>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem style={{ border: 'none', borderBottom: '0.5px solid #B25E52' }} >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='center'>
                        Women's Wear
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize='12px' />
                      ) : (
                        <AddIcon fontSize='12px' />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <p>Kurti - Suit</p>
                    <p>Saree</p>
                    <p>Gown</p>
                    <p>Bridal Wear</p>
                    <p>Lehenga</p>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem style={{ border: 'none', borderBottom: '0.5px solid #B25E52' }} >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='center'>
                        Kid's Wear
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize='12px' />
                      ) : (
                        <AddIcon fontSize='12px' />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <p>Kids Kurta</p>
                    <p>Kurta Jacket</p>
                    <p>Festive Kurta</p>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem style={{ border: 'none', borderBottom: '0.5px solid #B25E52' }} >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='center'>
                        Support
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize='12px' />
                      ) : (
                        <AddIcon fontSize='12px' />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <p>FAQs</p>
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                    <p>Shipping Details</p>
                    <p>Return, Exchange and Refund Policy</p>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
          <h4>Manyavar. all rights reserved © 2020 - 2023</h4>
        </div>
      </div>
      <div className={styles.lastFooterContainer} >
        <img src="http://surl.li/gopsi" alt="" />
        <p>Manyavar. all rights reserved © 2020 - 2023</p>
        <img src="http://surl.li/gopsn" alt="" />
      </div>
    </div>
  )
}
