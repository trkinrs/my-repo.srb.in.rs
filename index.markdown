---
layout: default
title: Poljoprivredni proizvodi
---
<style>
    img {
      width: 600px;
      max-width: 100%;
      height: 350px;
      object-fit: cover;
      border-radius: 15px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease-in-out;
    }

    img:hover {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      .carousel-item img {
        width: 100%;
        height: auto;
      }
    }

    .hidden-section {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 1s ease-out, transform 1s ease-out;
  }

  .show-section {
    opacity: 0.9;
    transform: translateX(0);
  }
  </style>
{% include navigation.html %}
<section id="products" class="splide container my-5 hidden-section" aria-label="Slide Container Example">
    <h2 class="text-center mb-4">Naši proizvodi</h2>
    <div class="splide__track">
      <ul class="splide__list">
      {% for image in site.data.landing.images %}
        <li class="splide__slide text-center carousel-item">
            <img src="{{ site.baseurl }}{{ image.url }}" class="d-block mx-auto carousel-img" alt="{{ image.alt }}" data-hover="{{ site.baseurl }}{{ image.hover }}">
            <p class="mt-2 carousel-item-description">{{ image.alt }}</p>
        </li>
        {% endfor %}
      </ul>
      <div class="splide__arrows">
        <button class="splide__arrow splide__arrow--prev">
          <span class="carousel-control-prev-icon p-4" aria-hidden="true"></span>
        </button>
        <button class="splide__arrow splide__arrow--next">
          <span class="carousel-control-next-icon p-4" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </section>
<section id="contact" class="container my-5 hidden-section">
        <h2 class="text-center mb-4">{{ site.data.i18n.contact_us }}</h2>
        <div class="row">
            <div class="col-md-6">
                <iframe class="w-100" height="300" src="https://www.google.com/maps/embed?" allowfullscreen></iframe>
            </div>
            <div class="col-md-6">
                <p class="mb-2"><strong>Adresa:</strong> {{ site.data.landing.address }}</p>
                <p class="mb-2"><strong>Telefon:</strong> {{ site.data.landing.phone }}</p>
                <p class="mb-2"><strong>Email:</strong> {{ site.data.landing.email }}</p>
                <p class="mb-2"><strong>Radno vreme:</strong></p>
                <ul class="p-0">
                  {% for working_hour in site.data.landing.working_hours %}
                    <li class="py-1">{{ working_hour }}</li>
                  {% endfor %}
                </ul>
            </div>
        </div>
</section>
