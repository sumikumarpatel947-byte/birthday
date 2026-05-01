# 🌸 Birthday Surprise for Shree

A cinematic, romantic birthday surprise website built with React, Vite, Framer Motion, and Tailwind CSS.

## 🚀 Running the Application

The development server is already running at: **http://localhost:5173/**

If you need to restart it later:
```bash
npm run dev
```

To build for production:
```bash
npm run build
```

## 📸 Adding Your Actual Photos

Replace the placeholder SVG files in `public/photos/` with your actual photos:

**Required photos (rename your files accordingly):**
- `photo1.jpg` → Couple walking (back view)
- `photo2.jpg` → Yellow kurta split selfie
- `photo3.jpg` → Video call brushing teeth
- `photo4.jpg` → Snapchat dog filter side by side
- `photo5.jpg` → Video call heart hands
- `photo6.jpg` → Temple selfie daisy filter
- `photo7.jpg` → Indoor selfie pink bows
- `photo8.jpg` → Bike selfie daisy filter
- `photo_final.jpg` → Dusty car "Shree" writing

**How to add photos:**
1. Place your actual photo files in the `public/photos/` folder
2. Make sure they have the exact filenames listed above
3. Use JPG format for best compatibility
4. Recommended size: 800x600 or higher for good quality

## 🎬 Scene Overview

The website features 7 cinematic scenes:

1. **Entry** - Golden particles with "Shree Radhe Betaa Ji" greeting
2. **Question** - Interactive "Aaj kuch special hai??" with playful buttons
3. **Tease** - Animated gift box reveal
4. **Photos** - Photo gallery with one-by-one reveal and shayari
5. **Birthday** - Celebration explosion with confetti, fireworks, and balloons
6. **Message** - Typewriter love letter effect
7. **Ending** - Final photo with cinematic fade to black

## 🎨 Design Features

- **Fonts**: Cormorant Garamond (headings), Tiro Devanagari Hindi (shayari), DM Sans (UI)
- **Colors**: Deep space black background with gold and rose accents
- **Animations**: Framer Motion for all scene transitions and element reveals
- **Effects**: Glassmorphism cards, glow effects, shimmer buttons
- **Responsive**: Mobile-first design, works on all screen sizes

## 📂 Project Structure

```
Birthday/
├── public/
│   └── photos/          # Place your actual photos here
├── src/
│   ├── components/
│   │   ├── StarField.jsx       # Animated star background
│   │   ├── Scene1_Entry.jsx    # Greeting scene
│   │   ├── Scene2_Question.jsx # Interactive question
│   │   ├── Scene3_Tease.jsx    # Gift box reveal
│   │   ├── Scene4_Photos.jsx   # Photo gallery
│   │   ├── Scene5_Birthday.jsx # Birthday celebration
│   │   ├── CakeCutModal.jsx    # Cake cutting animation
│   │   ├── Scene6_Message.jsx  # Love message
│   │   └── Scene7_Ending.jsx   # Final scene
│   ├── App.jsx          # Main scene controller
│   ├── index.css        # Global styles & design system
│   └── main.jsx         # Entry point
├── package.json
├── vite.config.js
└── index.html
```

## 💝 Special Features

- **Age Calculator**: Automatically calculates Shree's age from DOB (May 2, 2007)
- **Birthday Detection**: Shows special message if today is actually May 2nd
- **Cake Cutting**: Interactive cake cutting ceremony with celebration effects
- **Photo Reveal**: Progressive unlock system for photos with romantic shayari
- **Star Field**: Always-visible animated particle background

## 🎯 Tips

- The website auto-advances through scenes, but some have interactive elements
- In Scene 4, click "✨ Agla Pal Dekhna Hai..." to unlock each photo
- In Scene 5, click "🎂 Cake Kaatni Hai??" for the cake cutting ceremony
- At the end, click "Phir Se Dekhna Hai 🔄" to restart the experience
- All animations are smooth with 0.8s transitions between scenes

## ❤️ Made with love for Shree

Happy Birthday! 🌸✨
