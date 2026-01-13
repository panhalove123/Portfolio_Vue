<template>
  <div>
    <!-- Top Navbar - Positioned on the right side -->
    <nav class="top-navbar">
      <div class="navbar-container">
        <ul class="navbar-list">
          <li class="navbar-item">
            <router-link to="/" class="navbar-link" exact-active-class="active">
              <span class="nav-icon">👤</span>
              <span class="nav-text">About</span>
              <span class="nav-underline"></span>
            </router-link>
          </li>
          <li class="navbar-item">
            <router-link to="/resume" class="navbar-link" exact-active-class="active">
              <span class="nav-icon">📄</span>
              <span class="nav-text">Resume</span>
              <span class="nav-underline"></span>
            </router-link>
          </li>
          <li class="navbar-item">
            <router-link to="/project" class="navbar-link" exact-active-class="active">
              <span class="nav-icon">💼</span>
              <span class="nav-text">Projects</span>
              <span class="nav-underline"></span>
            </router-link>
          </li>
          <li class="navbar-item">
            <router-link to="/contact" class="navbar-link" exact-active-class="active">
              <span class="nav-icon">📧</span>
              <span class="nav-text">Contact</span>
              <span class="nav-underline"></span>
            </router-link>
          </li>
        </ul>
        <div class="theme-toggle">
          <button @click="toggleTheme" class="theme-btn" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
            <transition name="fade">
              <span v-if="isDark" key="moon">🌙</span>
              <span v-else key="sun">☀️</span>
            </transition>
          </button>
        </div>
      </div>
    </nav>

    <!-- Enhanced Sidebar -->
    <aside class="sidebar" :class="{ collapsed: isCollapsed }">
      <button class="collapse-btn" @click="toggleSidebar" :aria-label="isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'">
        <transition name="rotate">
          <span v-if="isCollapsed" key="expand">→</span>
          <span v-else key="collapse">←</span>
        </transition>
      </button>
      
      <div class="sidebar-info">
        <div class="avatar-section">
          <figure class="avatar-box">
            <img src="../assets/images/Panha.jpg" alt="Nhean Panha" class="avatar-img" />
            <div class="status-indicator"></div>
            <transition name="bounce">
              <div v-if="!isCollapsed" class="avatar-glow"></div>
            </transition>
            <transition name="pulse">
              <div v-if="!isCollapsed" class="avatar-ring"></div>
            </transition>
          </figure>
          <transition name="fade">
            <div class="info-content" v-show="!isCollapsed">
              <h1 class="name gradient-text">Nhean Panha</h1>
              <p class="title">
                <span id="role-slider" class="role-text">Software Developer</span>
              </p>
              <div class="location">
                <span class="location-icon">📍</span>
                <span>Phnom Penh, Cambodia</span>
              </div>
              <div class="profile-badges">
                <span class="badge badge-green">Available</span>
                <span class="badge badge-blue">Open to Work</span>
              </div>
            </div>
          </transition>
        </div>

        <transition name="fade">
          <div class="separator" v-show="!isCollapsed"></div>
        </transition>

        <transition name="slide-fade">
        <div class="contact-section" 
            v-show="!isCollapsed || isMobileSidebarOpen">
          <h3 class="section-title">Get In Touch</h3>
          <ul class="contacts-list">
            <li class="contact-item">
              <div >
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div class="contact-info">
                <p class="contact-title">Email</p>
                <a href="mailto:nheanpanha12629@gmail.com" class="contact-link">
                  nheanpanha12629@gmail.com
                </a>
              </div>
            </li>
            <li class="contact-item">
              <div >
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>
              <div class="contact-info">
                <p class="contact-title">Phone</p>
                <a href="tel:+855978211204" class="contact-link">
                  +(855) 978 211 204
                </a>
              </div>
            </li>
            <li class="contact-item">
              <div >
                <ion-icon name="calendar-outline"></ion-icon>
              </div>
              <div class="contact-info">
                <p class="contact-title">Birthday</p>
                <time datetime="2004-11-02">November 02, 2004</time>
              </div>
            </li>
          </ul>
        </div>
      </transition>


        <transition name="fade">
          <div class="separator" v-show="!isCollapsed"></div>
        </transition>

     <transition name="slide-fade">
  <div class="social-section" v-show="!isCollapsed">
    <h3 class="section-title text-gray-800 dark:text-gray-200 font-bold text-sm uppercase mb-3">Follow Me</h3>
    <ul class="flex gap-9 justify-center">
      <!-- Facebook -->
      <li>
        <a href="https://www.facebook.com/share/16s6v1t3U3/?mibextid=wwXIfr" 
           target="_blank" rel="noopener" 
           class="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white hover:scale-110 hover:shadow-lg transition-transform relative group">
          <!-- Facebook SVG Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.598 0 0 .598 0 1.326v21.348C0 23.402.598 24 1.326 24h11.495v-9.294H9.692v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.098 2.794.142v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.402 24 24 23.402 24 22.674V1.326C24 .598 23.402 0 22.675 0z"/>
          </svg>
          <span class="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Facebook
          </span>
        </a>
      </li>

      <!-- LinkedIn -->
      <li>
        <a href="https://www.linkedin.com/in/nhean-panha-11420b345/" 
           target="_blank" rel="noopener" 
           class="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-700 text-white hover:scale-110 hover:shadow-lg transition-transform relative group">
          <!-- LinkedIn SVG Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M4.98 3.5c0 1.381-1.116 2.5-2.49 2.5C1.117 6 0 4.881 0 3.5S1.117 1 2.49 1 4.98 2.119 4.98 3.5zM0 8h4.981v16H0V8zm7.982 0h4.773v2.181h.067c.665-1.26 2.287-2.589 4.709-2.589 5.035 0 5.96 3.31 5.96 7.615V24h-4.981v-7.593c0-1.811-.033-4.141-2.521-4.141-2.521 0-2.906 1.968-2.906 4.006V24H7.982V8z"/>
          </svg>
          <span class="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            LinkedIn
          </span>
        </a>
      </li>

      <!-- Telegram -->
      <li>
        <a href="https://t.me/Nhean_PanhaA" 
           target="_blank" rel="noopener" 
           class="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-400 text-white hover:scale-110 hover:shadow-lg transition-transform relative group">
          <!-- Telegram SVG Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M9.94 16.56l-.388 5.497c.555 0 .796-.24 1.08-.527l2.593-2.412 5.373 3.925c.985.546 1.682.261 1.936-.906l3.509-16.408c.33-1.527-.555-2.173-1.527-1.775L1.14 9.562c-1.514.584-1.5 1.41-.261 1.765l5.985 1.864L19.32 5.5c.5-.36.957-.16.583.224l-10.187 10.837z"/>
          </svg>
          <span class="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Telegram
          </span>
        </a>
      </li>
    </ul>
  </div>
</transition>


      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isCollapsed = ref(false)
const isDark = ref(false)

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

onMounted(() => {
  // Enhanced role slider with more dynamic effects
  const roles = [
    "Software Developer", 
    "Frontend Developer", 
    "Backend Developer", 
    "UX & UI Designer", 
    "QA Tester",
    "Full Stack Developer"
  ]
  let roleIndex = 0

  setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length
    const el = document.getElementById("role-slider")
    if (el) {
      el.style.opacity = '0'
      setTimeout(() => {
        el.textContent = roles[roleIndex]
        el.style.opacity = '1'
      }, 300)
    }
  }, 3000)
})
</script>

<style scoped>
/* CSS Variables for theming */
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --dark-bg: #1a1a2e;
  --dark-secondary: #16213e;
  --text-primary: #2d3748;
  --text-secondary: #4a5568;
  --white: #ffffff;
  --shadow: 0 10px 25px rgba(0,0,0,0.1);
  --shadow-hover: 0 20px 40px rgba(0,0,0,0.15);
}

/* Top Navbar */
.top-navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 280px;
  height: 70px;
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  z-index: 200;
  box-shadow: 0 4px 24px rgba(102,126,234,0.10), 0 1.5px 0 0 #764ba2;
  transition: all 0.3s ease;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
}

.navbar-list {
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: center;
}

.navbar-item {
  position: relative;
}

.navbar-link {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--text-primary);
  font-weight: 700;
  font-size: 1.08rem;
  text-decoration: none;
  padding: 0.85rem 1.5rem 0.7rem 1.5rem;
  border-radius: 16px;
  position: relative;
  overflow: visible;
  background: transparent;
  transition: color 0.22s, background 0.22s, box-shadow 0.22s, transform 0.18s;
  box-shadow: 0 0 0 rgba(102,126,234,0);
  z-index: 1;
}

.navbar-link .nav-icon {
  font-size: 1.25rem;
  transition: transform 0.22s;
}

.navbar-link .nav-text {
  letter-spacing: 0.5px;
  position: relative;
  z-index: 2;
}

.navbar-link .nav-underline {
  position: absolute;
  left: 50%;
  bottom: 0.2rem;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
  transition: width 0.35s cubic-bezier(.55,0,.1,1), left 0.35s cubic-bezier(.55,0,.1,1);
  z-index: 0;
}

.navbar-link:hover .nav-underline,
.navbar-link.active .nav-underline,
.navbar-link.router-link-exact-active .nav-underline {
  width: 80%;
  left: 10%;
}

.navbar-link:hover,
.navbar-link.active,
.navbar-link.router-link-exact-active {
  color: #764ba2;
  background: linear-gradient(90deg, #f3e8ff 0%, #e0e7ff 100%);
  box-shadow: 0 2px 16px rgba(102,126,234,0.08);
  transform: translateY(-2px) scale(1.04);
}

.navbar-link:hover .nav-icon,
.navbar-link.active .nav-icon,
.navbar-link.router-link-exact-active .nav-icon {
  transform: scale(1.2) rotate(-8deg);
  color: #667eea;
}

.navbar-link:active {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

.theme-toggle {
  margin-left: 1rem;
}

.theme-btn {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 12px rgba(102,126,234,0.13);
}

.theme-btn:hover {
  transform: scale(1.1) rotate(180deg);
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

/* Enhanced Sidebar */
.sidebar {
  width: 280px;
  min-height: 100vh;
  background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
  border-right: 1px solid rgba(0,0,0,0.05);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
  overflow: hidden;
}

.sidebar.collapsed {
  width: 80px;
}

.collapse-btn {
  position: absolute;
  top: 20px;
  right: -15px;
  background: var(--primary-gradient);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 0.8rem;
  z-index: 101;
  transition: all 0.3s ease;
  box-shadow: var(--shadow);
}

.collapse-btn:hover {
  transform: scale(1.1);
}

.sidebar-info {
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.avatar-section {
  text-align: center;
  margin-bottom: 2rem;
}

.avatar-box {
  position: relative;
  margin: 0 auto 1rem;
  width: 110px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  box-shadow: 0 6px 32px rgba(102,126,234,0.13);
  transition: box-shadow 0.3s;
}

.avatar-box:hover {
  box-shadow: 0 12px 48px rgba(102,126,234,0.18), 0 0 0 6px #ede9fe;
}

.avatar-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 2px 16px rgba(102,126,234,0.10);
  background: #f3f4f6;
  transition: transform 0.22s, box-shadow 0.22s;
  z-index: 1;
}

.avatar-img:hover {
  transform: scale(1.06) rotate(-2deg);
  box-shadow: 0 8px 32px rgba(118,75,162,0.18);
}

.status-indicator {
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  background: #10b981;
  border-radius: 50%;
  border: 3px solid white;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
  100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

.info-content {
  text-align: center;
}

.name {
  font-size: 1.5rem;
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
}

.title {
  margin-bottom: 1rem;
}

.role-text {
  font-size: 1rem;
  color: var(--text-secondary);
  font-weight: 600;
  transition: opacity 0.3s ease;
}

.location {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.separator {
  height: 2px;
  background: var(--accent-gradient);
  margin: 1.5rem 0;
  border-radius: 2px;
  opacity: 0.3;
}

.section-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.contacts-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.75rem;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(102, 126, 234, 0.05);
  transform: translateX(5px);
}

.icon-box {
  border-radius: 12px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.1rem;
  color: white;
  transition: all 0.3s ease;
}

.icon-box.email { background: var(--primary-gradient); }
.icon-box.phone { background: var(--secondary-gradient); }
.icon-box.birthday { background: var(--accent-gradient); }

.contact-info {
  flex: 1;
}

.contact-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.25rem 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact-link, address, time {
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #667eea;
}

.social-list {
  display: flex;
  gap: 1rem;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 45px;
  height: 45px;
  transition: all 0.3s ease;
  color: white;
  font-size: 1.2rem;
  position: relative;
  overflow: hidden;
}

.social-link.facebook { background: #1877f2; }
.social-link.linkedin { background: #0077b5; }
.social-link.telegram { background: #0088cc; }

.social-link:hover {
  transform: translateY(-3px) scale(1.1);
  box-shadow: var(--shadow-hover);
}

.telegram-icon {
  font-size: 1.1rem;
}

/* Animations */
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.fade-enter-to, .fade-leave-from { opacity: 1; }

.rotate-enter-active, .rotate-leave-active { transition: transform 0.4s; }
.rotate-enter-from, .rotate-leave-to { transform: rotate(-180deg); }
.rotate-enter-to, .rotate-leave-from { transform: rotate(0); }

.bounce-enter-active { animation: bounceIn 0.7s; }
@keyframes bounceIn {
  0% { transform: scale(0.8); opacity: 0; }
  60% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); }
}

.slide-fade-enter-active, .slide-fade-leave-active { transition: all 0.5s cubic-bezier(.55,0,.1,1); }
.slide-fade-enter-from, .slide-fade-leave-to { opacity: 0; transform: translateY(30px);}
.slide-fade-enter-to, .slide-fade-leave-from { opacity: 1; transform: translateY(0); }

/* Avatar Glow & Ring */
.avatar-glow {
  position: absolute;
  top: 50%; left: 50%;
  width: 120px; height: 120px;
  background: radial-gradient(circle, #667eea55 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  pointer-events: none;
  animation: avatarGlow 2.5s infinite alternate;
}
@keyframes avatarGlow {
  0% { opacity: 0.5; }
  100% { opacity: 1; }
}
.avatar-ring {
  position: absolute;
  top: 50%; left: 50%;
  width: 130px; height: 130px;
  border: 3px dashed #764ba2;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  pointer-events: none;
  animation: avatarRingSpin 6s linear infinite;
}
@keyframes avatarRingSpin {
  0% { transform: translate(-50%, -50%) rotate(0deg);}
  100% { transform: translate(-50%, -50%) rotate(360deg);}
}

/* Gradient Text for Name */
.gradient-text {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Profile Badges */
.profile-badges {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}
.badge {
  padding: 0.25rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 700;
  color: white;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(102,126,234,0.10);
  background: #667eea;
  display: inline-block;
}
.badge-green { background: #10b981; }
.badge-blue { background: #3b82f6; }

/* Social Tooltip */
.social-link {
  position: relative;
}
.social-tooltip {
  visibility: hidden;
  opacity: 0;
  background: #222;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  padding: 0.3rem 0.8rem;
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.85rem;
  white-space: nowrap;
  z-index: 10;
  transition: opacity 0.2s, visibility 0.2s;
  pointer-events: none;
}
.social-link:hover .social-tooltip {
  visibility: visible;
  opacity: 1;
}

/* Sidebar Quote */
.sidebar-quote {
  margin-top: 2.5rem;
  padding: 1.2rem 1rem 1.2rem 2.2rem;
  background: linear-gradient(90deg, #f093fb 0%, #f5576c 100%);
  border-radius: 18px;
  color: #fff;
  font-size: 1rem;
  font-style: italic;
  position: relative;
  box-shadow: 0 4px 16px rgba(240,147,251,0.10);
  text-align: left;
}
.quote-icon {
  position: absolute;
  left: 1rem;
  top: 1.1rem;
  font-size: 1.5rem;
  opacity: 0.3;
}
.quote-text {
  margin-left: 1.5rem;
  display: inline-block;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .top-navbar {
    left: 80px;
  }
  
  .sidebar {
    width: 80px;
  }
  
  .sidebar-info .info-content,
  .sidebar-info .contacts-list,
  .sidebar-info .separator,
  .sidebar-info .social-section {
    display: none;
  }
}

@media (max-width: 768px) {
  .top-navbar {
    left: 0;
    right: 0;
    height: 60px;
  }
  
  .navbar-list {
    gap: 0.25rem;
  }
  
  .navbar-link {
    padding: 0.5rem 0.75rem;
    font-size: 0.85rem;
  }
  
  .nav-icon {
    font-size: 1rem;
  }
  
  .sidebar {
    transform: translateX(-100%);
    width: 280px;
  }
  
  .sidebar.show {
    transform: translateX(0);
  }
}

/* Dark theme */
.dark .top-navbar {
  background: rgba(26, 26, 46, 0.95);
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.dark .navbar-link {
  color: #e2e8f0;
}

.dark .sidebar {
  background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
  border-right-color: rgba(255, 255, 255, 0.1);
}

.dark .name {
  -webkit-text-fill-color: #e2e8f0;
}

.dark .section-title,
.dark .contact-title {
  color: #e2e8f0;
}

.dark .role-text,
.dark .contact-link,
.dark .location {
  color: #a0aec0;
}
</style>