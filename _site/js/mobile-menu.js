function toggleDropdown(button) {
  const dropdown = button.closest('.dropdown-menu');
  const isOpen = dropdown.getAttribute('data-open') === 'true';
  dropdown.setAttribute('data-open', !isOpen);
  button.classList.toggle('active');
}
