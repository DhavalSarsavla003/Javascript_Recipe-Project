🚀 Project Overview

This project dynamically loads a list of recipes from an external API and displays them in a modern card layout.
When a user clicks on a recipe, a separate detailed view is shown with complete recipe information.

The UI includes:

Smooth animation for recipe cards

A clean & responsive grid layout

A detailed recipe modal-like section

Hover effects and image zoom animation

🛠️ Key Features
✅ 1. Dynamic Recipe Fetching

All recipes are loaded from:
https://dummyjson.com/recipes

The app displays:

Recipe image

Name

Cuisine type

Rating

Cooking time

Difficulty level

✅ 2. Recipe Detail Page

When a recipe is clicked:

Main recipe list hides

Detail section appears

Shows full recipe info:

Ingredients

Step-by-step instructions

Meal type

Servings

Review count

Difficulty badge

Preparation time

✅ 3. Smooth UI Interaction

Card image zoom on hover

Fade-in animation using CSS keyframes

Responsive layout for mobile, tablet, and desktop

Close button switches back to main recipe list

Clean, modern layout using Bootstrap

📂 Project Structure
index.html              # Main UI and layout
JS/script.js            # All recipe fetching & display logic
Bootstrap CDN           # For styling and layout
Custom CSS              # Extra animations and hover effects

🧠 JavaScript Logic Breakdown
▶️ Data() – Load All Recipes

Fetches all recipes from API

Loops through recipe list

Creates HTML recipe cards dynamically

Inserts cards inside #output

Adds hover animations and rating badge

▶️ singleData(id) – Show Recipe Details

Triggered when the user clicks any recipe card.

It:

Hides the main recipe section

Shows the detailed recipe view (.item-background)

Fetches recipe list again

Finds the recipe with matching ID

Generates detailed HTML layout

Displays full recipe info in #item-output

Adds a close button to return back

Open index.html in any browser

Explore recipes and click on any card to view details

🎯 Learning Outcomes

By building this project, you will learn:

How to use fetch() with APIs

Dynamic DOM manipulation

Creating interactive UI elements with JS

Array functions like .map(), .find(), .join()

Building responsive designs with Bootstrap

Writing clean and modular JavaScript

All Recipe Items -
![Screenshot_27-11-2025_152549_127 0 0 1](https://github.com/user-attachments/assets/71f29ff2-6002-4728-ba06-e1c2f07bd124)

Recipe Details -
<img width="1756" height="958" alt="Screenshot 2025-11-27 152127" src="https://github.com/user-attachments/assets/77adece6-e06f-4104-9e70-b94606208741" />


