<template>
  <div class="contact-container">
    <div class="content-wrapper">
      <div class="contact-card">
        <header class="page-header">
          <div class="header-content">
            <h2 class="page-title">Get In Touch</h2>
            <div class="title-decoration"></div>
            <p class="page-subtitle">Let's create something amazing together</p>
          </div>
        </header>

        <div class="contact-content">
          <!-- Contact Info Section -->
          <section class="contact-info-section">
            <div class="info-grid">
              <div class="info-card email-card">
                <div class="info-icon">
                  <div class="icon-wrapper">✉️</div>
                </div>
                <div class="info-content">
                  <h3 class="info-title">Email Me</h3>
                  <p class="info-description">Send me an email and I'll get back to you within 24 hours</p>
                  <a href="mailto:nheanpanha12629@gmail.com" class="info-link">
                    nheanpanha12629@gmail.com
                  </a>
                </div>
              </div>

              <div class="info-card phone-card">
                <div class="info-icon">
                  <div class="icon-wrapper">📱</div>
                </div>
                <div class="info-content">
                  <h3 class="info-title">Call Me</h3>
                  <p class="info-description">Available for calls Sunday, 8 AM - 9 PM</p>
                  <a href="tel:+855978211204" class="info-link">
                    +(855) 978 211 204
                  </a>
                </div>
              </div>

              <div class="info-card location-card">
                <div class="info-icon">
                  <div class="icon-wrapper">📍</div>
                </div>
                <div class="info-content">
                  <h3 class="info-title">Visit Me</h3>
                  <p class="info-description">Located in the heart of Phnom Penh, Cambodia</p>
                  <address class="info-link">
                    Tekleum 11, 10100 Phnom Penh, Cambodia
                  </address>
                </div>
              </div>
            </div>
          </section>

          <!-- Map Section -->
          <section class="map-section">
            <div class="map-container">
              <div class="map-header">
                <h3 class="map-title">Find Me Here</h3>
                <p class="map-description">Passerelles Numériques Cambodia (PNC)</p>
              </div>
              <div class="map-wrapper">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15605.82630659802!2d104.881!3d11.551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951add5e2cd81%3A0x171e0b69c7c6f7ba!2sPasserelles%20num%C3%A9riques%20Cambodia%20(PNC)!5e0!3m2!1sen!2skh!4v1700000000000!5m2!1sen!2skh" 
                  width="100%" 
                  height="400" 
                  style="border:0; border-radius: 16px;" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </section>

          <!-- Contact Form Section -->
          <section class="form-section">
            <div class="form-container">
              <div class="form-header">
                <h3 class="form-title">Send Me a Message</h3>
                <p class="form-description">
                  Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
                </p>
              </div>

              <form class="contact-form" @submit.prevent="submitForm">
                <div class="form-grid">
                  <div class="form-group">
                    <label for="name" class="form-label">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      v-model="form.name"
                      class="form-input" 
                      placeholder="Enter your full name" 
                      required 
                    />
                  </div>

                  <div class="form-group">
                    <label for="email" class="form-label">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      v-model="form.email"
                      class="form-input" 
                      placeholder="Enter your email address" 
                      required 
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label for="subject" class="form-label">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    v-model="form.subject"
                    class="form-input" 
                    placeholder="What's this about?" 
                    required 
                  />
                </div>

                <div class="form-group">
                  <label for="message" class="form-label">Message</label>
                  <textarea 
                    id="message"
                    v-model="form.message"
                    class="form-textarea" 
                    placeholder="Tell me about your project or just say hello!" 
                    rows="6"
                    required>
                  </textarea>
                </div>

                <button type="submit" class="submit-btn" :disabled="isSubmitting">
                  <span class="btn-icon" v-if="!isSubmitting">🚀</span>
                  <span class="btn-icon loading" v-else>⏳</span>
                  <span class="btn-text">
                    {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                  </span>
                  <span class="btn-arrow" v-if="!isSubmitting">→</span>
                </button>
              </form>

              <!-- Success Message -->
              <div v-if="showSuccess" class="success-message">
                <div class="success-icon">✅</div>
                <h4 class="success-title">Message Sent Successfully!</h4>
                <p class="success-text">Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            </div>
          </section>

          <!-- Social Links Section -->
          <section class="social-section">
            <div class="social-container">
              <h3 class="social-title">Connect With Me</h3>
              <p class="social-description">Follow me on social media for updates and insights</p>
              
              <div class="social-links">
                <a href="https://www.facebook.com/share/16s6v1t3U3/?mibextid=wwXIfr" 
                   class="social-link facebook" target="_blank" rel="noopener">
                  <div class="social-icon">📘</div>
                  <div class="social-info">
                    <span class="social-name">Facebook</span>
                    <span class="social-handle">@nheanpanha</span>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/nhean-panha-11420b345/" 
                   class="social-link linkedin" target="_blank" rel="noopener">
                  <div class="social-icon">💼</div>
                  <div class="social-info">
                    <span class="social-name">LinkedIn</span>
                    <span class="social-handle">Nhean Panha</span>
                  </div>
                </a>

                <a href="https://t.me/Nhean_PanhaA" 
                   class="social-link telegram" target="_blank" rel="noopener">
                  <div class="social-icon">📱</div>
                  <div class="social-info">
                    <span class="social-name">Telegram</span>
                    <span class="social-handle">@Nhean_PanhaA</span>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

/*
  NOTE:
  The message is NOT sent anywhere.
  The form only simulates a submission with a loading state and a success message.
  There is NO backend, email, or database connected.
  You cannot see the message anywhere; it is not stored or delivered.
  To actually send and view messages, you must connect this form to a backend API, email service, or database.
*/

const submitForm = async () => {
  isSubmitting.value = true
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))
  isSubmitting.value = false
  showSuccess.value = true
  Object.keys(form).forEach(key => form[key] = '')
  setTimeout(() => {
    showSuccess.value = false
  }, 5000)
}
</script>

<style scoped>
.contact-container {
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

.contact-card {
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

.contact-content {
  padding: 3rem 2rem;
}

.contact-info-section {
  margin-bottom: 4rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.info-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
}

.info-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.info-icon {
  margin-bottom: 1.5rem;
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
}

.info-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.info-description {
  font-size: 1rem;
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.info-link {
  font-size: 1.1rem;
  font-weight: 600;
  color: #667eea;
  text-decoration: none;
  transition: color 0.3s ease;
}

.info-link:hover {
  color: #764ba2;
}

.map-section {
  margin-bottom: 4rem;
}

.map-container {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.map-header {
  text-align: center;
  margin-bottom: 2rem;
}

.map-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.map-description {
  font-size: 1rem;
  color: #6b7280;
}

.map-wrapper {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.form-section {
  margin-bottom: 4rem;
}

.form-container {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
}

.form-header {
  text-align: center;
  margin-bottom: 3rem;
}

.form-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.form-description {
  font-size: 1.1rem;
  color: #6b7280;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 1rem 1.25rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  background: #f9fafb;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1.25rem 2rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-icon {
  font-size: 1.2rem;
}

.btn-icon.loading {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.btn-arrow {
  transition: transform 0.3s ease;
}

.submit-btn:hover .btn-arrow {
  transform: translateX(5px);
}

.success-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.success-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.success-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #10b981;
  margin-bottom: 0.5rem;
}

.success-text {
  color: #6b7280;
  font-size: 1rem;
}

.social-section {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
}

.social-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
}

.social-description {
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  min-width: 200px;
}

.social-link:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.social-icon {
  font-size: 2rem;
}

.social-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.social-name {
  font-weight: 700;
  color: #2d3748;
  font-size: 1.1rem;
}

.social-handle {
  color: #6b7280;
  font-size: 0.9rem;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .contact-container {
    padding-left: 100px;
  }
}

@media (max-width: 768px) {
  .contact-container {
    padding: 80px 1rem 2rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .social-links {
    flex-direction: column;
    align-items: center;
  }
  
  .social-link {
    min-width: auto;
    width: 100%;
    max-width: 300px;
  }
}
</style>