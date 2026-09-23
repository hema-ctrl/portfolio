// Modern Sleek AI Resume Assistant Logic for HEMAVATHY S

class ResumeChatbot {
  constructor(data) {
    this.data = data;
  }

  getResponse(userMessage) {
    const text = userMessage.toLowerCase().trim();
    
    // 1. Warm & Professional Greetings
    if (this.matchesExactOrShort(text, ['hi', 'hello', 'hey', 'greetings', 'namaste', 'vanakkam', 'macha', 'da', 'good morning', 'good evening', 'good afternoon', 'help', 'start'])) {
      return `Welcome! I am **Hemavathy's AI Assistant**. 👋\n\n` +
        `I am here to answer your questions about Hemavathy S's qualifications and resume details:\n` +
        `• 📌 **Executive Summary & Intro**\n` +
        `• 💡 **Technical Stack & Capabilities**\n` +
        `• 🚀 **Engineering Projects (EduTutor AI, Smart Service Booking)**\n` +
        `• 💼 **Internship Achievements (Vhir IT, GradTwin)**\n` +
        `• 🎓 **Education & Academic Credentials**\n` +
        `• 📬 **Direct Contact Details**\n\n` +
        `What would you like to know today?`;
    }

    // 2. Executive About & Introduction
    if (this.matches(text, ['who are you', 'who is hemavathy', 'who is hema', 'about', 'introduction', 'intro', 'bio', 'summary', 'objective', 'tell me about yourself', 'tell me about hemavathy', 'overview', 'profile'])) {
      return `📌 **EXECUTIVE SUMMARY — HEMAVATHY S**\n\n` +
        `*${this.data.personalInfo.objective}*\n\n` +
        `🎓 **Degree:** B.Sc. Computer Science (75% Aggregate)\n` +
        `🏫 **Institution:** Asan Memorial College of Arts & Science, Chennai\n` +
        `📍 **Location:** Chennai, India\n` +
        `💼 **Key Specializations:** AI/ML Model Training, Full-Stack Web Development, UI/UX Design`;
    }

    // 3. Technical Capabilities & Skills
    if (this.matches(text, ['skill', 'skills', 'technologies', 'stack', 'languages', 'frontend', 'backend', 'database', 'tools', 'strength', 'python', 'react', 'java', 'javascript', 'figma', 'node', 'mongodb'])) {
      const s = this.data.skills;
      return `💡 **TECHNICAL CAPABILITIES & PROFICIENCY:**\n\n` +
        `• **Programming:** ${s.languages.join(', ')}\n` +
        `• **Frontend:** ${s.frontend.join(', ')}\n` +
        `• **Backend:** ${s.backend.join(', ')}\n` +
        `• **Databases:** ${s.databases.join(', ')}\n` +
        `• **UI/UX & Design:** ${s.design.join(', ')}\n` +
        `• **Platforms & Tools:** ${s.tools.join(', ')}\n` +
        `• **Core Strengths:** ${s.coreStrengths.join(', ')}`;
    }

    // 4. Engineering Projects
    if (this.matches(text, ['project', 'projects', 'edututor', 'service booking', 'built', 'work', 'code', 'github'])) {
      let response = `🚀 **ENGINEERING PROJECTS SHOWCASE:**\n\n`;
      this.data.projects.forEach((p, idx) => {
        response += `**${idx + 1}. ${p.title}**\n` +
          `• *Tech Stack:* ${p.tags.join(', ')}\n` +
          `• *Details:* ${p.description}\n` +
          `• *Repository:* [GitHub Source Code](${p.github})\n\n`;
      });
      return response;
    }

    // Specific Project: EDUTUTOR AI
    if (this.matches(text, ['edututor', 'edu tutor', 'nlp', 'educational assistant'])) {
      const p = this.data.projects[0];
      return `🎓 **${p.title}**\n\n` +
        `*Tech Stack:* ${p.tags.join(', ')}\n\n` +
        `${p.description}\n\n` +
        `🔗 **GitHub Code:** [${p.github}](${p.github})`;
    }

    // Specific Project: SMART SERVICE BOOKING PORTAL
    if (this.matches(text, ['service booking', 'smart service', 'booking portal', 'fullstack', 'full stack'])) {
      const p = this.data.projects[1];
      return `🛠️ **${p.title}**\n\n` +
        `*Tech Stack:* ${p.tags.join(', ')}\n\n` +
        `${p.description}\n\n` +
        `🔗 **GitHub Code:** [${p.github}](${p.github})`;
    }

    // 5. Internship Achievements
    if (this.matches(text, ['experience', 'internship', 'intern', 'vhir', 'gradtwin', 'job', 'work experience'])) {
      let response = `💼 **INTERNSHIP & WORK RECORD:**\n\n`;
      this.data.experience.forEach(e => {
        response += `• **${e.role}** — *${e.company}* (${e.period})\n  ${e.details}\n\n`;
      });
      return response;
    }

    // 6. Educational Credentials
    if (this.matches(text, ['education', 'college', 'degree', 'study', 'studied', 'school', 'marks', 'percentage', 'aggregate', 'asan', 'corley', 'b. sc', 'bsc'])) {
      let response = `🎓 **EDUCATIONAL CREDENTIALS:**\n\n`;
      this.data.education.forEach(ed => {
        response += `• **${ed.degree}** (${ed.period})\n  *${ed.institution}*\n  *Score:* ${ed.score}\n\n`;
      });
      return response;
    }

    // 7. Certifications
    if (this.matches(text, ['certification', 'certifications', 'naan mudhalvan', 'certificate', 'diploma'])) {
      return `📜 **VERIFIED CERTIFICATIONS:**\n\n` +
        this.data.certifications.map(c => `• ${c}`).join('\n');
    }

    // 8. Official Contact & Social Profiles
    if (this.matches(text, ['contact', 'email', 'gmail', 'phone', 'number', 'mobile', 'reach', 'linkedin', 'github', 'location', 'address'])) {
      const p = this.data.personalInfo;
      return `📬 **OFFICIAL CONTACT DETAILS:**\n\n` +
        `• 📞 **Phone:** ${p.phone}\n` +
        `• ✉️ **Email:** [${p.email}](mailto:${p.email})\n` +
        `• 📍 **Location:** ${p.location}\n` +
        `• 💼 **LinkedIn:** [${p.linkedin}](${p.linkedin})\n` +
        `• 🐙 **GitHub:** [${p.github}](${p.github})`;
    }

    // Default Fallback Response
    return `I am trained on Hemavathy S's verified resume background. 👋\n\n` +
      `You can ask me about:\n` +
      `• *"Who is Hemavathy?"*\n` +
      `• *"What are her technical skills?"*\n` +
      `• *"Show her engineering projects"*\n` +
      `• *"Tell me about her internships"*\n` +
      `• *"What is her education?"*\n` +
      `• *"How can I contact her?"*`;
  }

  matchesExactOrShort(text, greetings) {
    return greetings.some(g => text === g || text === g + '!' || text === g + '.');
  }

  matches(text, keywords) {
    return keywords.some(k => text.includes(k));
  }
}

// UI Controller & Flex Scroll Fix
document.addEventListener('DOMContentLoaded', () => {
  const bot = new ResumeChatbot(resumeData);
  const floatMessages = document.getElementById('floating-chat-messages');
  const floatInput = document.getElementById('floating-chat-input');
  const floatSend = document.getElementById('floating-chat-send');
  const botToggleBtn = document.getElementById('bot-toggle-btn');
  const botWidget = document.getElementById('bot-widget');
  const botCloseBtn = document.getElementById('bot-close-btn');
  const botBadge = document.getElementById('bot-badge');

  function scrollToBottom() {
    if (!floatMessages) return;
    requestAnimationFrame(() => {
      floatMessages.scrollTop = floatMessages.scrollHeight;
    });
  }

  function addFloatMsg(sender, text) {
    if (!floatMessages) return;
    const div = document.createElement('div');
    div.classList.add('chat-bubble', sender === 'user' ? 'user-bubble' : 'bot-bubble');
    
    let formattedText = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/\n/g, '<br>');

    div.innerHTML = formattedText;
    floatMessages.appendChild(div);
    scrollToBottom();
  }

  function showTypingIndicator() {
    const typing = document.createElement('div');
    typing.id = 'typing-indicator';
    typing.classList.add('chat-bubble', 'bot-bubble', 'typing');
    typing.innerHTML = `<span></span><span></span><span></span>`;
    floatMessages.appendChild(typing);
    scrollToBottom();
    return typing;
  }

  function sendFloat(userQuery) {
    if (!floatInput) return;
    const val = userQuery || floatInput.value.trim();
    if (!val) return;

    addFloatMsg('user', val);
    if (!userQuery) floatInput.value = '';

    const typingEl = showTypingIndicator();

    setTimeout(() => {
      typingEl.remove();
      const reply = bot.getResponse(val);
      addFloatMsg('bot', reply);
    }, 350);
  }

  if (floatSend) {
    floatSend.addEventListener('click', () => sendFloat());
  }

  if (floatInput) {
    floatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendFloat();
    });
  }

  // Quick Chips Handlers
  const quickChips = document.querySelectorAll('.chip');
  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const query = chip.getAttribute('data-query');
      if (botWidget && !botWidget.classList.contains('active')) {
        botWidget.classList.add('active');
        if (botBadge) botBadge.style.display = 'none';
      }
      sendFloat(query);
    });
  });

  if (botToggleBtn && botWidget) {
    botToggleBtn.addEventListener('click', () => {
      botWidget.classList.toggle('active');
      if (botWidget.classList.contains('active')) {
        if (botBadge) botBadge.style.display = 'none';
        if (floatInput) floatInput.focus();
        scrollToBottom();
      }
    });
  }

  if (botCloseBtn && botWidget) {
    botCloseBtn.addEventListener('click', () => {
      botWidget.classList.remove('active');
    });
  }
});
