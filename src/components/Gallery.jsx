
import React, { useState, useEffect } from 'react';

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    { 
      id: 1, 
      title: 'Mountain View Adventure', 
      image: '/attached_assets/WhatsApp Image 2025-09-02 at 20.41.14_1df4fa2b_1756825093302.jpg', 
      description: 'Exploring the beautiful landscapes of Nepal with stunning mountain views',
      location: 'Kathmandu Valley',
      category: 'Travel Photography'
    },
    { 
      id: 2, 
      title: 'Traditional Fashion Style', 
      image: '/attached_assets/WhatsApp Image 2025-09-02 at 20.41.15_51f6764d_1756825095867.jpg', 
      description: 'Embracing traditional Nepali fashion with modern photography techniques',
      location: 'Cultural Heritage Site',
      category: 'Portrait Photography'
    },
    { 
      id: 3, 
      title: 'Natural Rock Formations', 
      image: '/attached_assets/WhatsApp Image 2025-09-02 at 20.41.18_56895b6e_1756825098112.jpg', 
      description: 'Capturing the raw beauty of Nepal\'s geological wonders and natural formations',
      location: 'Rocky Terrain',
      category: 'Nature Photography'
    },
    { 
      id: 4, 
      title: 'Scenic Bridge Journey', 
      image: '/attached_assets/WhatsApp Image 2025-09-02 at 20.41.18_ed394e4a_1756825104058.jpg', 
      description: 'Adventure photography showcasing Nepal\'s infrastructure against natural backdrops',
      location: 'Mountain Bridge',
      category: 'Adventure Photography'
    },
    { 
      id: 5, 
      title: 'Creative Night Vision', 
      image: '/attached_assets/WhatsApp Image 2025-09-02 at 20.41.20_5e4c899d_1756825106620.jpg', 
      description: 'Experimental photography exploring creative lighting and atmospheric effects',
      location: 'Urban Setting',
      category: 'Creative Photography'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Latest Design Gallery</h2>
        <div className="modern-gallery">
          <div className="gallery-display">
            <div className="gallery-images-stack">
              {galleryImages.map((item, index) => (
                <div
                  key={item.id}
                  className={`gallery-image-card ${index === currentSlide ? 'active' : ''} ${
                    index === (currentSlide + 1) % galleryImages.length ? 'next' : ''
                  }`}
                  style={{
                    zIndex: index === currentSlide ? 3 : index === (currentSlide + 1) % galleryImages.length ? 2 : 1,
                    transform: `
                      ${index === currentSlide ? 'translateX(0) scale(1)' : 
                        index === (currentSlide + 1) % galleryImages.length ? 'translateX(30%) scale(0.85)' : 
                        'translateX(60%) scale(0.7)'}
                    `
                  }}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="image-overlay">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <div className="image-meta">
                      <span><i className="fas fa-map-marker-alt"></i> {item.location}</span>
                      <span><i className="fas fa-camera"></i> {item.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="gallery-navigation">
            <div className="gallery-counter">
              <span>Image {currentSlide + 1} of {galleryImages.length}</span>
            </div>
            
            <div className="gallery-direct-buttons">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`direct-btn ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                >
                  Direct to {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
