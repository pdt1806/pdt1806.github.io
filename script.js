var images = ['wallpaper.jpg', 'wallpaper2.jpg', 'wallpaper3.jpg', 'wallpaper4.jpg', 'wallpaper5.png', 'wallpaper6.png', 'wallpaper7.jpg', 'wallpaper8.png', 'wallpaper9.jpg', 'wallpaper10.jpg'];
document.write("<style type='text/css'>body {background-image:linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(img/"+ images[Math.floor(Math.random() * images.length)] +");}</style>");
