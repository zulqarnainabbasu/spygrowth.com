<header class="site-header">

    <div class="container">

        <a href="<?php echo home_url('/'); ?>" class="logo">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/SPYGROWTH-logo1.png" alt="SpyGrowth">
        </a>

        <nav class="desktop-nav">

            <ul>

                <li>
                    <a href="<?php echo home_url('/'); ?>">Home</a>
                </li>

                <li>
                    <a href="<?php echo home_url('/blog'); ?>">Blog</a>
                </li>

                <li>
                    <a href="<?php echo home_url('/'); ?>#how-we-work">How We Work</a>
                </li>

                <li>
                    <a href="<?php echo home_url('/'); ?>#case-studies">Case Studies</a>
                </li>

                <li>
                    <a href="<?php echo home_url('/contact'); ?>">Contact</a>
                </li>

            </ul>

        </nav>

        <a href="https://calendly.com/hanzlasajid99/" class="header-btn">
            Book a Call
        </a>

        <button class="menu-toggle">
            <i class="fa-solid fa-bars"></i>
        </button>

    </div>

</header>

<div class="mobile-menu">

    <div class="mobile-header">

        <a href="<?php echo home_url('/'); ?>" class="logo">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/SPYGROWTH-logo1.png" alt="SpyGrowth">
        </a>

        <button class="close-menu">
            <i class="fa-solid fa-xmark"></i>
        </button>

    </div>

    <ul>

        <li><a href="<?php echo home_url('/'); ?>">Home</a></li>

        <li><a href="<?php echo home_url('/blog'); ?>">Blog</a></li>

        <li><a href="<?php echo home_url('/'); ?>#how-we-work">How We Work</a></li>

        <li><a href="<?php echo home_url('/'); ?>#case-studies">Case Studies</a></li>

        <li><a href="<?php echo home_url('/contact'); ?>">Contact</a></li>

    </ul>

</div>

<div class="menu-overlay"></div>