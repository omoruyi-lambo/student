document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  }

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
  });

  function observeFadeElements() {
    const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-up, .stagger-children');
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    elements.forEach(function(el) {
      observer.observe(el);
    });
  }
  observeFadeElements();

  var featuredGrid = document.getElementById('featuredGrid');
  if (featuredGrid) {
    var featured = students.slice(0, 4);
    featured.forEach(function(student) {
      var card = createStudentCard(student);
      featuredGrid.appendChild(card);
    });
    setTimeout(function() {
      featuredGrid.classList.add('visible');
    }, 200);
  }

  /* Hero parallax on mousemove (desktop only) */
  var heroRight = document.querySelector('.hero-right');
  var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (heroRight && !isTouch) {
    document.querySelector('.hero').addEventListener('mousemove', function(e) {
      var cards = heroRight.querySelectorAll('.float-card, .float-card-skills');
      var rect = heroRight.getBoundingClientRect();
      var centerX = rect.left + rect.width / 2;
      var centerY = rect.top + rect.height / 2;
      var mouseX = (e.clientX - centerX) / 30;
      var mouseY = (e.clientY - centerY) / 30;
      cards.forEach(function(card, i) {
        var factor = (i + 1) * 0.3;
        card.style.transform = 'translate(' + (mouseX * factor) + 'px, ' + (mouseY * factor) + 'px)';
      });
    });
    document.querySelector('.hero').addEventListener('mouseleave', function() {
      var cards = heroRight.querySelectorAll('.float-card, .float-card-skills');
      cards.forEach(function(card) {
        card.style.transform = '';
      });
    });
  }

  function animateStats() {
    var statItems = document.querySelectorAll('.stat-item h3');
    statItems.forEach(function(item) {
      var target = parseInt(item.dataset.count);
      if (!target) return;
      var current = 0;
      var duration = 40;
      var increment = Math.ceil(target / duration);
      var timer = setInterval(function() {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        item.textContent = (item.dataset.count === '95') ? current + '%' : current;
      }, 30);
    });
  }

  var statsSection = document.querySelector('.stats');
  if (statsSection) {
    var statsObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateStats();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    statsObserver.observe(statsSection);
  }

  function createStudentCard(student) {
    var card = document.createElement('a');
    card.href = 'student.html?id=' + student.id;
    card.className = 'student-card';
    card.style.display = 'block';
    card.style.textDecoration = 'none';
    card.style.color = 'inherit';

    var skillChips = student.skills.slice(0, 4).map(function(s) {
      return '<span>' + s.name + '</span>';
    }).join('');

    card.innerHTML =
      '<img src="' + student.image + '" alt="' + student.name + '" class="student-card-img" loading="lazy">' +
      '<h3>' + student.name + '</h3>' +
      '<div class="track-badge">' + student.track + '</div>' +
      '<div class="cohort-label"><i class="far fa-calendar-alt" style="margin-right:0.3rem;font-size:0.7rem"></i>' + student.cohort + ' <span style="margin-left:0.5rem"><i class="far fa-folder-open" style="margin-right:0.2rem;font-size:0.7rem"></i>' + student.projects.length + ' projects</span></div>' +
      '<p class="bio-text">' + student.bio + '</p>' +
      '<div class="skills-preview">' + skillChips + '</div>' +
      '<span class="btn btn-primary btn-sm">View Portfolio <i class="fas fa-arrow-right" style="font-size:0.7rem"></i></span>';

    return card;
  }

  var studentsGrid = document.getElementById('studentsGrid');
  var searchInput = document.getElementById('searchInput');
  var filterTabs = document.getElementById('filterTabs');
  var resultsCount = document.getElementById('resultsCount');
  var noResults = document.getElementById('noResults');
  var currentTrack = 'all';
  var currentSearch = '';

  function renderStudents() {
    if (!studentsGrid) return;
    var filtered = students.filter(function(s) {
      var matchTrack = currentTrack === 'all' || s.track === currentTrack;
      var search = currentSearch.toLowerCase();
      var matchSearch = !search ||
        s.name.toLowerCase().includes(search) ||
        s.track.toLowerCase().includes(search) ||
        s.bio.toLowerCase().includes(search) ||
        s.skills.some(function(sk) { return sk.name.toLowerCase().includes(search); });
      return matchTrack && matchSearch;
    });

    studentsGrid.innerHTML = '';
    if (filtered.length === 0) {
      noResults.style.display = 'block';
      resultsCount.textContent = '';
      return;
    }
    noResults.style.display = 'none';
    resultsCount.textContent = 'Showing ' + filtered.length + ' student' + (filtered.length > 1 ? 's' : '');

    filtered.forEach(function(student) {
      studentsGrid.appendChild(createStudentCard(student));
    });

    studentsGrid.classList.remove('visible');
    setTimeout(function() {
      studentsGrid.classList.add('visible');
    }, 50);
  }

  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      currentSearch = e.target.value;
      renderStudents();
    });
  }

  if (filterTabs) {
    filterTabs.addEventListener('click', function(e) {
      var tab = e.target.closest('.filter-tab');
      if (!tab) return;
      filterTabs.querySelectorAll('.filter-tab').forEach(function(t) { t.classList.remove('active'); });
      tab.classList.add('active');
      currentTrack = tab.dataset.track;
      currentSearch = searchInput ? searchInput.value : '';
      renderStudents();
    });

    if (studentsGrid) {
      renderStudents();
    }
  }

  var profileContent = document.getElementById('profileContent');
  if (profileContent) {
    var params = new URLSearchParams(window.location.search);
    var studentId = params.get('id');
    if (studentId) {
      var student = students.find(function(s) { return s.id === studentId.toLowerCase(); });
      if (student) {
        document.title = student.name + ' — Deskon Academy';
        profileContent.innerHTML = buildProfileHTML(student);
        var pf = document.getElementById('profileFooter');
        if (pf) pf.style.display = '';
        observeFadeElements();
        setTimeout(function() {
          var pbs = document.querySelectorAll('.progress-fill');
          pbs.forEach(function(pb) {
            pb.style.width = pb.dataset.level + '%';
          });
        }, 500);
        setupProfileNav();
      } else {
        profileContent.innerHTML = buildErrorHTML();
      }
    } else {
      profileContent.innerHTML = buildErrorHTML('Select a Student', 'Please select a student from the directory.');
    }
  }

  function setupProfileNav() {
    var pn = document.getElementById('profileNav');
    if (!pn) return;
    var links = pn.querySelectorAll('a');
    var sections = document.querySelectorAll('.profile-section');
    window.addEventListener('scroll', function() {
      var current = '';
      sections.forEach(function(sec) {
        var top = sec.offsetTop - 120;
        if (window.scrollY >= top) {
          current = sec.getAttribute('id');
        }
      });
      links.forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    });
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  function buildErrorHTML(title, msg) {
    return '<div class="error-state fade-in visible">' +
      '<h2>' + (title || 'Student Not Found') + '</h2>' +
      '<p>' + (msg || 'The student you are looking for does not exist.') + '</p>' +
      '<a href="students.html" class="btn btn-primary">Back to Directory &rarr;</a>' +
      '</div>';
  }

  function buildProfileHTML(s) {
    var socialIcons = {
      email: '<i class="fas fa-envelope"></i>',
      linkedin: '<i class="fab fa-linkedin-in"></i>',
      github: '<i class="fab fa-github"></i>',
      twitter: '<i class="fab fa-twitter"></i>'
    };

    var socialLinksHTML = '';
    for (var key in s.social) {
      if (s.social[key] && socialIcons[key]) {
        socialLinksHTML += '<a href="' + s.social[key] + '" class="social-link" target="_blank" rel="noopener" title="' + key + '">' + socialIcons[key] + '</a>';
      }
    }

    var skillsHTML = s.skills.map(function(skill) {
      return '<div class="skill-item fade-in-up">' +
        '<div class="skill-header"><span>' + skill.name + '</span><span class="skill-percent">' + skill.level + '%</span></div>' +
        '<div class="progress-bar"><div class="progress-fill" data-level="' + skill.level + '" style="width:0%"></div></div>' +
        '</div>';
    }).join('');

    var projectsHTML = s.projects.map(function(proj) {
      return '<div class="project-card fade-in-up">' +
        '<img src="' + proj.image + '" alt="' + proj.title + '" class="project-card-img" loading="lazy">' +
        '<div class="project-card-body">' +
        '<h3>' + proj.title + '</h3>' +
        '<p>' + proj.description + '</p>' +
        '<div class="project-tech">' + proj.tech.map(function(t) { return '<span>' + t + '</span>'; }).join('') + '</div>' +
        '<div class="project-links">' +
        (proj.liveLink !== '#' ? '<a href="' + proj.liveLink + '" class="live-link" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Live Demo</a>' : '') +
        (proj.githubLink !== '#' ? '<a href="' + proj.githubLink + '" class="github-link" target="_blank" rel="noopener"><i class="fab fa-github"></i> GitHub</a>' : '') +
        '</div></div></div>';
    }).join('');

    var certsHTML = s.certificates.map(function(cert) {
      return '<div class="cert-card fade-in-up">' +
        '<img src="' + cert.image + '" alt="' + cert.title + '" class="cert-card-img" loading="lazy">' +
        '<div class="cert-card-body">' +
        '<h4>' + cert.title + '</h4>' +
        '<span class="cert-date">&#128197; ' + cert.date + '</span>' +
        '</div></div>';
    }).join('');

    var timelineHTML = s.timeline.map(function(item) {
      return '<div class="timeline-item fade-in-left">' +
        '<div class="tl-year">' + item.year + '</div>' +
        '<h4>' + item.title + '</h4>' +
        '<p>' + item.description + '</p>' +
        '</div>';
    }).join('');

    var contactLinksHTML = [
      { label: 'Email', value: s.contact.email, icon: '<i class="fas fa-envelope"></i>' },
      { label: 'LinkedIn', value: s.contact.linkedin, icon: '<i class="fab fa-linkedin-in"></i>' },
      { label: 'GitHub', value: s.contact.github, icon: '<i class="fab fa-github"></i>' },
      { label: 'Portfolio', value: s.contact.portfolio, icon: '<i class="fas fa-globe"></i>' }
    ].map(function(c) {
      return '<div class="contact-link-item fade-in-up">' +
        '<div class="contact-icon">' + c.icon + '</div>' +
        '<span class="contact-label">' + c.label + '</span>' +
        '<span class="contact-value">' + c.value + '</span>' +
        '</div>';
    }).join('');

    return '<div class="profile-hero">' +
      '<div class="container">' +
      '<div class="profile-hero-inner">' +
      '<img src="' + s.image + '" alt="' + s.name + '" class="profile-hero-img">' +
      '<div class="profile-hero-info">' +
      '<h1>' + s.name + '</h1>' +
      '<div class="role">' + s.role + '</div>' +
      '<div class="meta">' +
      '<span>&#128188; ' + s.track + '</span>' +
      '<span>&#128197; ' + s.cohort + '</span>' +
      '</div>' +
      (s.available ? '<div class="availability-badge">Available for Internship</div>' : '') +
      '<div class="profile-hero-actions">' +
      '<a href="students.html" class="btn btn-outline btn-sm">&larr; All Students</a>' +
      '</div>' +
      '<div class="profile-hero-social">' + socialLinksHTML + '</div>' +
      '</div></div></div></div>' +
      '<div class="profile-nav" id="profileNav"><div class="container" style="display:flex;gap:0.25rem">' +
      '<a href="#about">About</a>' +
      '<a href="#skills">Skills</a>' +
      '<a href="#projects">Projects</a>' +
      '<a href="#certificates">Certificates</a>' +
      '<a href="#journey">Journey</a>' +
      '<a href="#contact">Contact</a>' +
      '</div></div>' +
      '<div class="profile-body">' +
      '<section id="about" class="section profile-section"><div class="container">' +
      '<div class="about-grid">' +
      '<div class="about-card fade-in"><h3><i class="fas fa-user-circle"></i> About</h3><p>' + s.about + '</p></div>' +
      '<div class="goals-card fade-in"><h3><i class="fas fa-bullseye"></i> Goals</h3><p>' + s.goals + '</p></div>' +
      '</div></div></section>' +
      '<section id="skills" class="section profile-section bg-alt"><div class="container">' +
      '<div class="section-header fade-in"><h2>Skills & <span>Expertise</span></h2><p>Technical proficiency across key technologies</p></div>' +
      '<div class="skills-grid stagger-children">' + skillsHTML + '</div></div></section>' +
      '<section id="projects" class="section profile-section"><div class="container">' +
      '<div class="section-header fade-in"><h2>Featured <span>Projects</span></h2><p>Real-world projects demonstrating technical competence</p></div>' +
      '<div class="projects-grid stagger-children">' + projectsHTML + '</div></div></section>' +
      '<section id="certificates" class="section profile-section bg-alt"><div class="container">' +
      '<div class="section-header fade-in"><h2>Certificates & <span>Credentials</span></h2><p>Professional certifications earned at Deskon Academy</p></div>' +
      '<div class="certs-grid stagger-children">' + certsHTML + '</div></div></section>' +
      '<section id="journey" class="section profile-section"><div class="container">' +
      '<div class="section-header fade-in"><h2>Learning <span>Journey</span></h2><p>Timeline of achievements and milestones</p></div>' +
      '<div class="timeline stagger-children">' + timelineHTML + '</div></div></section>' +
      '<section id="contact" class="section profile-section bg-alt"><div class="container">' +
      '<div class="section-header fade-in"><h2>Get In <span>Touch</span></h2><p>Connect with ' + s.name.split(' ')[0] + ' for opportunities</p></div>' +
      '<div class="contact-card fade-in">' +
      '<h3>Let\'s Connect</h3>' +
      '<p>I\'m actively looking for internship and job opportunities. Feel free to reach out!</p>' +
      '<div class="contact-links">' + contactLinksHTML + '</div>' +
      '<a href="mailto:' + s.contact.email + '" class="btn btn-primary btn-block">Send Email &rarr;</a>' +
      '</div></div></section>' +
      '</div>';
  }
});
