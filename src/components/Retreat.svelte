<script>
  import Sakura from "./Sakura.svelte";
</script>

<div class="blog-container">
  <div class="sakura-overlay">
    <Sakura />
  </div>

  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="blog-content">
      <!-- Header -->
      <div class="blog-header">
        <div class="tech-badge">
          <i class="fas fa-receipt"></i>
          Receipt Tracking
        </div>
        <h1 class="blog-title">
          <span class="gradient-text">Retreat</span>
        </h1>
        <p class="blog-description">
          Never lose your receipts again. Automated receipt tracking and
          warranty management with email forwarding, smart reminders, and
          effortless organization.
        </p>
      </div>

      <!-- Tech Stack -->
      <div class="tech-stack">
        <div class="stack-item">
          <i class="fab fa-react"></i>
          <span>React</span>
        </div>
        <div class="stack-item">
          <i class="fab fa-golang"></i>
          <span>Go</span>
        </div>
        <div class="stack-item">
          <i class="fas fa-database"></i>
          <span>PostgreSQL</span>
        </div>
        <div class="stack-item">
          <i class="fab fa-docker"></i>
          <span>Docker</span>
        </div>
        <div class="stack-item">
          <i class="fas fa-server"></i>
          <span>Redis</span>
        </div>
        <div class="stack-item">
          <i class="fas fa-shield-alt"></i>
          <span>Clerk Auth</span>
        </div>
      </div>

      <!-- Features Section -->
      <div class="features-section">
        <h2 class="section-title">
          <i class="fas fa-sparkles"></i>
          Core Features
        </h2>

        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <h3>Email Forwarding</h3>
            <p>
              Forward purchase emails to save@retreat-app.tech and let the
              system automatically extract receipt information, warranty
              details, and expiry dates.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-file-pdf"></i>
            </div>
            <h3>PDF Upload</h3>
            <p>
              Manual receipt uploads supported. Upload PDF receipts and the
              system will parse them automatically with intelligent data
              extraction.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-bell"></i>
            </div>
            <h3>Smart Reminders</h3>
            <p>
              Receive timely notifications before warranties expire. Never miss
              a warranty claim or return window again.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-crown"></i>
            </div>
            <h3>Sponsor Benefits</h3>
            <p>
              Free tier: 5 receipts. Sponsor for $5/month: 50 receipts, data
              export, priority support. Built with Buy Me a Coffee since Stripe
              isn't available yet.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-shield-halved"></i>
            </div>
            <h3>Security First</h3>
            <p>
              JWT authentication via Clerk, rate limiting, CORS protection, SQL
              injection prevention, and security headers. Docker containers with
              read-only filesystems.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-mobile-alt"></i>
            </div>
            <h3>Cross-Platform</h3>
            <p>
              Web app with responsive design. Android WebView support in
              progress. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>

      <!-- Technical Details -->
      <div class="tech-details">
        <h2 class="section-title">
          <i class="fas fa-code"></i>
          Technical Implementation
        </h2>

        <div class="detail-card">
          <h3><i class="fas fa-layer-group"></i> Architecture</h3>
          <ul>
            <li>
              <strong>Frontend:</strong> React + TypeScript + Tailwind CSS + Vite
            </li>
            <li>
              <strong>Backend:</strong> Go + Fiber framework for high-performance
              API
            </li>
            <li>
              <strong>Database:</strong> PostgreSQL with prepared statements for
              security
            </li>
            <li>
              <strong>Cache & Rate Limiting:</strong> Redis (100 req/min default)
            </li>
            <li><strong>Authentication:</strong> Clerk (JWT tokens)</li>
            <li>
              <strong>Deployment:</strong> Docker Compose with security best practices
            </li>
          </ul>
        </div>

        <div class="detail-card">
          <h3><i class="fas fa-robot"></i> How It Works</h3>
          <ol>
            <li>
              <strong>Email Forwarding:</strong> Forward purchase emails to save@retreat-app.tech
            </li>
            <li>
              <strong>Auto-Extraction:</strong> Backend parses emails and PDFs to
              extract store name, purchase amount, date, warranty info
            </li>
            <li>
              <strong>Storage:</strong> Receipt data stored in PostgreSQL with photo
              attachments
            </li>
            <li>
              <strong>Reminders:</strong> System sends notifications before warranty
              expiration
            </li>
            <li>
              <strong>Dashboard:</strong> View all receipts, search, filter, and
              manage warranties in one place
            </li>
          </ol>
        </div>

        <div class="detail-card">
          <h3><i class="fas fa-lock"></i> Security Features</h3>
          <ul>
            <li>Authentication via Clerk with JWT tokens</li>
            <li>Rate limiting to prevent abuse (configurable)</li>
            <li>CORS protection (frontend domain only)</li>
            <li>Security headers (XSS protection, etc.)</li>
            <li>SQL injection protection with prepared statements</li>
            <li>Input validation on all API endpoints</li>
            <li>Docker containers with read-only filesystems</li>
            <li>Graceful shutdown for in-flight requests</li>
          </ul>
        </div>
      </div>

      <!-- Project Status -->
      <div class="status-section">
        <h2 class="section-title">
          <i class="fas fa-tasks"></i>
          Development Status
        </h2>
        <div class="status-grid">
          <div class="status-item completed">
            <i class="fas fa-check-circle"></i>
            <span>Email forwarding & parsing</span>
          </div>
          <div class="status-item completed">
            <i class="fas fa-check-circle"></i>
            <span>PDF upload & extraction</span>
          </div>
          <div class="status-item completed">
            <i class="fas fa-check-circle"></i>
            <span>Dashboard & receipt management</span>
          </div>
          <div class="status-item completed">
            <i class="fas fa-check-circle"></i>
            <span>Warranty tracking & reminders</span>
          </div>
          <div class="status-item completed">
            <i class="fas fa-check-circle"></i>
            <span>Sponsor system via Buy Me a Coffee</span>
          </div>
          <div class="status-item wip">
            <i class="fas fa-spinner"></i>
            <span>Android mobile app (WebView)</span>
          </div>
          <div class="status-item completed">
            <i class="fas fa-check-circle"></i>
            <span>Mail forwarding optimization</span>
          </div>
        </div>
      </div>

      <!-- Links -->
      <div class="readme-section mt-6">
        <h2 class="section-title">
          <i class="fas fa-book"></i>
          Latest README
        </h2>

        <div class="detail-card">
          <p class="readme-excerpt">
            Never lose your receipts again. Forward purchase emails to
            <code>save@retreat-app.tech</code> and we'll automatically extract receipt
            and warranty information. Mobile is work in progress.
          </p>
          <p class="mt-3">
            <a
              href="https://github.com/temidaradev/retreat#readme"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link github"
            >
              <i class="fab fa-github"></i>
              View README on GitHub
            </a>
          </p>
        </div>
      </div>

      <div class="project-links">
        <a
          href="https://github.com/temidaradev/retreat"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link github"
        >
          <i class="fab fa-github"></i>
          View on GitHub
        </a>
        <a
          href="https://retreat-app.tech"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link demo"
        >
          <i class="fas fa-external-link-alt"></i>
          Live Demo
        </a>
      </div>
    </div>

    <div class="mt-8 text-center">
      <a href="/" class="back-link">← Back to Home</a>
    </div>
  </div>
</div>

<style>
  .blog-container {
    position: relative;
    min-height: 100vh;
    background: linear-gradient(
      135deg,
      rgba(13, 12, 33, 0.95) 0%,
      rgba(45, 41, 87, 0.8) 100%
    );
    overflow: hidden;
  }

  .sakura-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    opacity: 0.15;
  }

  .blog-content {
    position: relative;
    z-index: 2;
    background: rgba(30, 41, 59, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 1rem;
    border: 1px solid rgba(148, 163, 184, 0.2);
    padding: 2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }

  .blog-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .tech-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(167, 139, 250, 0.2);
    border: 1px solid rgba(167, 139, 250, 0.3);
    color: #c4b5fd;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .blog-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .gradient-text {
    background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .blog-description {
    font-size: 1.125rem;
    color: #cbd5e1;
    line-height: 1.7;
    max-width: 42rem;
    margin: 0 auto;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(148, 163, 184, 0.2);
  }

  .stack-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(79, 70, 229, 0.1);
    border: 1px solid rgba(79, 70, 229, 0.3);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: #c4b5fd;
    font-size: 0.875rem;
    transition: all 0.2s ease;
  }

  .stack-item:hover {
    background: rgba(79, 70, 229, 0.2);
    transform: translateY(-2px);
  }

  .section-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #c4b5fd;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .features-section,
  .tech-details,
  .status-section {
    margin-bottom: 2.5rem;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .feature-card {
    background: rgba(45, 41, 87, 0.5);
    border: 1px solid rgba(167, 139, 250, 0.2);
    border-radius: 0.75rem;
    padding: 1.5rem;
    transition: all 0.3s ease;
  }

  .feature-card:hover {
    background: rgba(45, 41, 87, 0.7);
    border-color: rgba(167, 139, 250, 0.4);
    transform: translateY(-4px);
  }

  .feature-icon {
    width: 3rem;
    height: 3rem;
    background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: white;
    margin-bottom: 1rem;
  }

  .feature-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #e0e7ff;
    margin-bottom: 0.75rem;
  }

  .feature-card p {
    color: #cbd5e1;
    line-height: 1.6;
    font-size: 0.95rem;
  }

  .detail-card {
    background: rgba(45, 41, 87, 0.5);
    border: 1px solid rgba(167, 139, 250, 0.2);
    border-radius: 0.75rem;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .detail-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #c4b5fd;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .detail-card ul,
  .detail-card ol {
    color: #cbd5e1;
    line-height: 1.8;
    padding-left: 1.5rem;
  }

  .detail-card li {
    margin-bottom: 0.5rem;
  }

  .detail-card strong {
    color: #e0e7ff;
  }

  .status-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  .status-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background: rgba(45, 41, 87, 0.5);
    border: 1px solid rgba(167, 139, 250, 0.2);
    border-radius: 0.5rem;
    font-size: 0.95rem;
  }

  .status-item.completed {
    color: #86efac;
    border-color: rgba(134, 239, 172, 0.3);
  }

  .status-item.wip {
    color: #fbbf24;
    border-color: rgba(251, 191, 36, 0.3);
  }

  .status-item i {
    font-size: 1.25rem;
  }

  .project-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
    flex-wrap: wrap;
  }

  .project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 0.75rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .project-link.github {
    background: rgba(88, 28, 135, 0.3);
    border: 1px solid rgba(88, 28, 135, 0.5);
    color: #c4b5fd;
  }

  .project-link.github:hover {
    background: rgba(88, 28, 135, 0.5);
    border-color: rgba(88, 28, 135, 0.7);
    transform: translateY(-2px);
  }

  .project-link.demo {
    background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
    border: none;
    color: white;
  }

  .project-link.demo:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(167, 139, 250, 0.4);
  }

  .back-link {
    display: inline-block;
    color: #a78bfa;
    text-decoration: none;
    font-weight: 500;
    padding: 0.75rem 1.5rem;
    border-radius: 0.75rem;
    background: rgba(79, 70, 229, 0.1);
    border: 1px solid rgba(79, 70, 229, 0.3);
    transition: all 0.2s ease;
  }

  .back-link:hover {
    background: rgba(79, 70, 229, 0.2);
    border-color: rgba(79, 70, 229, 0.5);
    color: #c4b5fd;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    .blog-content {
      padding: 1rem;
    }

    .blog-title {
      font-size: 2rem;
    }

    .section-title {
      font-size: 1.5rem;
    }

    .feature-grid {
      grid-template-columns: 1fr;
    }

    .status-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
