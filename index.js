// Product A info
let productA = {
    emoji: "⭐",
    revenue: 200,
    commision: 50
}

// Product B info
let productB = {
    emoji: "🔥",
    revenue: 300,
    commision: 75
}

// Achievement emojis
let achievementEmoji = {
    emojiC: "🔔",
    emojiD: "💰",
    emojiE: "🏆"
}

// DOM elements 
const productAEl = document.getElementById("product-a")
const productBEl = document.getElementById("product-b")
const liveSalesEl = document.getElementById("live-sales")
const liveAchievementsEl = document.getElementById("live-achievements")
const salesEl = document.getElementById("sales")
const achievementsEl = document.getElementById("achievements")
const totalRevenueEl = document.getElementById("total-revenue")
const totalCommisionEl = document.getElementById("total-commision")
const resetBtnEl = document.getElementById("reset-btn")

// Global variables 
let totalSales = 0;
let totalAchievements = 0; 
let revenueAchievementEarned = false;
let salesAchievementEarned = false;

// Calculate initial total revenue and commision 
let totalRevenue = productA.revenue + productB.revenue;
let totalCommision = productA.commision + productB.commision;
 
// Helper function to display an emoji in a given container 
function displayEmoji(emoji, element) {
    const emojiEl = document.createElement("span");
    emojiEl.innerText = emoji;
    element.appendChild(emojiEl);
}


function displayAchievementEmojis() {
  achievementsEl.innerHTML = "";
  let achievementEmojis = [];
  if (totalAchievements > 0) {
    // First sale achievement
    achievementEmojis.push(achievementEmoji.emojiC);
  }
  if (revenueAchievementEarned) {
    // Revenue achievement
    for (let i = 0; i < Math.floor(totalRevenue / 2500); i++) {
      achievementEmojis.push(achievementEmoji.emojiD);
    }
  }
  if (salesAchievementEarned) {
    // Sales achievement
    for (let i = 0; i < Math.floor(totalSales / 15); i++) {
        achievementEmojis.push(achievementEmoji.emojiE);
    }
  }

  // Update the number of achievements displayed
  liveAchievementsEl.innerHTML = `Live Achievements - ${achievementEmojis.length}`;

  // Display all the achievement emojis
  for (let i = 0; i < achievementEmojis.length; i++) {
    displayEmoji(achievementEmojis[i], achievementsEl);
  }
}



// Event listener for Product A clicks 
productAEl.addEventListener("click", function() {
    totalSales++;
    liveSalesEl.innerHTML = `Live Sales - ${totalSales}`;
    displayEmoji(productA.emoji, salesEl);
    
    // Update revenue and commision 
    totalRevenue += productA.revenue;
    totalCommision += productA.commision; 
    
    // Checks for achievement conditions 
    if (totalSales === 1) {
        // First sale achievement 
        totalAchievements++;
        liveAchievementsEl.innerHTML = `Live Achievements - ${totalAchievements}`;
        displayEmoji(achievementEmoji.emojiC, achievementsEl);
    } if (totalRevenue >= 2500 && !revenueAchievementEarned) {
        // Revenue achievement 
        revenueAchievementEarned = true;
        totalAchievements++;
        liveAchievementsEl.innerHTML = `Live Achievements - ${totalAchievements}`;
        displayEmoji(achievementEmoji.emojiD, achievementsEl);
        displayAchievementEmojis()
    } if (totalSales % 15 === 0 && !salesAchievementEarned) {
        // Sales achievement 
        salesAchievementEarned = true;
        totalAchievements += Math.floor(totalSales / 15);
        liveAchievementsEl.innerHTML = `Live Achievements - ${totalAchievements}`;
        for (let i = 0; i < Math.floor(totalSales / 15); i++) {
            displayEmoji(achievementEmoji.emojiE, achievementsEl);
        }
    }
    
    // Call displayAchievementEmojis to display all earned achievement emojis
    displayAchievementEmojis();
    
    // Update total revenue and commision display 
    totalRevenueEl.innerHTML = "$" + totalRevenue;
    totalCommisionEl.innerHTML = "$" + totalCommision; 
    
    // Save updated values of totalRevenue and totalCommision to localStorage
    localStorage.setItem("totalRevenue", totalRevenue);
    localStorage.setItem("totalCommision", totalCommision);
})

    // Event listener for Product B clicks 
productBEl.addEventListener("click", function() {
    totalSales++;
    liveSalesEl.innerHTML = `Live Sales - ${totalSales}`;
    displayEmoji(productB.emoji, salesEl);
    
    // Update revenue and commision 
    totalRevenue += productB.revenue;
    totalCommision += productB.commision; 
    
    // Check for achievement conditions 
    if (totalSales === 1) {
        //First sale achievement 
        totalAchievements++;
        liveAchievementsEl.innerHTML = `Live Achievements - ${totalAchievements}`;
        displayEmoji(achievementEmoji.emojiC, achievementsEl);
    } if (totalRevenue >= 2500 && !revenueAchievementEarned) {
        //Revenue achievement 
        revenueAchievementEarned = true;
        totalAchievements++;
        liveAchievementsEl.innerHTML = `Live Achievements - ${totalAchievements}`;
        displayEmoji(achievementEmoji.emojiD, achievementsEl);
        displayAchievementEmojis();
    } if (totalSales % 15 === 0 && !salesAchievementEarned) {
        //Sales achievement 
        salesAchievementEarned = true;
        totalAchievements += Math.floor(totalSales / 15);
        liveAchievementsEl.innerHTML = `Live Achievements - ${totalAchievements}`;
        for (let i = 0; i < Math.floor(totalSales / 15); i++) {
            displayEmoji(achievementEmoji.emojiE, achievementsEl);
        }
    }
    
    // Call displayAchievementEmojis to display all earned achievement emojis
    displayAchievementEmojis();
    
    // Update total revenue and commision display   
    totalRevenueEl.innerHTML = "$" + totalRevenue;
    totalCommisionEl.innerHTML = "$" + totalCommision; 
    
    // Save updated values of totalRevenue and totalCommision to localStorage
    localStorage.setItem("totalRevenue", totalRevenue);
    localStorage.setItem("totalCommision", totalCommision);
})

// Reset button 
resetBtnEl.addEventListener("click", function() {
    totalRevenue = 0;
    totalCommision = 0;
    totalSales = 0;
    totalAchievements = 0;
    revenueAchievementEarned = false;
    salesAchievementEarned = false;
    salesEl.innerHTML = "";
    achievementsEl.innerHTML = "";
    totalRevenueEl.innerHTML = "";
    totalCommisionEl.innerHTML = "";
    liveSalesEl.innerHTML = `Live Sales`;
    liveAchievementsEl.innerHTML = `Live Achievements`;
})

console.log(localStorage)


// Toggle button
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})
