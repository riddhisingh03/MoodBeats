const moodTracks = {
    happy: [
      {
        title: "Happy",
        artist: "Pharrell Williams",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/60nZcImufyMA1MKQY3dcCH?utm_source=generator" width="100%" height="200" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title:"Can't Stop the Feeling!",
        artist:"Justin Timberlake",
        embed:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6JV2JOEocMgcZxYSZelKcc?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title:"Uptown Funk",
        artist:"Mark Ronson ft. Bruno Mars",
        embed:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/32OlwWuMpZ6b0aN2RZOeMS?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title:"Good Time",
        artist:"Owl City & Carly Rae Jepsen",
        embed:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1kPpge9JDLpcj15qgrPbYX?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title:"Shake It Off",
        artist:"Taylor Swift",
        embed:`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0cqRj7pUJDkTCEsJkx8snD?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title: "Firework",
        artist: "Katy Perry",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1CkvWZme3pRgbzaxZnTl5X?utm_source=generator" width="100%" height="200" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title: "Walking on Sunshine",
        artist: "Katrina and The Waves",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/05wIrZSwuaVWhcv5FfqeH0?utm_source=generator" width="100%" height="200" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title: "Best Day of My Life",
        artist: "American Authors",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5Hroj5K7vLpIG4FNCRIjbP?utm_source=generator" width="100%" height="200" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
    ],
    sad: [
      {
        title: "Let Her Go",
        artist: "Passenger",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2pUpNOgJBIBCcjyQZQ00qU?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title: "Someone Like You",
        artist: "Adele",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3bNv3VuUOKgrf5hu3YcuRo?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title: "All I Want",
        artist: "Kodaline",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0NlGoUyOJSuSHmngoibVAs?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title: "Skinny Love",
        artist: "Bon Iver",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3B3eOgLJSqPEA0RfboIQVM?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title: "Fix You",
        artist: "Coldplay",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7LVHVU3tWfcxj5aiPFEW4Q?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title: "The Night We Met",
        artist: "Lord Huron",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5Djt1AQnhfhYJjs4m7WS6G?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title: "When I Was Your Man",
        artist: "Bruno Mars",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0nJW01T7XtvILxQgC5J7Wh?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title: "Tears Dry on Their Own",
        artist: "Amy Winehouse",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6yLX8QnxlnEqZfs3YKCfjF?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      }
    ],
    chill: [
      {
        title: "I Like Me Better",
        artist: "Lauv",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1jXfVzMk8cSbvAXMML4Y4f?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      
      {
        title: "Banana Pancakes",
        artist: "Jack Johnson",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0BgbobvykXxEvxo2HhCuvM?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title: "Cold Little Heart",
        artist: "Michael Kiwanuka",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0qprlw0jfsW4H9cG0FFE0Z?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title: "Lost Cause",
        artist: "Billie Eilish",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4191RXFPa7Ge9XkA4cWlna?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title: "Sunflower",
        artist: "Post Malone & Swae Lee",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3KkXRkHbMCARz0aVfEt68P?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title: "Waiting on the World to Change",
        artist: "John Mayer",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5imShWWzwqfAJ9gXFpGAQh?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title: "Lost in Japan",
        artist: "Shawn Mendes",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/79esEXlqqmq0GPz0xQSZTV?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title: "Pink + White",
        artist: "Frank Ocean",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3xKsf9qdS1CyvXSMEid6g8?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      }
    ],
    energetic: [
      {
        title: "Believer",
        artist: "Imagine Dragons",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0pqnGHJpmpxLKifKRmU6WP?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title: "Stronger",
        artist: "Kanye West",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0j2T0R9dR9qdJYsB7ciXhf?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title: "Don't Start Now",
        artist: "Dua Lipa",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3PfIrDoz19wz7qK7tYeu62?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title: "Can't Hold Us",
        artist: "Macklemore & Ryan Lewis",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3bidbhpOYeV4knp8AIu8Xn?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title: "On the Floor",
        artist: "Jennifer Lopez ft. Pitbull",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3C0nOe05EIt1390bVABLyN?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      
      {
        title: "Shut Up and Dance",
        artist: "WALK THE MOON",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4kbj5MwxO1bq9wjT5g9HaA?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title: "The Middle",
        artist: "Zedd, Maren Morris, Grey",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/09IStsImFySgyp0pIQdqAc?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      },
      {
        title: "Titanium",
        artist: "David Guetta ft. Sia",
        embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4drgH8MGED51vOGSJZKUZy?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      }
    ]
  };
  
  window.onload=()=>{
    const def=document.querySelector(".moodbtn");
    showTracks('happy',def)};
    const quotes = {
      happy: "Let the sunshine in — good vibes only.",
      sad: "Tears cleanse the soul — feel it, then heal.",
      chill: "Peace begins with a deep breath.",
      energetic: "Push your limits — your energy is your power."
    };
    
  
  function showTracks(mood,click=null) {
    
    const container = document.getElementById("tracks");
    container.innerHTML = ""; // clear previous tracks
    
    document.getElementById("vibe-quote").innerText = quotes[mood];
    document.querySelectorAll(".moodbtn").forEach(btm=>
      btm.classList.remove("active"));

    if (click) {
      click.classList.add("active");
    }
    moodTracks[mood].forEach(track => {
      const card = document.createElement("div");
      card.className = "track-card";
      card.innerHTML = `
        <h3>${track.title}</h3><br>
        <p>${track.artist}</p><br>
        
          ${track.embed}
         
      `;
      container.appendChild(card);
    });
  }
  
 