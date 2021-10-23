
//Load the data from the database and display it
function getRows() {



	//Reset the element
	coursesEl.innerHTML = '';
	//fetch the web service
	fetch(url, {
		method: 'GET',
	}).then(response => response.json()).then(data => {
		//Store the data from the different tables as objects 
		let courses = data.courses;
		let experience = data.experience;
		let webpages = data.webpages
			//Check if the response is a message or data from the database
		if('message' in data) {
			notEl.innerHTML = data.message
		} else {

            //Insert headers in the table
			coursesEl.innerHTML = `
         <tr>  
         <th>Title</th>
         <th>Academy</th>
         <th>Start date</th>
         <th>End date</th>
         </tr>
         `
			experienceEl.innerHTML = `
         <tr>    
         <th>Title</th>
         <th>Workspace</th>
         <th>Start date</th>
         <th>End date</th>
         </tr>`
			webpagesEl.innerHTML = `
         <tr>
         <th>Tile</th> 
         <th>Description</th>
         <th>Adress</th>
         </tr>`

         /*Load data from the object into the table rows
         and add buttons for editing and deleting*/
			courses.forEach(course => {
				coursesEl.innerHTML += `
         <tr>     
         <td>${course.title}</td>
         <td>${course.academy}</td>
         <td>${course.start}</td>
         <td>${course.end}</td>


       </tr>
       `
			})
			experience.forEach(experience => {
				experienceEl.innerHTML += `
         <tr>      
         <td>${experience.title}</td>
         <td>${experience.workplace}</td>
         <td>${experience.start}</td>
         <td>${experience.end}</td>
       </tr>`
			})
			webpages.forEach(webpage => {
                /*If the screen width is less than 769px 
                display the links with the word link.
                Otherwise display the links with the url.
                */
				link = webpage.url
				if(window.innerWidth < 769) {
					link = `Link`
				} else {
					link = webpage.url
				}
				webpagesEl.innerHTML += `
         <tr> 
         <td>${webpage.title}</td>
         <td>${webpage.description}</td>
         <td> <a href=${webpage.url}>${link}</a></td>
         
       </tr>`
			})
        
		}
	}).catch(error => {
		console.log('Error: ', error)
	})
}
