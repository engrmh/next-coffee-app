import React, {useEffect, useState} from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import {useRouter} from "next/router";

function Navbar() {
  const [search, setSearch] = useState('')
  const route = useRouter()

  useEffect(()=>{
    setSearch(route.query.q)
  },[])

  const searchHandler = () => {
    if (search.trim()){
      route.push(`/search?q=${search}`)
    }

  }
  const searchHandlerWithEnter = (e) => {
    if (e.keyCode === 13){
      searchHandler()
    }
  }

  return (
    <div className={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav
        className={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}
      >
        <div className="d-flex align-items-center position-relative gap-2 ">
          <Link href="/" className={`${styles.navbar_brand} px-lg-4 m-0`}>
            <h1 className="m-0 display-4 text-uppercase text-white">
              Next-Coffee
            </h1>
          </Link>

          <input
              value={search}
              onChange={e=> setSearch(e.target.value)}
              onKeyDown={searchHandlerWithEnter}
              type="text"
              className={styles.search_input}
              placeholder="Search..."
          />
          <button className='bg-transparent border-white border-1 text-white rounded p-1' onClick={searchHandler}>
            Search
          </button>
        </div>
        <button
          type="button"
          className={`${styles.navbar_toggler}`}
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className={`${styles.navbar_toggler_icon}`}></span>
        </button>
        <div
          className={`collapse ${styles.navbar_collapse} justify-content-between`}
          id="navbarCollapse"
        >
          <div className={`${styles.navbar_nav} ml-auto p-4`}>
            <Link
              href="/"
              className={`${styles.nav_link} ${styles.active_nav_link}`}
            >
              Home
            </Link>

            <Link href="/about" className={`${styles.nav_link}`}>
              About
            </Link>
            <Link href="/services" className={`${styles.nav_link}`}>
              Services
            </Link>
            <Link href="/menu" className={`${styles.nav_link}`}>
              Menu
            </Link>

            <div className={`${styles.dropdown}`}>
              <Link
                href="#"
                className={`${styles.nav_link} ${styles.dropdown_toggle}`}
                data-toggle="dropdown"
              >
                Pages
              </Link>
              <div
                className={`${styles.dropdown_menu} ${styles.text_capitalize}`}
              >
                <Link
                  href="/reservation"
                  className={`${styles.dropdown_item}`}
                >
                  Reservation
                </Link>
                <Link
                  href="/testimonial"
                  className={`${styles.dropdown_item}`}
                >
                  Testimonial
                </Link>
              </div>
            </div>
            <Link href="/contact" className={`${styles.nav_link}`}>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
