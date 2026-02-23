export default function decorate(block) {
  const rows = [...block.querySelectorAll(':scope > div')];

  const getValue = (index) => {
    const el = rows[index]?.querySelector('div');
    return el ? el.textContent.trim() : '';
  };

  const heading        = getValue(0) || 'Request more information';
  const description    = getValue(1) || '';
  const linkText       = getValue(2) || 'click here';
  const linkUrl        = getValue(3) || '#';
  const roleOptions    = getValue(4) || 'Administrator,Teacher,Parent,Student,Other';
  const submitLabel    = getValue(5) || 'Submit';
  const submitEndpoint = getValue(6) || '';

  // ← Default disclaimer matches live Pearson site
  const disclaimer = getValue(7) ||
    `By submitting this form, you agree to receiving personalized communications from Pearson. 
     You also confirm that you are 18+ years old and have read our 
     <a href="/en-us/legal-information/terms-of-use.html" class="rf-disclaimer-link">terms of use</a> 
     and 
     <a href="/en-us/privacy-center/privacy-notices.html" class="rf-disclaimer-link">privacy notice</a>. 
     You may 
     <a href="/en-us/privacy-center/privacy-notices.html" class="rf-disclaimer-link">opt-out</a> 
     of these communications at any time.`;

  // Build role options HTML
  const roles = roleOptions.split(',').map((r) =>
    `<option value="${r.trim()}">${r.trim()}</option>`
  ).join('');

  // Build all US states
  const states = [
    'Alabama','Alaska','Arizona','Arkansas','California',
    'Colorado','Connecticut','Delaware','Florida','Georgia',
    'Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas',
    'Kentucky','Louisiana','Maine','Maryland','Massachusetts',
    'Michigan','Minnesota','Mississippi','Missouri','Montana',
    'Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
    'New York','North Carolina','North Dakota','Ohio','Oklahoma',
    'Oregon','Pennsylvania','Rhode Island','South Carolina',
    'South Dakota','Tennessee','Texas','Utah','Vermont',
    'Virginia','Washington','West Virginia','Wisconsin','Wyoming'
  ].map((s) => `<option value="${s}">${s}</option>`).join('');

  // Build form HTML
  const form = document.createElement('div');
  form.className = 'request-form-wrapper';
  form.innerHTML = `
    <h2 class="rf-heading">${heading}</h2>

    <p class="rf-description">${description}</p>

    <p class="rf-parent-link">
      If you are a parent or student,
      <a href="${linkUrl}" class="rf-inline-link">${linkText}</a>.
    </p>

    <form class="rf-form" novalidate>

      <div class="rf-field">
        <label class="rf-label">
          First Name <span class="rf-required">*</span>
        </label>
        <input type="text" name="firstName" class="rf-input" required />
      </div>

      <div class="rf-field">
        <label class="rf-label">
          Last Name <span class="rf-required">*</span>
        </label>
        <input type="text" name="lastName" class="rf-input" required />
      </div>

      <div class="rf-field">
        <label class="rf-label">
          What best describes your role?
          <span class="rf-required">*</span>
        </label>
        <div class="rf-select-wrapper">
          <select name="role" class="rf-select" required>
            <option value=""></option>
            ${roles}
          </select>
        </div>
      </div>

      <div class="rf-field">
        <label class="rf-label">
          Email <span class="rf-required">*</span>
        </label>
        <input type="email" name="email" class="rf-input" required />
      </div>

      <div class="rf-field">
        <label class="rf-label">
          District/Organization
          <span class="rf-required">*</span>
        </label>
        <input type="text" name="district" class="rf-input" required />
      </div>

      <div class="rf-field">
        <label class="rf-label">
          State <span class="rf-required">*</span>
        </label>
        <div class="rf-select-wrapper">
          <select name="state" class="rf-select" required>
            <option value=""></option>
            ${states}
          </select>
        </div>
      </div>

      <div class="rf-field">
        <label class="rf-label">Zip</label>
        <input type="text" name="zip" class="rf-input" />
      </div>

      <div class="rf-field rf-error-msg" style="display:none;">
        Please fill in all required fields.
      </div>

      <button type="submit" class="rf-submit">${submitLabel}</button>

      <p class="rf-disclaimer">${disclaimer}</p>

    </form>
  `;

  // Form submit handler
  const formEl = form.querySelector('.rf-form');
  formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const errorMsg = form.querySelector('.rf-error-msg');

    const requiredFields = formEl.querySelectorAll('[required]');
    let valid = true;
    requiredFields.forEach((field) => {
      if (!field.value.trim()) valid = false;
    });

    if (!valid) {
      errorMsg.style.display = 'block';
      return;
    }

    errorMsg.style.display = 'none';

    const data = Object.fromEntries(new FormData(formEl));

    if (submitEndpoint) {
      try {
        await fetch(submitEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        formEl.innerHTML = '<p class="rf-success">Thank you! We will be in touch soon.</p>';
      } catch {
        errorMsg.textContent = 'Submission failed. Please try again.';
        errorMsg.style.display = 'block';
      }
    } else {
      console.log('Form data:', data);
    }
  });

  block.replaceWith(form);
}
