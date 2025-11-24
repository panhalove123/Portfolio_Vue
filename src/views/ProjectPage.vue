<template>
  <div class="projects-container">
    <div class="content-wrapper">
      <div class="projects-card">
        <header class="page-header">
          <div class="header-content">
            <h2 class="page-title">My Projects</h2>
            <div class="title-decoration"></div>
            <p class="page-subtitle">Showcasing my creative journey and technical expertise</p>
          </div>
        </header>

        <div class="projects-content">
          <!-- Filter Section -->
          <section class="filter-section">
            <div class="filter-container">
              <h3 class="filter-title">Filter by Category</h3>
              <div class="filter-buttons">
                <button 
                  v-for="category in categories" 
                  :key="category.id"
                  @click="setActiveFilter(category.id)"
                  :class="['filter-btn', { active: activeFilter === category.id }]"
                >
                  <span class="filter-icon">{{ category.icon }}</span>
                  <span class="filter-text">{{ category.name }}</span>
                  <span class="filter-count">({{ getProjectCount(category.id) }})</span>
                </button>
              </div>
            </div>
          </section>

          <!-- Projects Grid -->
          <section class="projects-section">
            <div class="projects-grid">
              <div 
                v-for="project in filteredProjects" 
                :key="project.id"
                class="project-card"
                :class="project.category"
                @click="openProject(project)"
              >
                <div class="project-image">
                  <img :src="project.image" :alt="project.title" />
                  <div class="project-overlay">
                    <div class="overlay-content">
                      <button class="view-btn">
                        <span class="btn-icon">👁️</span>
                        <span>View Project</span>
                      </button>
                      <div class="project-links">
                        <a v-if="project.github" :href="project.github" target="_blank" class="project-link github">
                          <span>📂</span>
                        </a>
                        <a v-if="project.demo" :href="project.demo" target="_blank" class="project-link demo">
                          <span>🚀</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="project-info">
                  <div class="project-header">
                    <h3 class="project-title">{{ project.title }}</h3>
                    <div class="project-status" :class="project.status">
                      {{ project.status === 'completed' ? '✅' : '🚧' }}
                    </div>
                  </div>
                  
                  <p class="project-description">{{ project.description }}</p>
                  
                  <div class="project-tech">
                    <span 
                      v-for="tech in project.technologies" 
                      :key="tech"
                      class="tech-tag"
                    >
                      {{ tech }}
                    </span>
                  </div>
                  
                  <div class="project-meta">
                    <span class="project-date">{{ project.date }}</span>
                    <span class="project-category-badge">{{ getCategoryName(project.category) }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Empty State -->
            <div v-if="filteredProjects.length === 0" class="empty-state">
              <div class="empty-icon">🔍</div>
              <h3 class="empty-title">No projects found</h3>
              <p class="empty-description">Try selecting a different category or check back later for new projects!</p>
            </div>
          </section>


        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('all')

const categories = [
  { id: 'all', name: 'All Projects', icon: '📁' },
  { id: 'web-development', name: 'Web Development', icon: '💻' },
  { id: 'web-design', name: 'Web Design', icon: '🎨' },
  { id: 'applications', name: 'Applications', icon: '📱' },
  { id: 'algorithms', name: 'Algorithms', icon: '🧮' }
]

const projects = ref([
  {
    id: 1,
    title: 'JavaScript Inventory System',
    description: 'A comprehensive inventory management system built with vanilla JavaScript, featuring real-time updates and intuitive UI.',
    image: '/placeholder.svg?height=300&width=400',
    category: 'web-development',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'],
    github: 'https://github.com/panhalove123/InventoryApp__G22.git',
    demo: 'https://inventory-app-g22-sg2n.vercel.app',
    date: 'January 2025',
    status: 'completed'
  },
  {
    id: 2,
    title: 'Virtual Company E-Commerce',
    description: 'Full-stack e-commerce platform with POS system, inventory management, and customer profiles built with PHP MVC.',
    image: '/placeholder.svg?height=300&width=400',
    category: 'web-development',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'MVC'],
    github: 'https://github.com/sovan-souern/VC1-G10.git',
    demo: null,
    date: 'March 2025',
    status: 'completed'
  },
  {
    id: 3,
    title: 'Face Detection Algorithm',
    description: 'Python-based face detection application using computer vision techniques with real-time webcam integration.',
    image: '/placeholder.svg?height=300&width=400',
    category: 'algorithms',
    technologies: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision'],
    github: 'https://github.com/OEUBROCHOM/FACE-DETECTION-G4.git',
    demo: null,
    date: 'November 2024',
    status: 'completed'
  },
  {
    id: 4,
    title: 'Music Band Website',
    description: 'Responsive website for a music band featuring modern design, animations, and optimized performance.',
    image: '/placeholder.svg?height=300&width=400',
    category: 'web-design',
    technologies: ['HTML5', 'SASS', 'CSS3', 'JavaScript', 'Git'],
    github: 'https://github.com/Pheatra-coding/Music-band-B1.git',
    demo: null,
    date: 'October 2024',
    status: 'completed'
  },
  {
    id: 5,
    title: 'Movie Booking System',
    description: 'Object-oriented movie booking system with user authentication, seat selection, and payment processing.',
    image: '/placeholder.svg?height=300&width=400',
    category: 'applications',
    technologies: ['Java', 'OOP', 'Database', 'GUI'],
    github: 'https://github.com/Lethean2005/Movie-Booking-System_C3.git',
    demo: null,
    date: 'September 2024',
    status: 'completed'
  },
  {
    id: 6,
    title: 'Virtual Company 2',
    description: 'Advanced web application project currently in development with modern frameworks and technologies.',
    image: '/placeholder.svg?height=300&width=400',
    category: 'web-development',
    technologies: ['Vue.js', 'Node.js', 'MYSQL'],
    github: 'https://github.com/panhalove123/Anajak_Travel_VC2.git',
    demo: null,
    date: 'Agust 2025',
    status: 'completed'
  },
  {
    id: 7,
    title: 'Laravel Project',
    description: 'Full-featured web application built with Laravel framework, featuring authentication and CRUD operations.',
    image: '/placeholder.svg?height=300&width=400',
    category: 'web-development',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Bootstrap'],
    github: null,
    demo: null,
    date: 'In Progress',
    status: 'in-progress'
  }
])

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects.value
  }
  return projects.value.filter(project => project.category === activeFilter.value)
})

const setActiveFilter = (categoryId) => {
  activeFilter.value = categoryId
}

const getProjectCount = (categoryId) => {
  if (categoryId === 'all') {
    return projects.value.length
  }
  return projects.value.filter(project => project.category === categoryId).length
}

const getCategoryName = (categoryId) => {
  const category = categories.find(cat => cat.id === categoryId)
  return category ? category.name : categoryId
}

const openProject = (project) => {
  if (project.demo) {
    window.open(project.demo, '_blank')
  } else if (project.github) {
    window.open(project.github, '_blank')
  }
}
</script>

<style scoped>
.projects-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 90px 0 2rem 280px;
  transition: padding-left 0.3s ease;
}

.content-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.projects-card {
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

.projects-content {
  padding: 3rem 2rem;
}

.filter-section {
  margin-bottom: 3rem;
}

.filter-container {
  text-align: center;
}

.filter-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 2rem;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  color: #6b7280;
}

.filter-btn:hover {
  border-color: #667eea;
  color: #667eea;
  transform: translateY(-2px);
}

.filter-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: transparent;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.filter-icon {
  font-size: 1.1rem;
}

.filter-count {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
}

.filter-btn.active .filter-count {
  background: rgba(255, 255, 255, 0.3);
}

.projects-section {
  margin-bottom: 4rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(102, 126, 234, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
  color: white;
}

.view-btn {
  background: white;
  color: #667eea;
  border: none;
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.view-btn:hover {
  transform: scale(1.05);
}

.project-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.project-link {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: white;
  transform: scale(1.1);
}

.project-info {
  padding: 1.5rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
  flex: 1;
}

.project-status {
  font-size: 1.2rem;
  margin-left: 1rem;
}

.project-description {
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  color: #667eea;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: #9ca3af;
}

.project-category-badge {
  background: #f3f4f6;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-weight: 600;
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: #6b7280;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.empty-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.empty-description {
  font-size: 1rem;
  max-width: 400px;
  margin: 0 auto;
}

.featured-section {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  border-radius: 20px;
  padding: 3rem;
}

.featured-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.featured-project {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.featured-image {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
}

.featured-image img {
  width: 100%;
  height: auto;
  display: block;
}

.featured-name {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
}

.featured-description {
  font-size: 1.1rem;
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.featured-highlights {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  color: #374151;
}

.highlight-icon {
  font-size: 1.2rem;
}

.featured-actions {
  display: flex;
  gap: 1rem;
}

.featured-btn {
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.featured-btn.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.featured-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
}

.featured-btn.secondary {
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
}

.featured-btn.secondary:hover {
  background: #667eea;
  color: white;
}

.btn-arrow {
  transition: transform 0.3s ease;
}

.featured-btn:hover .btn-arrow {
  transform: translateX(5px);
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .projects-container {
    padding-left: 100px;
  }
  
  .featured-project {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .projects-container {
    padding: 80px 1rem 2rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .filter-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .filter-btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
  
  .featured-actions {
    flex-direction: column;
  }
}
</style>