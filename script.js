var images = ['wallpaper.jpg', 'wallpaper2.jpg'];
document.write("<style type='text/css'>body {background-image:linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(img/"+ images[Math.floor(Math.random() * images.length)] +");}</style>");
