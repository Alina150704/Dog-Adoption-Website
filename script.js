document.addEventListener('DOMContentLoaded', () => {
    const dogs = [
        { name: 'Buddy', breed: 'Golden Retriever', age: '2 years', image: 'images/dog2.jpg' },
        { name: 'Lucy', breed: 'Labrador', age: '1 year', image: 'images/lab.jpg' }, // Fixed path
        { name: 'Max', breed: 'German Shepherd', age: '3 years', image: 'images/dog3.jpg' },
        // Add more dogs here if needed
    ];

    const dogList = document.querySelector('.dog-list');
    dogs.forEach(dog => {
        const dogProfile = document.createElement('div');
        dogProfile.classList.add('dog-profile');
        dogProfile.innerHTML = `
            <img src="${dog.image}" alt="${dog.name}">
            <h3>${dog.name}</h3>  <!-- Fixed the template string -->
            <p>Breed: ${dog.breed}</p>
            <p>Age: ${dog.age}</p>
        `;
        dogList.appendChild(dogProfile);
    });
});