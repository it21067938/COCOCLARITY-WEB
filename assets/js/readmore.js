document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = button.getAttribute('data-target');
            const moreContent = document.getElementById(`more-description-${targetId}`);
            const isHidden = moreContent.classList.contains('hidden');

            if (isHidden) {
                moreContent.classList.remove('hidden');
                button.innerText = 'Read Less';
            } else {
                moreContent.classList.add('hidden');
                button.innerText = 'Read More';
            }
        });
    });
});
