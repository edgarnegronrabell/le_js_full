function activateGallery() {
  const thumbnails = document.querySelectorAll('#gallery-thumbs img')
  const galleryPhoto = document.querySelector('#gallery-photo img')
  const galleryInfoTitle = document.querySelector('#gallery-info .title')
  const galleryInfoDescription = document.querySelector('#gallery-info .description')

  
  
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {  
    const currentImage = document.querySelector('.current')

      currentImage.classList.remove('current')
      thumbnail.parentNode.classList.add('current')
      galleryPhoto.setAttribute('src', thumbnail.dataset.largeVersion)
      galleryPhoto.alt = thumbnail.alt
      galleryInfoTitle.textContent = thumbnail.dataset.title
      galleryInfoDescription.textContent = thumbnail.dataset.description
    })
  })
}

document.addEventListener("DOCMContentLoaded", function() {
  activateGallery()
})

