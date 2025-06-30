<template>
  <div class="resume-container">
    <div class="content-wrapper">
      <div class="resume-card">
        <header class="page-header">
          <div class="header-content">
            <h2 class="page-title">My Resume</h2>
            <div class="title-decoration"></div>
            <p class="page-subtitle">My journey, skills, and achievements</p>
          </div>
        </header>

        <div class="resume-content">
          <!-- Summary Section -->
          <section class="summary-section">
            <div class="summary-card">
              <h3 class="section-title">Professional Summary</h3>
              <p class="summary-text">
                Passionate and dedicated web developer with 2+ years of experience in creating 
                innovative digital solutions. Skilled in both frontend and backend technologies, 
                with a strong foundation in modern web development practices and a keen eye for 
                user experience design.
              </p>
              <div class="summary-stats">
                <div class="stat-item">
                  <div class="stat-number">15+</div>
                  <div class="stat-label">Projects</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">10+</div>
                  <div class="stat-label">Technologies</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">2+</div>
                  <div class="stat-label">Years</div>
                </div>
              </div>
            </div>
          </section>

          <!-- Education & Experience Timeline -->
          <section class="timeline-section">
            <div class="timeline-container">
              <!-- Education -->
              <div class="timeline-column">
                <div class="timeline-header">
                  <div class="timeline-icon education">
                    <span>🎓</span>
                  </div>
                  <h3 class="timeline-title">Education</h3>
                </div>
                
                <div class="timeline-list">
                  <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                      <div class="timeline-date">2024 - Present</div>
                      <h4 class="timeline-item-title">Associate Degree in Web Development</h4>
                      <p class="timeline-institution">Passerelles Numériques Cambodia (PNC)</p>
                      <p class="timeline-description">
                        Comprehensive program covering full-stack web development, including 
                        modern frameworks, database management, and software engineering principles.
                      </p>
                      <div class="timeline-highlights">
                        <span class="highlight">Full-Stack Development</span>
                        <span class="highlight">Database Design</span>
                        <span class="highlight">Software Engineering</span>
                      </div>
                    </div>
                  </div>

                  <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                      <div class="timeline-date">2020 - 2023</div>
                      <h4 class="timeline-item-title">High School Diploma</h4>
                      <p class="timeline-institution">Hun Sen Prasat Bakong High School</p>
                      <p class="timeline-description">
                        Completed secondary education with focus on mathematics and sciences, 
                        laying the foundation for logical thinking and problem-solving skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Experience -->
              <div class="timeline-column">
                <div class="timeline-header">
                  <div class="timeline-icon experience">
                    <span>💼</span>
                  </div>
                  <h3 class="timeline-title">Experience</h3>
                </div>
                
                <div class="timeline-list">
                  <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                      <div class="timeline-date">March - April 2025</div>
                      <h4 class="timeline-item-title">Full-Stack Developer & Data Analyst</h4>
                      <p class="timeline-institution">Virtual Company 1 Project</p>
                      <p class="timeline-description">
                        Led development of comprehensive POS system and e-commerce website for salon business.
                      </p>
                      <ul class="timeline-achievements">
                        <li>Designed responsive UI/UX in Figma for desktop and mobile</li>
                        <li>Built POS system for inventory and customer management</li>
                        <li>Developed e-commerce platform with PHP MVC architecture</li>
                        <li>Implemented product catalog with filtering and sorting</li>
                      </ul>
                      <div class="timeline-tech">
                        <span class="tech-tag">PHP</span>
                        <span class="tech-tag">MySQL</span>
                        <span class="tech-tag">Bootstrap</span>
                        <span class="tech-tag">JavaScript</span>
                      </div>
                    </div>
                  </div>

                  <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                      <div class="timeline-date">January 2025</div>
                      <h4 class="timeline-item-title">Team Leader - JavaScript Project</h4>
                      <p class="timeline-institution">Inventory Management System</p>
                      <p class="timeline-description">
                        Led team in designing and developing inventory management system using vanilla JavaScript.
                      </p>
                      <ul class="timeline-achievements">
                        <li>Managed team collaboration and task distribution</li>
                        <li>Implemented dynamic inventory tracking features</li>
                        <li>Ensured timely delivery and quality standards</li>
                      </ul>
                      <div class="timeline-tech">
                        <span class="tech-tag">JavaScript</span>
                        <span class="tech-tag">HTML5</span>
                        <span class="tech-tag">CSS3</span>
                      </div>
                    </div>
                  </div>

                  <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                      <div class="timeline-date">November 2024</div>
                      <h4 class="timeline-item-title">Team Leader - Algorithm Project</h4>
                      <p class="timeline-institution">Face Detection Application</p>
                      <p class="timeline-description">
                        Led development of face detection application using Python and computer vision.
                      </p>
                      <ul class="timeline-achievements">
                        <li>Implemented real-time face detection via webcam</li>
                        <li>Developed automatic name identification system</li>
                        <li>Optimized algorithm performance and accuracy</li>
                      </ul>
                      <div class="timeline-tech">
                        <span class="tech-tag">Python</span>
                        <span class="tech-tag">OpenCV</span>
                        <span class="tech-tag">Machine Learning</span>
                      </div>
                    </div>
                  </div>

                  <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                      <div class="timeline-date">October 2024</div>
                      <h4 class="timeline-item-title">Team Leader - Web Design Project</h4>
                      <p class="timeline-institution">Music Band Website</p>
                      <p class="timeline-description">
                        Designed and developed responsive website for music band with modern aesthetics.
                      </p>
                      <ul class="timeline-achievements">
                        <li>Created responsive design with SASS and CSS3</li>
                        <li>Implemented Git workflow for team collaboration</li>
                        <li>Debugged and optimized website performance</li>
                      </ul>
                      <div class="timeline-tech">
                        <span class="tech-tag">HTML5</span>
                        <span class="tech-tag">SASS</span>
                        <span class="tech-tag">JavaScript</span>
                        <span class="tech-tag">Git</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Skills Section -->
          <section class="skills-section">
            <h3 class="section-title">Technical Skills</h3>
            
            <div class="skills-categories">
              <div class="skill-category">
                <h4 class="category-title">Frontend Development</h4>
                <div class="skills-grid">
                  <div class="skill-item">
                    <div class="skill-header">
                      <span class="skill-name">HTML5</span>
                      <span class="skill-percentage">85%</span>
                    </div>
                    <div class="skill-bar">
                      <div class="skill-progress" style="width: 85%"></div>
                    </div>
                  </div>

                  <div class="skill-item">
                    <div class="skill-header">
                      <span class="skill-name">CSS3 / SASS</span>
                      <span class="skill-percentage">85%</span>
                    </div>
                    <div class="skill-bar">
                      <div class="skill-progress" style="width: 85%"></div>
                    </div>
                  </div>

                  <div class="skill-item">
                    <div class="skill-header">
                      <span class="skill-name">JavaScript</span>
                      <span class="skill-percentage">85%</span>
                    </div>
                    <div class="skill-bar">
                      <div class="skill-progress" style="width: 85%"></div>
                    </div>
                  </div>

                  <div class="skill-item">
                    <div class="skill-header">
                      <span class="skill-name">Vue.js</span>
                      <span class="skill-percentage">70%</span>
                    </div>
                    <div class="skill-bar">
                      <div class="skill-progress" style="width: 70%"></div>
                    </div>
                  </div>

                  <div class="skill-item">
                    <div class="skill-header">
                      <span class="skill-name">Bootstrap</span>
                      <span class="skill-percentage">75%</span>
                    </div>
                    <div class="skill-bar">
                      <div class="skill-progress" style="width: 75%"></div>
                    </div>
                  </div>

                  <div class="skill-item">
                    <div class="skill-header">
                      <span class="skill-name">Tailwind CSS</span>
                      <span class="skill-percentage">60%</span>
                    </div>
                    <div class="skill-bar">
                      <div class="skill-progress" style="width: 60%"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="skill-category">
                <h4 class="category-title">Backend Development</h4>
                <div class="skills-grid">
                  <div class="skill-item">
                    <div class="skill-header">
                      <span class="skill-name">PHP</span>
                      <span class="skill-percentage">80%</span>
                    </div>
                    <div class="skill-bar">
                      <div class="skill-progress" style="width: 80%"></div>
                    </div>
                  </div>

                  <div class="skill-item">
                    <div class="skill-header">
                      <span class="skill-name">Laravel</span>
                      <span class="skill-percentage">65%</span>
                    </div>
                    <div class="skill-bar">
                      <div class="skill-progress" style="width: 65%"></div>
                    </div>
                  </div>

                  <div class="skill-item">
                    <div class="skill-header">
                      <span class="skill-name">Node.js</span>
                      <span class="skill-percentage">65%</span>
                    </div>
                    <div class="skill-bar">
                      <div class="skill-progress" style="width: 65%"></div>
                    </div>
                  </div>

                  <div class="skill-item">
                    <div class="skill-header">
                      <span class="skill-name">Python</span>
                      <span class="skill-percentage">65%</span>
                    </div>
                    <div class="skill-bar">
                      <div class="skill-progress" style="width: 65%"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="skill-category">
                <h4 class="category-title">Design & Tools</h4>
                <div class="skills-grid">
                  <div class="skill-item">
                    <div class="skill-header">
                      <span class="skill-name">Web Design</span>
                      <span class="skill-percentage">80%</span>
                    </div>
                    <div class="skill-bar">
                      <div class="skill-progress" style="width: 80%"></div>
                    </div>
                  </div>

                  <div class="skill-item">
                    <div class="skill-header">
                      <span class="skill-name">UX/UI Design</span>
                      <span class="skill-percentage">75%</span>
                    </div>
                    <div class="skill-bar">
                      <div class="skill-progress" style="width: 75%"></div>
                    </div>
                  </div>

                  <div class="skill-item">
                    <div class="skill-header">
                      <span class="skill-name">Figma</span>
                      <span class="skill-percentage">70%</span>
                    </div>
                    <div class="skill-bar">
                      <div class="skill-progress" style="width: 70%"></div>
                    </div>
                  </div>

                  <div class="skill-item">
                    <div class="skill-header">
                      <span class="skill-name">Git/GitHub</span>
                      <span class="skill-percentage">75%</span>
                    </div>
                    <div class="skill-bar">
                      <div class="skill-progress" style="width: 75%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Animate skill bars on scroll
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillBars = entry.target.querySelectorAll('.skill-progress')
        skillBars.forEach((bar, index) => {
          setTimeout(() => {
            bar.style.transform = 'scaleX(1)'
          }, index * 100)
        })
      }
    })
  }, observerOptions)

  const skillsSection = document.querySelector('.skills-section')
  if (skillsSection) {
    observer.observe(skillsSection)
  }
})
</script>

<style scoped>
.resume-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 90px 0 2rem 280px;
  transition: padding-left 0.3s ease;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.resume-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.page-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 3rem 2rem;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.page-header::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  animation: float 6s ease-in-out infinite;
}

.header-content {
  position: relative;
  z-index: 1;
}

.page-title {
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
  letter-spacing: -1px;
}

.title-decoration {
  width: 80px;
  height: 4px;
  background: rgba(255, 255, 255, 0.8);
  margin: 0 auto 1rem;
  border-radius: 2px;
}

.page-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  font-weight: 300;
}

.resume-content {
  padding: 3rem 2rem;
}

.summary-section {
  margin-bottom: 4rem;
}

.summary-card {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.summary-text {
  font-size: 1.1rem;
  color: #6b7280;
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.summary-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: #6b7280;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.timeline-section {
  margin-bottom: 4rem;
}

.timeline-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.timeline-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.timeline-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-right: 1rem;
  color: white;
}

.timeline-icon.education {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.timeline-icon.experience {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.timeline-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2d3748;
}

.timeline-list {
  position: relative;
  padding-left: 2rem;
}

.timeline-list::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 2rem;
}

.timeline-dot {
  position: absolute;
  left: -2rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  background: #667eea;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 3px #667eea;
}

.timeline-content {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px);
}

.timeline-date {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  color: #667eea;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
}

.timeline-item-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.timeline-institution {
  font-size: 1rem;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 1rem;
}

.timeline-description {
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.timeline-achievements {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.timeline-achievements li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: #4b5563;
  font-size: 0.95rem;
}

.timeline-achievements li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.timeline-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.highlight {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%);
  color: #10b981;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.timeline-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tech-tag {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  color: #667eea;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.skills-section {
  margin-bottom: 4rem;
}

.skills-categories {
  display: grid;
  gap: 3rem;
}

.skill-category {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s, transform 0.3s;
}
.skill-category:hover {
  box-shadow: 0 20px 50px rgba(102, 126, 234, 0.18);
  transform: translateY(-5px) scale(1.02);
}

.category-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: 1px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.skills-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.skill-item {
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #f3e8ff 0%, #e0e7ff 100%);
  border-radius: 16px;
  padding: 1.2rem 1.2rem 1.5rem 1.2rem;
  box-shadow: 0 4px 16px rgba(102,126,234,0.07);
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s, transform 0.3s;
  cursor: pointer;
}
.skill-item:hover {
  box-shadow: 0 8px 32px rgba(102,126,234,0.13);
  transform: translateY(-4px) scale(1.03);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.7rem;
}

.skill-name {
  font-size: 1.08rem;
  font-weight: 700;
  color: #667eea;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.skill-percentage {
  font-size: 0.98rem;
  font-weight: 700;
  color: #764ba2;
  background: #ede9fe;
  padding: 0.2rem 0.7rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(118,75,162,0.07);
}

.skill-bar {
  height: 12px;
  background: #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  margin-top: 0.5rem;
  position: relative;
}

.skill-progress {
  height: 100%;
  border-radius: 6px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 2px 12px rgba(102,126,234,0.13);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 1s cubic-bezier(.55,0,.1,1);
  position: relative;
}

.skill-item:hover .skill-progress {
  filter: brightness(1.15) drop-shadow(0 0 8px #764ba2aa);
}

.skill-item::after {
  content: '';
  position: absolute;
  right: 18px;
  bottom: 18px;
  width: 32px;
  height: 32px;
  background: radial-gradient(circle, #667eea33 0%, transparent 80%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
  opacity: 0.7;
  transition: opacity 0.3s;
}
.skill-item:hover::after {
  opacity: 1;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .resume-container {
    padding-left: 100px;
  }
  
  .timeline-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .resume-container {
    padding: 80px 1rem 2rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .summary-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .timeline-item {
    margin-bottom: 2rem;
  }
  
  .timeline-content {
    padding: 1.5rem;
  }
  
  .skill-category {
    padding: 2rem;
  }
}
</style>