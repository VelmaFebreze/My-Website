const items = document.querySelectorAll('.item:not(:first-child)');

const options = {
  threshold: 0.5
}

function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    } else { // this else part is not compulsory
      entry.target.classList.remove('slide-in');
    }
  });
}

const observer = new IntersectionObserver(addSlideIn, options)

items.forEach(item => {
  observer.observe(item);
})



const map = L.map('map').setView([36.790508, //latitude
        -81.770187], //longitude
            12);    //zoom

        const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        var circle = L.circle([36.790508, -81.770187], {radius: 1500, color: 'lime'}).addTo(map);

        circle.bindPopup("The small town of Glade Spring, Virginia.");