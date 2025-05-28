const darkModeToggle = document.getElementById('darkModeToggle');
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });

        // Comment Section with AJAX
        const commentForm = document.getElementById('commentForm');
        const commentInput = document.getElementById('commentInput');
        const commentsDiv = document.getElementById('comments');

        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const commentText = commentInput.value.trim();
            if (commentText) {
                const commentElement = document.createElement('div');
                commentElement.className = 'alert alert-secondary text-primary';
                commentElement.textContent = commentText;
                commentsDiv.appendChild(commentElement);
                commentInput.value = '';
            }
        });