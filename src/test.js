// InnerHTML
document.body.innerHTML += '<div class="myClass"><p>fdlqkmsfj</p></div>';

// Avace Append child
const div = document.createElement('div');
div.classList.add('myClass');

const p = document.createElement('p');
p.append(
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima expedita laboriosam totam officiis. Officia similique minima harum culpa, totam quisquam voluptatibus laudantium a dolorum voluptates amet aut enim, laborum expedita.',
);

div.appendChild(p);
document.body.appendChild(div);
