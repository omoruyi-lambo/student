/* Loading screen */
window.addEventListener('load', function() {
  var loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('loader-hidden');
    setTimeout(function() { loader.style.display = 'none'; }, 800);
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var HOME_SPOTLIGHT_LIMIT = 3;
  var STUDENT_DIRECTORY_LIMIT = 6;
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

  var spotlightGrid = document.getElementById('spotlightGrid');
  if (spotlightGrid) {
    spotlightGrid.innerHTML = '';
    students.slice(0, HOME_SPOTLIGHT_LIMIT).forEach(function(student) {
      var card = createSpotlightCard(student);
      spotlightGrid.appendChild(card);
    });
    setTimeout(function() {
      spotlightGrid.classList.add('visible');
    }, 200);
  }

  var featuredGrid = document.getElementById('featuredGrid');
  if (featuredGrid && !spotlightGrid) {
    var featured = students.slice(0, 4);
    featured.forEach(function(student) {
      var card = createStudentCard(student);
      featuredGrid.appendChild(card);
    });
    setTimeout(function() {
      featuredGrid.classList.add('visible');
    }, 200);
  }

  var videoGrid = document.getElementById('videoGrid');
  if (videoGrid) {
    var projectVideos = getLocalShowcaseVideos();
    videoGrid.innerHTML = '';
    projectVideos.forEach(function(video) {
      videoGrid.appendChild(createVideoCard(video));
    });
    setupVideoPreviewLimits(videoGrid);
    setTimeout(function() {
      videoGrid.classList.add('visible');
    }, 200);
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

  function createSpotlightCard(student) {
    var card = document.createElement('div');
    card.className = 'spotlight-card';
    card.style.display = 'block';
    card.style.textDecoration = 'none';
    card.style.color = 'inherit';
    card.style.cursor = 'pointer';
    card.onclick = function() { window.location.href = 'student.html?id=' + student.id; };

    var projectImg = student.projects && student.projects.length > 0
      ? student.projects[0].image
      : student.image;

    card.innerHTML =
      '<div class="spotlight-card-img-wrap">' +
      '<img src="' + projectImg + '" alt="' + student.name + '" class="spotlight-card-img" loading="lazy">' +
      '</div>' +
      '<div class="spotlight-card-body">' +
      '<h3>' + student.name + '</h3>' +
      '<div class="spotlight-track">' + student.track + '</div>' +
      '<p>' + student.bio + '</p>' +
      '<a href="student.html?id=' + student.id + '" class="btn btn-primary btn-sm spotlight-view-btn">View Profile <i class="fas fa-arrow-right" style="font-size:0.7rem"></i></a>' +
      '</div>';

    var spotlightViewBtn = card.querySelector('.spotlight-view-btn');
    if (spotlightViewBtn) {
      spotlightViewBtn.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    }

    return card;
  }

  function createStudentCard(student) {
    var card = document.createElement('div');
    card.className = 'student-card';
    card.style.display = 'block';
    card.style.textDecoration = 'none';
    card.style.color = 'inherit';
    card.style.cursor = 'pointer';
    card.onclick = function() { window.location.href = 'student.html?id=' + student.id; };

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
      '<span class="btn btn-primary btn-sm view-cta">View Portfolio <i class="fas fa-arrow-right" style="font-size:0.7rem"></i></span>';

    return card;
  }

  function getLocalShowcaseVideos() {
    return [
      {
        file: 'Copa Diner \u2014 Premier Catering & Events, Benin City.mp4',
        title: 'Copa Diner',
        subtitle: 'Premier Catering & Events, Benin City',
        description: 'A polished hospitality clip with a premium event and dining feel.',
        tags: ['Hospitality', 'Events', 'Benin City']
      },
      {
        file: 'CutAbove Barbers Shop _ Benin City GRA.mp4',
        title: 'CutAbove Barbers Shop',
        subtitle: 'Benin City GRA',
        description: 'A bold grooming brand video focused on detail, texture, and atmosphere.',
        tags: ['Barbershop', 'Lifestyle', 'Benin City']
      },
      {
        file: 'Dominica\'s Treats _ Benin City\'s Finest Home Restaurant.mp4',
        title: 'Dominica\'s Treats',
        subtitle: 'Benin City\'s Finest Home Restaurant',
        description: 'A warm food-story clip built around comfort, flavor, and local character.',
        tags: ['Food', 'Home Restaurant', 'Benin City']
      },
      {
        file: 'Ember Lane Kitchen - Urban Grill - Lagos.mp4',
        title: 'Ember Lane Kitchen',
        subtitle: 'Urban Grill, Lagos',
        description: 'A stylish restaurant showcase with an urban grill mood and modern pacing.',
        tags: ['Restaurant', 'Urban Grill', 'Lagos']
      },
      {
        file: 'Jollof Central _ Authentic Party Jollof Rice - Benin City.mp4',
        title: 'Jollof Central',
        subtitle: 'Authentic Party Jollof Rice, Benin City',
        description: 'A vibrant food promo centered on party energy, color, and signature taste.',
        tags: ['Jollof', 'Catering', 'Benin City']
      },
      {
        file: 'Kev Restaurant & Bar - Restaurant & Bar - Benin City.mp4',
        title: 'Kev Restaurant & Bar',
        subtitle: 'Restaurant & Bar, Benin City',
        description: 'A nightlife and dining feature with a relaxed premium venue presentation.',
        tags: ['Restaurant', 'Bar', 'Benin City']
      }
    ];
  }

  function createVideoCard(video) {
    var card = document.createElement('article');
    card.className = 'video-card fade-in-up';
    var videoUrl = encodeURI(video.file);
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'Open full screen video for ' + video.title);
    card.dataset.videoUrl = videoUrl;
    card.style.cursor = 'pointer';

    card.innerHTML =
      '<div class="video-frame-wrap">' +
      '<video class="video-frame showcase-video" autoplay muted playsinline preload="metadata" data-preview-duration="40">' +
      '<source src="' + videoUrl + '" type="video/mp4">' +
      'Your browser does not support the video tag.' +
      '</video>' +
      '</div>';

    return card;
  }

  function setupVideoPreviewLimits(root) {
    var videos = root.querySelectorAll('.showcase-video');
    var hoverAudio = new Audio(encodeURI('alexander-nakarada-superepic(chosic.com).mp3'));
    hoverAudio.preload = 'auto';
    hoverAudio.loop = true;
    hoverAudio.volume = 1;
    var lockedAudioCard = null;
    var lockedVideo = null;
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        var video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(function() {});
        } else {
          video.pause();
          video.closest('.video-card').classList.remove('video-audible');
          if (lockedAudioCard !== video.closest('.video-card')) {
            hoverAudio.pause();
            hoverAudio.currentTime = 0;
          }
        }
      });
    }, { threshold: 0.35 });

    document.addEventListener('fullscreenchange', function() {
      if (!document.fullscreenElement && lockedAudioCard) {
        hoverAudio.pause();
        hoverAudio.currentTime = 0;
        lockedAudioCard.classList.remove('video-audible');
        if (lockedVideo) {
          lockedVideo.controls = false;
        }
        lockedAudioCard = null;
        lockedVideo = null;
      }
    });

    videos.forEach(function(video) {
      var maxDuration = parseFloat(video.dataset.previewDuration || '40');
      var card = video.closest('.video-card');
      video.defaultMuted = true;
      video.muted = true;
      video.volume = 0;

      function muteAllExcept(activeVideo) {
        videos.forEach(function(otherVideo) {
          if (otherVideo !== activeVideo) {
            otherVideo.closest('.video-card').classList.remove('video-audible');
          }
        });
      }

      function enableHoverSound() {
        muteAllExcept(video);
        video.play().catch(function() {});
        hoverAudio.currentTime = 0;
        hoverAudio.play().catch(function() {});
        card.classList.add('video-audible');
      }

      function disableHoverSound() {
        if (lockedAudioCard === card) return;
        hoverAudio.pause();
        hoverAudio.currentTime = 0;
        card.classList.remove('video-audible');
      }

      function openFullVideoFullscreen() {
        lockedAudioCard = card;
        lockedVideo = video;
        video.controls = true;
        enableHoverSound();
        video.play().catch(function() {});
        if (card.requestFullscreen) {
          card.requestFullscreen().catch(function() {
            video.controls = false;
            lockedVideo = null;
            lockedAudioCard = null;
            window.location.href = card.dataset.videoUrl;
          });
        } else {
          video.controls = false;
          lockedVideo = null;
          lockedAudioCard = null;
          window.location.href = card.dataset.videoUrl;
        }
      }

      video.addEventListener('play', function() {
        if (video.currentTime >= maxDuration) {
          video.currentTime = 0;
        }
      });
      video.addEventListener('timeupdate', function() {
        if (video.currentTime >= maxDuration) {
          video.currentTime = 0;
          video.play().catch(function() {});
        }
      });
      video.addEventListener('seeking', function() {
        if (video.currentTime > maxDuration) {
          video.currentTime = maxDuration;
        }
      });
      card.addEventListener('mouseenter', enableHoverSound);
      card.addEventListener('mouseleave', disableHoverSound);
      card.addEventListener('focusin', enableHoverSound);
      card.addEventListener('focusout', disableHoverSound);
      card.addEventListener('click', openFullVideoFullscreen);
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openFullVideoFullscreen();
        }
      });
      observer.observe(video);
      video.play().catch(function() {});
    });
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
    var displayedStudents = filtered.slice(0, STUDENT_DIRECTORY_LIMIT);
    noResults.style.display = 'none';
    resultsCount.textContent = 'Showing ' + displayedStudents.length + ' student' + (displayedStudents.length > 1 ? 's' : '');

    displayedStudents.forEach(function(student) {
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
  }

  if (studentsGrid) {
    renderStudents();
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

    console.log('Rendering projects for:', s.name, 'with', s.projects.length, 'projects');
    var projectsHTML = s.projects.map(function(proj) {
      console.log('Processing project:', proj.title, 'liveLink:', proj.liveLink);
      return '<div class="project-card fade-in-up">' +
        '<img src="' + proj.image + '" alt="' + proj.title + '" class="project-card-img" loading="lazy">' +
        '<div class="project-card-body">' +
        '<h3>' + proj.title + '</h3>' +
        '<p>' + proj.description + '</p>' +
        '<div class="project-tech">' + proj.tech.map(function(t) { return '<span>' + t + '</span>'; }).join('') + '</div>' +
        '<div class="project-links">' +
        '<a href="' + proj.liveLink + '" class="btn btn-primary project-view-btn" target="_blank" rel="noopener">View Project <i class="fas fa-arrow-right"></i></a>' +
        (proj.githubLink && proj.githubLink !== '#' ? '<a href="' + proj.githubLink + '" class="github-link" target="_blank" rel="noopener"><i class="fab fa-github"></i> GitHub</a>' : '') +
        '</div>' +
        '</div>' +
        '</div>';
    }).join('');
    console.log('Generated projectsHTML:', projectsHTML);

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
