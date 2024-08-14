import React from "react";
import Link from "next/link";

import type { Footer } from "../../../../payload/payload-types";
import DOMPurify from 'dompurify';

import bg from '../../../_images/background/bg2.jpg';
import { CMSLink } from "../../Link";
import { link } from "fs";


export const FooterNav: React.FC<{ footer: Footer }> = ({ footer }) => {


  const currentYear = new Date().getFullYear(); // Pridobite trenutno leto

  //const navItems = footer?.navItems || [];
  const manu = footer?.navItems4 || [];
  const links = footer?.navItems5 || [];
  const contact = footer?.info || [];

  return (
    <>
      <footer className="site-footer">
        <div className="footer-top" style={{ "backgroundImage": "url(" + bg + ")", "backgroundSize": "contain" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-4">
                <div className="widget widget_services border-0">
                  <h5 className="footer-title text-white">Podjetje</h5>
                  <ul>

                  {manu.map((item, index) => (
                      <li key={index}><CMSLink {...item.link} appearance="none" className="" /></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-5 col-6 ">
                <div className="widget widget_getintuch">

                  <h5 className="footer-title text-white ">Kontakt</h5>
                  <ul>
                    {contact.map((item, index) => (
                        <li key={index}>
                        <i className={item.ClassName}></i>
                        <strong>{item.label}</strong> {item.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 ">
                <div className="widget">
                  <h5 className="footer-title text-white">ZU-VIL</h5>
                  <p className="m-b20">Specializirano podjetje, osredotočeno na servisiranje viličarjev. Ustanovljeno leta 1996, podjetje nudi popravila in vzdrževanje viličarjev vseh znamk, zagotavlja pa tudi rezervne dele in nadomestne viličarje med servisom.</p>
                  <div className="subscribe-form m-b20">

                  </div>
                  <ul className="list-inline m-a0">
                    <li><Link href="https://www.facebook.com/zuvilsp" target="_blank" className="site-button facebook circle "><i className="fa fa-facebook"></i></Link></li>
                    {/*<li><Link href="#" className="site-button google-plus circle "><i className="fa fa-google-plus"></i></Link></li>
                    <li><Link href="#" className="site-button linkedin circle "><i className="fa fa-linkedin"></i></Link></li>
                    <li><Link href="#" className="site-button instagram circle "><i className="fa fa-instagram"></i></Link></li>
                    <li><Link href="#" className="site-button twitter circle "><i className="fa fa-twitter"></i></Link></li>*/}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 text-left "> <span>Avtorske pravice © {currentYear} ZU-VIL, Zupe Zlatko s.p.,</span> </div>
              <div className="col-md-6 col-sm-6 text-right ">
                <div className="widget-link ">
                  <ul>
                  {/*{links.map((item, index) => (
                      <li key={index}><CMSLink {...item.link} appearance="none" className="" /></li>
                    ))}*/}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
