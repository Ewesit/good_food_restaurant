// I've added a JavaScript script at the end of the HTML body that adds event listeners to each image element within the .column divs.
// When the mouse enters the image (mouseenter event), the opacity of the "Make Order" button within the same column is set to 1, making it visible.
// When the mouse leaves the image (mouseleave event), the opacity of the button is set back to 0, hiding it again.

const columns = document.querySelectorAll('.column');

    columns.forEach(column => {
      const img = column.querySelector('img');
      const button = column.querySelector('.orderButton');

      button.addEventListener('mouseenter', () => {
        img.style.opacity = '0';
      });

      button.addEventListener('mouseleave', () => {
        img.style.opacity = '1';
      });
    });
