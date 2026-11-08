CHUNGKU - PERSONAL PORTFOLIO WEBSITE
====================================

A responsive personal portfolio website for Chungku, a Diploma in Computer
System and Network student at Jigme Namgyel Engineering College (JNEC),
Royal University of Bhutan. It was built for the course assignment
"Personal Portfolio Website Design and Development".

Live website : https://05250168jnec-pixel.github.io/portfolio/
Repository   : https://github.com/05250168jnec-pixel/portfolio
Email        : c.chungku07@gmail.com


SECTIONS
--------
1. Home - name, headline, short introduction, profile photo, quick facts
   and a table of contents
2. Introduction - about me, interests and career goal
3. Education - Diploma in Computer System and Network (JNEC) and
   Pelkhil School, Thimphu
4. Projects - BGP Network for BETN (with topology diagram), DNS Server
   Configuration, and this portfolio website
5. Tools used - Packet Tracer, GNS3, VirtualBox, Windows Server, Linux,
   Python, Git and GitHub, VS Code
6. Skills - self-rated skill rings for networking, server administration
   and web development
7. Certificates - five certificates with PDF copies and Coursera
   verification links
8. Let's work together - contact details and a contact form


FEATURES
--------
- Responsive layout for desktop, tablet and mobile; the side menu stays on
  the left and becomes a slim strip on small screens
- Slide-style side navigation that highlights the current section
- Adjustable text size (A- / A+), remembered in the browser
- Dark and light theme toggle, remembered in the browser
- Skill rings that animate when they scroll into view
- Contact form with validation; it opens the visitor's email app with the
  message filled in
- Click-to-enlarge BGP network diagram
- Background music button (off until the visitor presses it)
- A cute robot that follows the mouse cursor
- Scrapbook-style design with paper, tape, stickers and a polaroid photo


TECHNOLOGIES
------------
HTML5, CSS3 and vanilla JavaScript. Fonts come from Google Fonts (Bebas
Neue, Patrick Hand, Playfair Display and Special Elite). No frameworks or
build step are needed.


PROJECT STRUCTURE
-----------------
portfolio/
  index.html               Page content
  style.css                Design and responsive layout
  script.js                Menu highlight, theme, text size, rings,
                           contact form, music and robot
  profile.jpg              Profile photo
  images/
    bgp-topology.png       BGP network diagram (Packet Tracer)
    robot.png              Cursor-following robot
  music/
    Spring-Flowers.mp3     Background music
  certificates/            PDF copies of my certificates
  README.txt


RUN IT LOCALLY
--------------
1. Download or clone the repository.
2. Open the folder in VS Code and use the Live Server extension on
   index.html, or double-click index.html to open it in a browser.


DEPLOY WITH GITHUB PAGES
------------------------
1. Push all files to a public repository named "portfolio", with
   index.html in the root.
2. Go to Settings > Pages.
3. Under "Build and deployment", choose "Deploy from a branch", select
   "main" and "/ (root)", then click Save.
4. After a minute or two the site is live at
   https://05250168jnec-pixel.github.io/portfolio/


CUSTOMISING
-----------
- Change the text in index.html.
- Change the skill ring values by editing data-p="85", data-p="80" and
  data-p="70" in index.html.
- Change colours in the :root section at the top of style.css.


AUTHOR
------
Chungku
Diploma in Computer System and Network
Jigme Namgyel Engineering College, Royal University of Bhutan (2026)

All content and code in this portfolio is my own work. Certificates belong
to their issuing organisations.
