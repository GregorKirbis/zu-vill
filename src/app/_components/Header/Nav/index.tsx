'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname  } from "next/navigation";
import type { Header as HeaderType } from "../../../../payload/payload-types";
import { CMSLink } from "../../Link";

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {

  const navItems = header?.navItems || [];
  const navItems2 = header?.navItems2 || [];
  const navItems3 = header?.navItems3 || [];

  const [mobile, setMobile] = useState(false);


  const pathname = usePathname();

  function toggleFunc(p=null) {
    setMobile(!mobile);
  }



  return (
    <header className="site-header mo-left header-transparent box-header header">
      <div className="top-bar text-black">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="dlab-topbar-left">
              <ul>
                {navItems2.map(({ link }, i) => (
                    <li key={i} className={""}>
                      <div><CMSLink {...link} appearance="none" className="" /></div>
                    </li>
                ))}
              </ul>
            </div>
            <div className="dlab-topbar-right topbar-social">
              <ul>
                {navItems3.map(({ link }, i) => (
                    <li key={i} className={""}>
                      <CMSLink {...link} appearance="none" className="site-button-link facebook hover" />
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix">
          <div className="container clearfix">
            <div className="logo-header mostion">
              <Link legacyBehavior href="/">
                <a>
                  <Image src="/_images/logo.png" alt="Logo" width={150} height={50} />
                </a>
              </Link>
            </div>

            <button
              className={`navbar-toggler collapsed navicon justify-content-end ${mobile ? 'open':''}`}
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleFunc}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className="extra-nav">
              {navItems.map(({ link }, i) => (
                link.display === "highlighted" && ( <>
                  <CMSLink key={i} {...link} appearance="none" className="site-button radius-no" />
                  </>
                )
              ))}
            </div>

            <div className="dlab-quik-search">
              <form action="#">
                <input name="search" type="text" className="form-control" placeholder="Type to search" />
                <span id="quik-search-remove">
                  <i className="ti-close"></i>
                </span>
              </form>
            </div>

            <div className={`header-nav navbar-collapse collapse justify-content-end ${mobile? 'show':''}`} >
              <div className="logo-header d-md-block d-lg-none">
                <Link legacyBehavior href="/">
                  <a>
                    <Image src="/_images/logo.png" alt="Logo" width={150} height={50} />
                  </a>
                </Link>
              </div>
              <ul className="nav navbar-nav">
                {navItems.map(({ link }, i) => (
                  link.display === "normal" && (
                    <li key={i} className={pathname === `/${link.reference.value.slug }` ? "active has-mega-menu " : "has-mega-menu "} >

                      <CMSLink {...link} appearance="none" className="site-button-link facebook hover" type='reference' onClick={toggleFunc}   />
                    </li>
                  )
                ))}
              </ul>
              <div className="dlab-social-icon">
                <ul>
                  <li>
                    <Link legacyBehavior href="/javascript:void(0);">
                      <a className="site-button facebook circle-sm outline fa fa-facebook"></a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
