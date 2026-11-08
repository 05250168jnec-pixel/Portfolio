const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const root = document.documentElement;
const save = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };

// Theme toggle
const themeBtn = $("#themeToggle");
const isDark = () => root.dataset.theme === "dark";
themeBtn.textContent = isDark() ? "Light" : "Dark";
themeBtn.addEventListener("click", () => {
  const next = isDark() ? "light" : "dark";
  root.dataset.theme = next; save("theme", next);
  themeBtn.textContent = isDark() ? "Light" : "Dark";
});

// Adjustable text size (80% to 140%)
let scale = parseInt(root.style.fontSize) || 100;
const setScale = (n) => { scale = Math.min(140, Math.max(80, n)); root.style.fontSize = scale + "%"; save("scale", scale); };
$("#smaller").addEventListener("click", () => setScale(scale - 10));
$("#larger").addEventListener("click", () => setScale(scale + 10));

// Highlight the current slide in the side menu
const thumbs = $$(".thumb");
const spy = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) thumbs.forEach((a) => {
      const on = a.getAttribute("href") === "#" + en.target.id;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
  });
}, { rootMargin: "-40% 0px -55% 0px" });
$$(".slide").forEach((s) => spy.observe(s));

// Skill rings fill up when they scroll into view
const fill = (ring) => {
  const target = +ring.dataset.p, label = ring.querySelector("b");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) { ring.style.setProperty("--p", target); label.textContent = target + "%"; return; }
  let n = 0;
  const t = setInterval(() => {
    n = Math.min(target, n + 2);
    ring.style.setProperty("--p", n); label.textContent = n + "%";
    if (n >= target) clearInterval(t);
  }, 18);
};
const ringSpy = new IntersectionObserver((entries) => entries.forEach((en) => {
  if (en.isIntersecting) { fill(en.target); ringSpy.unobserve(en.target); }
}), { threshold: .6 });
$$(".ring").forEach((r) => ringSpy.observe(r));

// Contact form: checks the fields, then opens the visitor's email app
const msg = $("#formMsg");
$("#sendBtn").addEventListener("click", () => {
  const name = $("#cName").value.trim(), email = $("#cEmail").value.trim(), text = $("#cMsg").value.trim();
  msg.classList.remove("ok");
  if (!name || !text) { msg.textContent = "Please enter your name and a message."; return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { msg.textContent = "Please enter a valid email address."; return; }
  const to = document.querySelector('a[href^="mailto:"]').getAttribute("href").slice(7);
  const body = encodeURIComponent(text + "\n\nFrom: " + name + " (" + email + ")");
  location.href = "mailto:" + to + "?subject=" + encodeURIComponent("Portfolio message from " + name) + "&body=" + body;
  msg.classList.add("ok");
  msg.textContent = "Opening your email app…";
});

$("#year").textContent = new Date().getFullYear();


/* Background music */
(function(){
  const audio = document.getElementById('bgMusic');
  const btn = document.getElementById('musicBtn');
  if(!audio || !btn) return;

  audio.volume = 1.0; // gentle volume

  btn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().then(() => {
        btn.textContent = '🔇 Pause';
        btn.classList.add('on');
        btn.setAttribute('aria-pressed', 'true');
      }).catch(() => {
        btn.textContent = '🔊 Music';
      });
    } else {
      audio.pause();
      btn.textContent = '🔊 Music';
      btn.classList.remove('on');
      btn.setAttribute('aria-pressed', 'false');
    }
  });
})();

/* Walking Robot Cursor */
const robot = document.getElementById('walking-robot');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let robotX = mouseX;
let robotY = mouseY;
let isWalking = false;
let lastMouseX = mouseX;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  // Check if mouse is moving to trigger the walking animation
  if (Math.abs(mouseX - lastMouseX) > 1) {
    isWalking = true;
    robot.classList.add('walking');
  }
  lastMouseX = mouseX;
});

// Stop walking animation when mouse stops moving
let walkTimeout;
document.addEventListener('mousemove', () => {
  clearTimeout(walkTimeout);
  walkTimeout = setTimeout(() => {
    robot.classList.remove('walking');
  }, 100); // 100ms delay before stopping
});

function animateRobot() {
  // Math to make the robot smoothly glide towards the mouse
  robotX += (mouseX - robotX) * 0.1;
  robotY += (mouseY - robotY) * 0.1;

  // Flip the robot left or right based on mouse direction
  if (mouseX < robotX - 2) {
    robot.style.transform = `scaleX(-1)`; // Faces Left
  } else if (mouseX > robotX + 2) {
    robot.style.transform = `scaleX(1)`;  // Faces Right
  }

  // Apply the smooth floating position
  robot.style.left = robotX + 'px';
  robot.style.top = robotY + 'px';

  requestAnimationFrame(animateRobot);
}

if (robot) {
  animateRobot();
}