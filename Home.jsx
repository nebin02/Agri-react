
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.page}>

            {/* ================= NAVBAR ================= */}

            <nav className={styles.navbar}>

                <div className={styles.logo}>
                    <span>🌱</span> AgriNext
                </div>

                <div className={styles.navLinks}>

                    <a
                        href="#home"
                        className={styles.navLink}
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        className={styles.navLink}
                    >
                        About
                    </a>

                    <a
                        href="#features"
                        className={styles.navLink}
                    >
                        Features
                    </a>

                    <a
                        href="#crops"
                        className={styles.navLink}
                    >
                        Crops
                    </a>

                    <a
                        href="#contact"
                        className={styles.navLink}
                    >
                        Contact
                    </a>

                    {/* Sign In */}
                    <Link
                        to="/signin"
                        className={styles.signinButton}
                    >
                        Sign In
                    </Link>

                    {/* Sign Up */}
                    <Link
                        to="/signup"
                        className={styles.signupButton}
                    >
                        Join Us
                    </Link>

                </div>

            </nav>


            {/* ================= HERO ================= */}

            <section
                className={styles.hero}
                id="home"
            >

                <div className={styles.heroContent}>

                    <p className={styles.badge}>
                        🌾 SMART AGRICULTURE PLATFORM
                    </p>

                    <h1>
                        Connecting Farmers
                        <br />
                        <span>With Fresh Food.</span>
                    </h1>

                    <p className={styles.heroText}>
                        AgriNext connects farmers directly with
                        customers, making it easier to discover,
                        sell and buy fresh agricultural products.
                    </p>

                    <div className={styles.heroButtons}>

                        {/* Create Account */}
                        <Link
                            to="/signup"
                            className={styles.primaryButton}
                        >
                            Create Account →
                        </Link>

                        {/* Sign In */}
                        <Link
                            to="/signin"
                            className={styles.secondaryButton}
                        >
                            Sign In
                        </Link>

                    </div>

                </div>


                {/* Hero Card */}

                <div className={styles.heroImage}>

                    <div className={styles.imageCard}>

                        <div className={styles.farmIcon}>
                            🌾
                        </div>

                        <h3>
                            Fresh From Farm
                        </h3>

                        <p>
                            Quality crops directly from
                            local farmers.
                        </p>

                        <div className={styles.stats}>

                            <div>
                                <strong>100+</strong>
                                <small>Farmers</small>
                            </div>

                            <div>
                                <strong>50+</strong>
                                <small>Crops</small>
                            </div>

                            <div>
                                <strong>24/7</strong>
                                <small>Platform</small>
                            </div>

                        </div>

                    </div>


                    <div className={styles.floatingCard}>
                        🥕 Fresh Crops
                    </div>

                </div>

            </section>


            {/* ================= ABOUT ================= */}

            <section
                className={styles.about}
                id="about"
            >

                <div className={styles.sectionTitle}>

                    <span>
                        WHO WE ARE
                    </span>

                    <h2>
                        Growing a Better
                        <br />
                        <strong>Agricultural Future.</strong>
                    </h2>

                    <p>
                        AgriNext is a modern agricultural platform
                        designed to bring farmers and customers
                        together through technology.
                    </p>

                </div>


                <div className={styles.aboutCards}>

                    {/* Farmer */}

                    <div className={styles.aboutCard}>

                        <div className={styles.cardIcon}>
                            👨‍🌾
                        </div>

                        <h3>
                            For Farmers
                        </h3>

                        <p>
                            Farmers can create accounts, manage
                            their farms and add available crops
                            for customers.
                        </p>

                    </div>


                    {/* Customer */}

                    <div className={styles.aboutCard}>

                        <div className={styles.cardIcon}>
                            🛒
                        </div>

                        <h3>
                            For Customers
                        </h3>

                        <p>
                            Customers can discover fresh crops
                            and connect with farmers to get
                            quality agricultural products.
                        </p>

                    </div>


                    {/* Direct Connection */}

                    <div className={styles.aboutCard}>

                        <div className={styles.cardIcon}>
                            🤝
                        </div>

                        <h3>
                            Direct Connection
                        </h3>

                        <p>
                            AgriNext creates a direct connection
                            between farmers and customers while
                            reducing unnecessary middlemen.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= FEATURES ================= */}

            <section
                className={styles.features}
                id="features"
            >

                <div className={styles.sectionTitle}>

                    <span>
                        OUR FEATURES
                    </span>

                    <h2>
                        Everything You Need
                    </h2>

                    <p>
                        Simple tools designed to make
                        agriculture smarter and easier.
                    </p>

                </div>


                <div className={styles.featureGrid}>

                    <div className={styles.featureCard}>

                        <span>👨‍🌾</span>

                        <h3>
                            Farmer Registration
                        </h3>

                        <p>
                            Farmers can register and create
                            their agricultural profile.
                        </p>

                    </div>


                    <div className={styles.featureCard}>

                        <span>🌱</span>

                        <h3>
                            Crop Management
                        </h3>

                        <p>
                            Farmers can add, update and manage
                            their available crops.
                        </p>

                    </div>


                    <div className={styles.featureCard}>

                        <span>🔍</span>

                        <h3>
                            Find Fresh Crops
                        </h3>

                        <p>
                            Customers can explore different
                            crops available from farmers.
                        </p>

                    </div>


                    <div className={styles.featureCard}>

                        <span>🔐</span>

                        <h3>
                            Secure Accounts
                        </h3>

                        <p>
                            Separate farmer and customer
                            accounts provide a secure experience.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= CROPS ================= */}

            <section
                className={styles.about}
                id="crops"
            >

                <div className={styles.sectionTitle}>

                    <span>
                        FRESH FROM FARM
                    </span>

                    <h2>
                        Explore Our Crops
                    </h2>

                    <p>
                        Discover fresh agricultural products
                        from local farmers.
                    </p>

                </div>


                <div className={styles.aboutCards}>

                    <div className={styles.aboutCard}>

                        <div className={styles.cardIcon}>
                            🍅
                        </div>

                        <h3>
                            Vegetables
                        </h3>

                        <p>
                            Fresh vegetables directly from
                            local farms.
                        </p>

                    </div>


                    <div className={styles.aboutCard}>

                        <div className={styles.cardIcon}>
                            🍎
                        </div>

                        <h3>
                            Fruits
                        </h3>

                        <p>
                            Fresh and naturally grown fruits
                            from trusted farmers.
                        </p>

                    </div>


                    <div className={styles.aboutCard}>

                        <div className={styles.cardIcon}>
                            🌾
                        </div>

                        <h3>
                            Grains
                        </h3>

                        <p>
                            Quality grains supplied directly
                            by farmers.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= CTA ================= */}

            <section className={styles.cta}>

                <h2>
                    Ready to Join AgriNext?
                </h2>

                <p>
                    Create your account and become part of
                    the smarter agricultural community.
                </p>

                <Link
                    to="/signup"
                    className={styles.ctaButton}
                >
                    Create Your Account →
                </Link>

                <Link
                    to="/signin"
                    className={styles.secondaryButton}
                >
                    Sign In
                </Link>

            </section>


            {/* ================= FOOTER ================= */}

            <footer
                className={styles.footer}
                id="contact"
            >

                <div className={styles.footerLogo}>
                    🌱 AgriNext
                </div>

                <p>
                    Connecting farmers and customers for a
                    better agricultural future.
                </p>


                <div className={styles.footerLinks}>

                    <a href="#home">
                        Home
                    </a>

                    <a href="#about">
                        About
                    </a>

                    <a href="#features">
                        Features
                    </a>

                    <a href="#crops">
                        Crops
                    </a>

                    <Link to="/signin">
                        Sign In
                    </Link>

                    <Link to="/signup">
                        Sign Up
                    </Link>

                </div>


                <p className={styles.copyright}>
                    © 2026 AgriNext. All rights reserved.
                </p>

            </footer>

        </div>
    );
};

export default Home;

