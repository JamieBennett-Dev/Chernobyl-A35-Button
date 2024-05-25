document.addEventListener('DOMContentLoaded', function() {
    let coverWrap = document.getElementsByClassName('cover-wrap')[0];
    if (coverWrap) {
        coverWrap.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                this.classList.add('active');
            }
        });
    }
});