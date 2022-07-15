const form = document.querySelector('form');
const submitButton = form.querySelector('button');
const confirmCheckbox = form.querySelector('input[type="checkbox"]');

export const disabledButton = () => {
  submitButton.disabled = true;
  confirmCheckbox.addEventListener('change', () => {
    if (submitButton.disabled) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });
};
