# T A T S U K I - NFT Showcase Website

A responsive, "degen" anime NFT showcase website built with HTML, CSS, and JavaScript. The site features a neon aesthetic, custom fonts, dynamic animations, an interactive meme maker, and a background music player.

## Features

-   **Three Unique Pages:** Home, About, and Meme Maker.
-   **Responsive Design:** Mobile-first design that looks great on all devices.
-   **Custom Styling:** A unique neon color palette (Deep Purple, Neon Yellow, Neon Green) with Orbitron and Poppins fonts.
-   **Interactive Meme Maker:**
    -   Select from preset images or upload your own.
    -   Add and customize text with various fonts and a full color picker.
    -   Drag and drop text to reposition it.
    -   Download your creation as a PNG file.
-   **Dynamic Animations:** "Chaotic" and engaging animations on page load and scroll, powered by GSAP.
-   **Background Music:** A toggleable synthwave music track powered by Howler.js.

## Customization

This website is designed to be easily customized. Here's how to change the placeholder content:

### 1. Background Music

The website is configured to play a background audio track.

1.  **Add your audio file:** Place your `.mp3` or other web-compatible audio file inside the `assets/audio/` directory.
2.  **Update the path:** Open the `js/main.js` file. On line 11, you will find the `sound` object initialization. Change the `src` path from `assets/audio/placeholder-track.mp3` to the path of your new file.

```javascript
// js/main.js

const sound = new Howl({
    src: ['assets/audio/your-track-name.mp3'], // <-- CHANGE THIS
    loop: true,
    // ...
});
```

### 2. Images

All placeholder images are located in the `assets/images/` directory.

-   **Hero Image:** Replace `hero-dragon.png` with your own image.
-   **NFT Gallery:** Replace the `nft-placeholder-1.png` through `nft-placeholder-8.png` files with your actual NFT art. The Meme Maker presets will automatically update if you keep the filenames the same.

### 3. Social Media & Marketplace Links

The social media and marketplace links are on the Home page (`index.html`).

1.  Open `index.html`.
2.  Scroll to the bottom to find the `cta` (Call to Action) section.
3.  Replace the `#` in the `href` attributes with your actual URLs.

```html
<!-- index.html -->

<div class="social-links">
    <a href="https://twitter.com/your-profile" class="social-link">Twitter</a>  <!-- <-- CHANGE THIS -->
    <a href="https://discord.gg/your-invite" class="social-link">Discord</a>    <!-- <-- CHANGE THIS -->
    <a href="https://opensea.io/your-collection" class="social-link">Marketplace</a> <!-- <-- CHANGE THIS -->
</div>
```

## Deployment to Vercel (Free)

Deploying this static website is a simple, free process using Vercel.

1.  **Sign up for Vercel:** Go to [vercel.com](https://vercel.com) and sign up for a free account. It's easiest to sign up using your GitHub, GitLab, or Bitbucket account.

2.  **Push Code to a Git Repository:**
    -   Create a new repository on your chosen Git provider (e.g., GitHub).
    -   Follow the instructions to push the website files (including this `README.md`) to your new repository.

3.  **Import Project on Vercel:**
    -   On your Vercel dashboard, click **"Add New..."** and select **"Project"**.
    -   The "Import Git Repository" screen will appear. Find and select the repository you just created and click **"Import"**.

4.  **Configure and Deploy:**
    -   Vercel will automatically detect that this is a static site with no specific framework. You do not need to change any settings.
    -   Click the **"Deploy"** button.

5.  **Done!**
    -   Vercel will build and deploy your site. This usually takes less than a minute.
    -   Once finished, you will be taken to the project dashboard where you will find your live URL. Congratulations!
