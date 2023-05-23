const content = {
    navbar: {
        links: [
            {
                target: "/",
                text: "Home"
            },
            {
                target: "/about",
                text: "About"
            },
            {
                target: "/new-movies",
                text: "New Movies"
            },
            {
                target: "/upcoming",
                text: "Upcoming"
            },
            {
                target: "/classics",
                text: "Classics"
            }
        ],

        hamburgerClosed: (
        <svg width="46" height="46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12h18"></path>
        <path d="M3 6h18"></path>
        <path d="M3 18h18"></path>
        </svg>
        ),
        hamburgerOpen: (
            <svg width="46" height="46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12h14"></path>
            </svg>
        ),

        logo: (
            <svg width="46" height="46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="20" x="2" y="2" rx="2.18" ry="2.18"></rect>
            <path d="M7 2v20"></path>
            <path d="M17 2v20"></path>
            <path d="M2 12h20"></path>
            <path d="M2 7h5"></path>
            <path d="M2 17h5"></path>
            <path d="M17 17h5"></path>
            <path d="M17 7h5"></path>
            </svg>
        )
    },

    footer: {
        footerText: "© 2023 MovieInfo. All rights reserved.",
        footerLinks: [
            {
                title: "Privacy Policy",
                to: "/impressum#privacy-policy"
            },
            {
                title: "Terms Of Service",
                to: "/impressum#tos"
            },
            {
                title: "Contact Us",
                to: "/#contact"
            }
        ]
    },

    home: {
        heroSection: [
            {
                title: "New Movies",
                target: "/new-movies",
                image: "https://image.tmdb.org/t/p/original/aAgGrfBwna1nO4M2USxwFgK5O0t.jpg",
                alt: "comming"
            },
            {
                title: "Upcoming",
                target: "/upcoming",
                image: "https://image.tmdb.org/t/p/original/j0xO6355h5HfvC425sWDT6tiBZM.jpg",
                alt: "comming"
            },
            {
                title: "Classics",
                target: "/classics",
                image: "https://image.tmdb.org/t/p/original/fMkfImQS9ZRRQbsKfeORnpyLMNL.jpg",
                alt: "comming"
            }
        ],

        aboutSection: {
            title: "About Us",
            content: "Welcome to MovieInfo! We are passionate movie enthusiasts dedicated to providing you with comprehensive and up-to-date information about films. Whether you're a casual moviegoer or a die-hard cinephile, our website is designed to be your go-to resource for all things related to ...",
            buttonText: "Read More",
            buttonTarget: "about"
        },

        contactSection: {
            svg: (
                <svg width="625" height="541" viewBox="0 0 625 541" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_12_2)">
<path d="M154.268 493.647L155.539 521.933L155.539 521.934C155.754 526.715 154.16 531.39 151.11 534.93C148.059 538.471 143.801 540.588 139.273 540.815L138.718 540.842L136.636 494.53L154.268 493.647Z" fill="#2F2E41"/>
<path d="M535.233 445.845C522.47 472.136 506.283 497.562 485.802 520.575C485.347 521.095 484.888 521.601 484.424 522.116L435.898 497.866C436.195 497.345 436.521 496.761 436.871 496.122C457.716 458.473 583.545 228.811 579.569 176.796C580.033 181.086 594.947 322.959 535.233 445.845Z" fill="#E6E6E6"/>
<path d="M495.164 525.254C494.485 525.661 493.788 526.06 493.087 526.446L456.684 508.253C457.193 507.872 457.786 507.422 458.467 506.915C469.62 498.462 502.783 473.101 535.233 445.845C570.105 416.555 604.16 385.084 609.217 370.062C608.19 373.507 576.272 478.217 495.164 525.254Z" fill="#E6E6E6"/>
<path d="M60.5546 539.713C91.5818 539.713 116.734 513.161 116.734 480.408C116.734 447.655 91.5818 421.103 60.5546 421.103C29.5274 421.103 4.37482 447.655 4.37482 480.408C4.37482 513.161 29.5274 539.713 60.5546 539.713Z" fill="#2F82FF"/>
<path d="M83.0583 455.521H38.0508C36.0621 455.523 34.1554 456.358 32.7491 457.843C31.3429 459.327 30.5518 461.34 30.5496 463.439V497.376C30.5518 499.475 31.3428 501.488 32.7491 502.973C34.1554 504.457 36.0621 505.292 38.0508 505.294H83.0584C85.0472 505.292 86.9539 504.457 88.3602 502.973C89.7664 501.488 90.5575 499.475 90.5597 497.376V463.439C90.5574 461.34 89.7664 459.327 88.3601 457.843C86.9538 456.358 85.0471 455.523 83.0583 455.521ZM83.0583 460.046C83.327 460.047 83.5945 460.084 83.8545 460.155L60.5598 479.771L37.4013 460.115C37.615 460.069 37.8326 460.046 38.0508 460.046H83.0583ZM83.0583 500.77H38.0508C37.1985 500.769 36.3814 500.411 35.7787 499.774C35.176 499.138 34.837 498.276 34.836 497.376V463.744L59.2117 484.433C59.5913 484.755 60.0635 484.931 60.5505 484.932C61.0376 484.933 61.5104 484.759 61.8911 484.439L86.2732 463.907V497.376C86.2723 498.276 85.9333 499.138 85.3306 499.774C84.7279 500.411 83.9107 500.769 83.0583 500.77Z" fill="white"/>
<path d="M277.365 394.787L289.936 394.896C291.208 394.907 292.467 394.625 293.625 394.069C294.783 393.514 295.812 392.699 296.641 391.68C297.47 390.662 298.079 389.465 298.424 388.173C298.77 386.88 298.844 385.524 298.642 384.199C298.425 382.772 297.894 381.419 297.091 380.248C296.288 379.078 295.236 378.123 294.019 377.46C292.803 376.797 291.456 376.445 290.087 376.432C288.718 376.419 287.365 376.745 286.138 377.385L274.283 383.56L233.738 393.105L216.368 374.357L206.39 391.705L229.83 410.822L277.365 394.787Z" fill="#FFB8B8"/>
<path d="M275.009 531.884L260.199 534.89C250.083 501.228 239.123 469.35 239.124 444.695C224.807 461.514 207.054 471.137 186.149 474.159L188.428 436.878L205.516 427.257L231.67 414.514C233.96 413.399 236.43 412.754 238.949 412.614C243.845 412.342 248.664 413.991 252.477 417.245C256.29 420.499 258.828 425.127 259.603 430.237L275.009 531.884Z" fill="#2F2E41"/>
<path d="M204.092 469.649L198.189 474.385C195.651 476.421 192.653 477.721 189.491 478.156C186.33 478.591 183.116 478.146 180.168 476.865C163.261 463.487 151.25 467.433 140.364 487.626C127.306 472.069 124.085 449.6 135.738 426.355L200.39 427.858L213.491 423.649L204.092 469.649Z" fill="#2F2E41"/>
<path d="M182.561 539.317C178.856 540.52 174.869 540.309 171.297 538.72C167.725 537.132 164.796 534.267 163.024 530.628C157.214 525.226 152.312 517.491 148.06 508.086C145.009 501.186 142.39 494.083 140.218 486.822C137.276 477.23 142.195 466.75 151.352 463.88C151.624 463.795 151.9 463.714 152.179 463.639C164.402 460.326 176.955 467.768 181.133 480.339L193.283 516.892C194.001 519.051 194.308 521.339 194.189 523.624C194.069 525.908 193.524 528.146 192.585 530.209C191.646 532.271 190.332 534.119 188.717 535.645C187.101 537.171 185.217 538.347 183.172 539.104C182.969 539.179 182.766 539.25 182.561 539.317Z" fill="#2F2E41"/>
<path opacity="0.2" d="M145.991 503.923C145.991 503.923 160.232 520.76 163.08 530.381L145.991 503.923Z" fill="black"/>
<path d="M90.7612 424.465L85.9952 436.745C85.513 437.987 85.2933 439.326 85.3514 440.667C85.4096 442.008 85.7442 443.32 86.332 444.511C86.9198 445.702 87.7465 446.743 88.7546 447.562C89.7627 448.38 90.9278 448.957 92.1688 449.252C93.5044 449.569 94.8918 449.551 96.2195 449.199C97.5472 448.846 98.778 448.17 99.8129 447.224C100.848 446.278 101.658 445.089 102.178 443.752C102.698 442.415 102.913 440.968 102.807 439.528L101.78 425.615L108.449 382.332L131.39 372.273L119.84 356.049L94.3183 371.92L90.7612 424.465Z" fill="#FFB8B8"/>
<path d="M204.662 426.355C188.295 455.375 155.668 466.613 127.723 443.888C132.639 426.838 148.51 379.715 138.257 377.911C116.487 387.548 116.456 364.921 112.384 353.597L161.94 334.355L188.712 342.172L194.2 344.228C197.772 345.566 200.87 348.026 203.077 351.278C205.284 354.53 206.496 358.417 206.547 362.417C195.302 379.568 186.976 397.864 204.662 426.355Z" fill="#2F82FF"/>
<path d="M210.927 402.904L191.276 385.767L197.826 345.78L224.598 375.845L210.927 402.904Z" fill="#2F82FF"/>
<path d="M537.012 128.206H534.203V46.9992C534.203 34.5342 529.512 22.5798 521.162 13.7657C512.813 4.95169 501.488 0 489.68 0H326.698C314.89 0 303.565 4.95169 295.216 13.7657C286.866 22.5798 282.175 34.5342 282.175 46.9992V492.508C282.175 504.973 286.866 516.928 295.216 525.742C303.565 534.556 314.89 539.508 326.698 539.508H489.679C501.488 539.508 512.812 534.556 521.162 525.742C529.511 516.928 534.202 504.973 534.202 492.508V186.011H537.011L537.012 128.206Z" fill="#3F3D56"/>
<path d="M491.476 12.2265H470.202C471.181 14.7587 471.555 17.5062 471.29 20.2269C471.026 22.9476 470.132 25.558 468.687 27.828C467.242 30.098 465.29 31.958 463.004 33.244C460.717 34.5301 458.166 35.2027 455.575 35.2027H362.205C359.615 35.2024 357.064 34.5297 354.778 33.2437C352.492 31.9578 350.54 30.098 349.095 27.8283C347.65 25.5586 346.756 22.9486 346.492 20.2283C346.228 17.508 346.601 14.7608 347.58 12.2287H327.706C318.888 12.2287 310.43 15.9267 304.195 22.5091C297.959 29.0916 294.456 38.0193 294.456 47.3283V492.181C294.456 501.49 297.959 510.418 304.195 517.001C310.43 523.583 318.888 527.281 327.706 527.281H491.47C500.289 527.281 508.746 523.583 514.981 517.001C521.217 510.418 524.72 501.49 524.72 492.181V47.3261C524.72 38.0171 521.217 29.0893 514.981 22.5069C508.746 15.9244 500.289 12.2264 491.47 12.2264L491.476 12.2265Z" fill="white"/>
<path d="M409.873 502.421C419.956 502.421 428.131 493.792 428.131 483.147C428.131 472.502 419.956 463.873 409.873 463.873C399.789 463.873 391.614 472.502 391.614 483.147C391.614 493.792 399.789 502.421 409.873 502.421Z" fill="#E6E6E6"/>
<path d="M335.802 304.9C334.076 304.9 332.672 306.592 332.672 308.672C332.672 310.751 334.076 312.444 335.802 312.444H483.374C485.1 312.444 486.504 310.751 486.504 308.672C486.504 306.592 485.1 304.9 483.374 304.9H335.802Z" fill="#E6E6E6"/>
<path d="M335.802 393.858C334.076 393.858 332.672 395.55 332.672 397.629C332.672 399.709 334.076 401.401 335.802 401.401H483.374C485.1 401.401 486.504 399.709 486.504 397.629C486.504 395.55 485.1 393.858 483.374 393.858H335.802Z" fill="#E6E6E6"/>
<path d="M335.802 327.531C334.076 327.531 332.672 329.223 332.672 331.302C332.672 333.382 334.076 335.074 335.802 335.074H399.303C401.029 335.074 402.433 333.382 402.433 331.302C402.433 329.223 401.029 327.531 399.303 327.531H335.802Z" fill="#E6E6E6"/>
<path d="M335.802 349.102C334.076 349.102 332.672 350.794 332.672 352.873C332.672 354.953 334.076 356.645 335.802 356.645H483.374C485.1 356.645 486.504 354.953 486.504 352.873C486.504 350.794 485.1 349.102 483.374 349.102H335.802Z" fill="#E6E6E6"/>
<path d="M335.802 371.732C334.076 371.732 332.672 373.424 332.672 375.504C332.672 377.583 334.076 379.275 335.802 379.275H399.303C401.029 379.275 402.433 377.583 402.433 375.504C402.433 373.424 401.029 371.732 399.303 371.732H335.802Z" fill="#E6E6E6"/>
<path d="M363.661 133.16H455.524C456.539 133.161 457.512 133.587 458.23 134.345C458.947 135.102 459.351 136.129 459.352 137.2V238.194C459.351 239.266 458.947 240.293 458.23 241.05C457.512 241.808 456.539 242.234 455.524 242.235H363.661C362.646 242.234 361.673 241.808 360.956 241.05C360.238 240.293 359.835 239.266 359.833 238.194V137.2C359.835 136.129 360.238 135.102 360.956 134.345C361.673 133.587 362.646 133.161 363.661 133.16Z" fill="#2F82FF"/>
<path d="M435.95 221.408C436.292 221.409 436.63 221.338 436.946 221.201C437.262 221.064 437.549 220.862 437.791 220.607C438.032 220.352 438.224 220.05 438.355 219.717C438.486 219.384 438.554 219.027 438.554 218.666C438.554 218.306 438.487 217.949 438.356 217.615C438.226 217.282 438.034 216.98 437.792 216.725C437.551 216.47 437.264 216.268 436.948 216.13C436.633 215.992 436.294 215.921 435.953 215.922H383.235C382.894 215.921 382.555 215.991 382.239 216.129C381.924 216.266 381.637 216.468 381.395 216.723C381.153 216.977 380.961 217.28 380.83 217.613C380.699 217.946 380.631 218.303 380.631 218.664C380.631 219.024 380.698 219.381 380.829 219.714C380.96 220.048 381.151 220.35 381.393 220.605C381.635 220.86 381.921 221.062 382.237 221.2C382.553 221.338 382.891 221.409 383.233 221.408H435.95Z" fill="white"/>
<path d="M435.95 205.246C436.639 205.246 437.3 204.957 437.788 204.442C438.275 203.928 438.549 203.23 438.549 202.503C438.549 201.775 438.275 201.077 437.788 200.563C437.3 200.049 436.639 199.76 435.95 199.76H383.235C382.546 199.759 381.885 200.048 381.397 200.562C380.91 201.076 380.636 201.774 380.635 202.501C380.635 203.229 380.908 203.927 381.396 204.441C381.883 204.956 382.544 205.246 383.233 205.246H435.95Z" fill="white"/>
<path d="M409.593 153.987C412.828 153.987 415.99 154.999 418.68 156.897C421.37 158.794 423.466 161.491 424.705 164.646C425.943 167.801 426.267 171.273 425.635 174.622C425.004 177.972 423.446 181.048 421.159 183.463C418.871 185.878 415.957 187.523 412.784 188.189C409.611 188.855 406.322 188.513 403.333 187.206C400.344 185.899 397.789 183.686 395.992 180.847C394.195 178.007 393.235 174.669 393.235 171.254C393.24 166.676 394.965 162.287 398.032 159.05C401.098 155.813 405.256 153.992 409.593 153.987Z" fill="white"/>
<path d="M200.888 329.12H152.327C151.329 329.119 150.371 328.7 149.665 327.954C148.958 327.209 148.561 326.198 148.56 325.143V303.048C148.56 295.195 151.515 287.664 156.775 282.112C162.035 276.559 169.169 273.44 176.608 273.44C184.046 273.44 191.18 276.559 196.44 282.112C201.7 287.664 204.655 295.195 204.655 303.048V325.143C204.654 326.198 204.257 327.209 203.551 327.954C202.844 328.7 201.887 329.119 200.888 329.12Z" fill="#2F2E41"/>
<path d="M200.013 316.494C205.46 305.975 201.798 292.785 191.832 287.035C181.867 281.284 169.373 285.15 163.925 295.67C158.478 306.189 162.14 319.379 172.105 325.129C182.071 330.88 194.565 327.014 200.013 316.494Z" fill="#FFB6B6"/>
<path d="M211.291 305.257H181.597L181.293 300.757L179.77 305.257H175.198L174.595 296.338L171.577 305.257H162.73V304.815C162.737 298.606 165.077 292.653 169.236 288.262C173.395 283.871 179.035 281.401 184.917 281.394H189.104C194.986 281.401 200.626 283.871 204.785 288.262C208.944 292.652 211.284 298.606 211.291 304.815V305.257Z" fill="#2F2E41"/>
<path d="M181.354 333.245C181.131 333.245 180.908 333.224 180.688 333.183L158.945 329.133V291.2H182.879L182.287 291.929C174.042 302.079 180.254 318.538 184.69 327.445C185.017 328.097 185.163 328.834 185.11 329.57C185.058 330.306 184.81 331.011 184.395 331.605C184.047 332.113 183.59 332.526 183.061 332.811C182.533 333.096 181.948 333.245 181.354 333.245Z" fill="#2F2E41"/>
<path d="M253.745 520.531L280.571 520.53H280.572C285.106 520.53 289.454 522.431 292.66 525.816C295.866 529.2 297.667 533.79 297.667 538.576V539.162L253.746 539.164L253.745 520.531Z" fill="#2F2E41"/>
<path d="M624.298 541H0.702247C0.516 541 0.33738 540.922 0.205683 540.783C0.073986 540.644 0 540.455 0 540.259C0 540.062 0.073986 539.873 0.205683 539.734C0.33738 539.595 0.516 539.517 0.702247 539.517H624.298C624.484 539.517 624.663 539.595 624.794 539.734C624.926 539.873 625 540.062 625 540.259C625 540.455 624.926 540.644 624.794 540.783C624.663 540.922 624.484 541 624.298 541Z" fill="#CACACA"/>
</g>
<defs>
<clipPath id="clip0_12_2">
<rect width="625" height="541" fill="white"/>
</clipPath>
</defs>
                </svg>
            )
        }
    },

    about: {
        aboutUsSection: {
            sectionTitle: "About Us",
            sectionContent: `Welcome to MovieInfo! We are passionate movie enthusiasts dedicated to providing you with comprehensive and up-to-date information about films. Whether you're a casual moviegoer or a die-hard cinephile, our website is designed to be your go-to resource for all things related to movies.

            At MovieInfo, we strive to offer a user-friendly platform where you can discover valuable insights about your favorite films, explore upcoming releases, and delve into the fascinating world of cinema. Our team of dedicated professionals works tirelessly to curate a rich collection of movie information, including details about cast and crew, plot summaries, reviews, ratings, and more.
            
            Our mission is to empower movie lovers with the knowledge they need to make informed decisions about which movies to watch. We aim to provide an engaging and informative experience, helping you navigate through the vast universe of films and discover hidden gems that resonate with your interests and preferences.
            
            We are committed to accuracy and excellence, ensuring that our content is meticulously researched and regularly updated. Whether you're curious about the latest blockbusters, classic films, or independent cinema, MovieInfo is here to accompany you on your cinematic journey.
            
            We value your feedback and suggestions, as they enable us to enhance our platform and better serve your movie-related needs. Feel free to reach out to us with any questions, comments, or inquiries you may have. We appreciate your support and trust in MovieInfo.
            
            Thank you for choosing MovieInfo as your reliable source for film information. Enjoy exploring the world of movies with us!
            
            The MovieInfo Team`,
            backgroundImageUrl: "https://image.tmdb.org/t/p/original/m8JTwHFwX7I7JY5fPe4SjqejWag.jpg"
        }
    },

    movie: {
        genres: [
            {
                id: 28,
                name: "Action",
                color: "#FF0000",
              },
              {
                id: 12,
                name: "Adventure",
                color: "#00FF00",
              },
              {
                id: 16,
                name: "Animation",
                color: "#0000FF",
              },
              {
                id: 35,
                name: "Comedy",
                color: "#BBBB00",
              },
              {
                id: 80,
                name: "Crime",
                color: "#FF00FF",
              },
              {
                id: 99,
                name: "Documentary",
                color: "#00FFFF",
              },
              {
                id: 18,
                name: "Drama",
                color: "#800080",
              },
              {
                id: 10751,
                name: "Family",
                color: "#FFA500",
              },
              {
                id: 14,
                name: "Fantasy",
                color: "#FFC0CB",
              },
              {
                id: 36,
                name: "History",
                color: "#8B4513",
              },
              {
                id: 27,
                name: "Horror",
                color: "#FF4500",
              },
              {
                id: 10402,
                name: "Music",
                color: "#FFD700",
              },
              {
                id: 9648,
                name: "Mystery",
                color: "#9400D3",
              },
              {
                id: 10749,
                name: "Romance",
                color: "#FF1493",
              },
              {
                id: 878,
                name: "Science Fiction",
                color: "#00CED1",
              },
              {
                id: 10770,
                name: "TV Movie",
                color: "#808080",
              },
              {
                id: 53,
                name: "Thriller",
                color: "#DC143C",
              },
              {
                id: 10752,
                name: "War",
                color: "#2F4F4F",
              },
              {
                id: 37,
                name: "Western",
                color: "#B8860B",
              },
        ],
        ratingsIcon: (
            <svg width="23" height="23" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
        )
    },

    new: {
        apiLink: "https://api.themoviedb.org/3/discover/movie"
    },

    movieDetails: {
        backArrow: (
            <svg width="36" height="36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5"></path>
            <path d="m12 19-7-7 7-7"></path>
            </svg>
        )
    },

    apiKey: "326d00d6bd0669f591ae67bf68c30658",
    apiImageUrl: "https://image.tmdb.org/t/p/original",

    impressum: {
        owner: (
            <>
                Page Owner: <br />
                MovieInfo <br />
                Schulring 1 und 6 <br />
                3370 Ybbs an der Donau <br />
                Tel.: 0676 9081045 <br />
                Email: info@movieinfo.com <br />
                Website: <a href="#">www.movieinfo.com</a>
            </>
        ),
        
        privacyPolicy: {
            header: "Privacy Policy: ",
            desc: "At MovieInfo, we take your privacy seriously. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website.",
            policyItems: [
                {
                    title: "Information Collection:",
                    content: "We may collect personal information, such as your name and email address, when you voluntarily provide it to us through contact forms or when you subscribe to our newsletter. Additionally, we may automatically collect certain information about your device, browsing actions, and usage patterns when you interact with our website."
                },
                {
                    title: "Information Usage: ",
                    content: "We use the collected information to improve and personalize your experience on MovieInfo. This includes providing you with relevant content, responding to your inquiries or requests, and sending you newsletters or promotional materials if you have opted to receive them. We may also use the information for analytical purposes to analyze trends, administer the website, and gather demographic information."
                },
                {
                    title: "Information Disclosure:",
                    content: "We do not sell, trade, or transfer your personal information to third parties without your consent, except in the following cases: (1) if required by law or to comply with legal processes, (2) to protect and defend our rights or property, (3) to prevent or investigate possible wrongdoing in connection with the website, (4) to enforce our policies or terms of use, or (5) with your explicit consent."
                },
                {
                    title: "Data Security:",
                    content: "We take appropriate measures to protect the security of your personal information and maintain data accuracy. However, please be aware that no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee the absolute security of your information."
                },
                {
                    title: "External Links:",
                    content: "Our website may contain links to external sites that are not operated by us. We have no control over the content and practices of these sites and are not responsible for their privacy policies. We encourage you to review the privacy policies of any external sites you visit."
                },
                {
                    title: "Changes to the Privacy Policy:",
                    content: "We may update our Privacy Policy from time to time. Any changes will be posted on this page, and the revised version will be effective immediately upon posting. We encourage you to review this Privacy Policy periodically for any updates."
                },
                {
                    title: "Contact Us:",
                    content: "If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at movie.info@movieinfo.com"
                }
            ],

            agreement: "By using MovieInfo, you agree to the terms and conditions outlined in this Privacy Policy."
        },

        termsOfService: {
            header: "Terms Of Service",

            desc: 'These Terms of Service ("Terms") govern your use of the MovieInfo website. By accessing or using our website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please refrain from using our website.',

            terms: [
                {
                    title: "Use of Content:",
                    content: [
                        "All content on MovieInfo, including text, images, videos, and any other materials, is provided for informational purposes only. It is protected by intellectual property laws and may not be used without our prior written consent.",

                        "You may view, download, or print content from our website for personal, non-commercial use only. Any unauthorized use, reproduction, or distribution of our content is strictly prohibited."
                    ] 
                },
                {
                    title: "User Conduct:",
                    content: [
                        "You agree to use our website in compliance with applicable laws and regulations.",

                        "You are solely responsible for any content you submit or post on MovieInfo. By submitting content, you grant us a non-exclusive, royalty-free, worldwide license to use, reproduce, modify, and distribute the content for the purpose of operating and promoting the website.",

                        "You must not engage in any activity that may disrupt or interfere with the proper functioning of our website or infringe upon the rights of others."
                    ]
                },
                {
                    title: "Third-Party Links:",
                    content: [
                        "MovieInfo may contain links to third-party websites or services that are not owned or controlled by us. We do not endorse or assume any responsibility for the content, privacy policies, or practices of these third-party sites or services.",
                        "We recommend reviewing the terms and privacy policies of any third-party websites you visit through links on our website."
                    ]
                },
                {
                    title: "Disclaimer of Warranties:",
                    content: [
                        'MovieInfo is provided on an "as is" and "as available" basis. We do not warrant that the website will be uninterrupted, error-free, or secure. We make no representations or warranties about the accuracy, reliability, or completeness of the content.',
                        "We disclaim any warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement."
                    ]
                },
                {
                    title: "Limitation of Liability:",
                    content: [
                        "In no event shall MovieInfo or its affiliates, directors, officers, employees, or agents be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the website or the content, even if advised of the possibility of such damages."
                    ]
                },
                {
                    title: "Changes to the Terms:",
                    content: [
                        "We reserve the right to modify or replace these Terms at any time without prior notice. Any changes will be effective immediately upon posting the updated Terms on the website. It is your responsibility to review the Terms periodically for any updates."
                    ]
                },
                {
                    title: "Governing Law:",
                    content: [
                        "These Terms shall be governed by and construed in accordance with the laws of Austria, without regard to its conflict of law provisions."
                    ]
                }
            ],

            postDesc: 'If you have any questions or concerns regarding these Terms, please contact us at movie.info@movieinfo.com. By using MovieInfo, you agree to abide by these Terms of Service.'
        }
    }
}

export default content