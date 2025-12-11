//task1
console.log("start");
setTimeout(()=>console.log("one"),1000);
setTimeout(()=>console.log("two"),2000);
console.log("end");

//task2
function doHomework(subject, callback){
    console.log(`homework done for  ${subject} `);
    callback();
}
function alertFinished(){
    console.log("finished");
}
doHomework("math", alertFinished);

//task 3
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Download complete"), 3000);
    });
}
fetchData().then((message) => {
    console.log(message);
}); 

//task 4
function fetchuser(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve("user data received"),2000);
    });
}
async function showdata(){
    console.log("fetching user data....");
    let data = await fetchuser();
    console.log(data);
}
showdata();

//task 6 mini project
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        let output = "";
        data.forEach(user => {
            output += `<p><strong>${user.name}</strong> - ${user.email}</p>`;
        });
        document.getElementById("userList").innerHTML = output;
    })
    .catch(err => console.log("Error:", err));

//assignment

 // =====================================================
    // 1) Fetch posts and print first 5 titles (console)
    //    https://jsonplaceholder.typicode.com/posts
    // =====================================================

    async function fetchPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await res.json();

        // Print first 5 titles in console
        console.log("First 5 Post Titles:");
        posts.slice(0, 5).forEach((post, index) => {
          console.log(`${index + 1}. ${post.title}`);
        });

        // Also pass posts to DOM display function (for Task 3)
        displayPosts(posts);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    }

    // Call it
    fetchPosts();


    // =====================================================
    // 2) simulateDownload(file) → Promise with random delay
    //    Use await to download 3 files in sequence
    // =====================================================

    function simulateDownload(file) {
      return new Promise((resolve) => {
        const time = (Math.floor(Math.random() * 5) + 1) * 1000; // 1–5 sec
        console.log(`Starting download: ${file} (will take ${time / 1000}s)`);

        setTimeout(() => {
          console.log(`Finished download: ${file}`);
          resolve(file);
        }, time);
      });
    }

    async function downloadFilesInSequence() {
      console.log("\nDownloading files in sequence...");
      await simulateDownload("file1.zip");
      await simulateDownload("file2.zip");
      await simulateDownload("file3.zip");
      console.log("All downloads completed!\n");
    }

    // Run it
    downloadFilesInSequence();


    // =====================================================
    // 3) Extend Fake API Project:
    //    Display data on webpage instead of console (DOM)
    // =====================================================

    function displayPosts(posts) {
      const list = document.getElementById("postList");
      list.innerHTML = ""; // clear

      // Show first 5 titles as <li>
      posts.slice(0, 5).forEach(post => {
        const li = document.createElement("li");
        li.textContent = post.title;
        list.appendChild(li);
      });
    }


    // =====================================================
    // 4) async function getWeather(city)
    //    Simulate fetching weather with setTimeout
    // =====================================================

    async function getWeather(city) {
      console.log(`\nFetching weather for ${city}...`);

      const weatherData = await new Promise((resolve) => {
        setTimeout(() => {
          // Fake weather response
          resolve({
            city,
            temperature: "30°C",
            condition: "Sunny with clouds"
          });
        }, 2000); // 2 sec delay
      });

      console.log(
        `Weather in ${weatherData.city}: ` +
        `${weatherData.temperature}, ${weatherData.condition}`
      );
      return weatherData;
    }

    // Example calls
    getWeather("Hyderabad");
    getWeather("Mumbai");